
import { Router } from "express";
import AsyncHandler from "express-async-handler";
import { HTTP_BAD_REQUEST } from "../constants/http_status";
import { OrderStatus } from "../constants/order_status";
import auth from "../middlewares/auth.mid";
import { OrderModel } from "../models/order.model";

const router = Router();
router.use(auth)

router.post('/create', 
AsyncHandler(async (req:any, res:any) => {
    const requestOrder = req.body;

    if(requestOrder.items.length <= 0){
        res.status(HTTP_BAD_REQUEST).send('Cart Is Empty!');
        return;
    }

    await OrderModel.deleteOne({
        user: req.user.id,
        status: OrderStatus.NEW
    });

    const newOrder = new OrderModel({...requestOrder, user: req.user.id});
    await newOrder.save();
    res.send(newOrder);
}))


router.get('/newOrderForCurrentUser', AsyncHandler(async (req:any, res) => {
    const order = await getNewOrderForCurrentUser(req);

    if(order) res.send(order);
    else res.status(HTTP_BAD_REQUEST).send();
}))


router.post('/pay', AsyncHandler(async (req: any, res) => {
    const {paymentId} = req.body;
    const order = await getNewOrderForCurrentUser(req);
    if(!order){
        res.status(HTTP_BAD_REQUEST).send('Order Not Found!');
        return;
    }

    order.paymentId = paymentId;
    order.status = OrderStatus.PAYED;
    await order.save();

    res.send(order._id);
}))

export default router;


async function getNewOrderForCurrentUser(req: any) {
    return await OrderModel.findOne({ user: req.user.id, status: OrderStatus.NEW });
}