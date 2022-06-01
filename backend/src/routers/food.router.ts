import { Router } from 'express';
import { sample_foods, sample_tags, sample_users } from '../data';
import asyncHandler from 'express-async-handler';
import { FoodModel } from '../models/food.model';

const router = Router();

// post foods data to mongosse
router.get("/seed", asyncHandler(
    async (req, res) => {
        const foodsCount = await FoodModel.countDocuments();
        if(foodsCount > 0){
            res.send('Seed is already done!');
            return;
        }
        
        await FoodModel.create(sample_foods);
        res.send("Send is Done!");
    }
)  )

// Get All Foods
router.get("/", asyncHandler(
    async (req, res) =>{
        const foods = await FoodModel.find();
        res.send(foods);
    }
))

// Get Food by SearchTerm 
router.get("/search/:searchTerm", asyncHandler(
    async (req, res) =>{
        const searchRegex = new RegExp(req.params.searchTerm, 'i');
        const foods = await FoodModel.find({name: {$regex: searchRegex}})
        res.send(foods);
    }
))

// get All foods by sample tag
router.get("/tags", asyncHandler(
    async (req, res) => {
        const tags = await FoodModel.aggregate([
            {
                $unwind: '$tags'
            },
            {
                $group:{
                    _id: '$tags',
                    count: {$sum: 1}
                }
            },
            {
                $project: {
                   _id: 0,
                   name: '$_id',
                   count: '$count'
                }
            }
        ]).sort({count: -1});

        const all = {
            name: 'All',
            count: await FoodModel.countDocuments()
        }

        tags.unshift(all);
        res.send(tags);
    }
))

// get food by sample tag
router.get("/tag/:tagName", asyncHandler(
    async (req, res) => {
        const foods = await FoodModel.find({tags: req.params.tagName})
        res.send(foods);
    }
))

// get food by foodID
router.get("/:foodId", asyncHandler(
    async (req, res) => {
        const food = await FoodModel.findById(req.params.foodId);
        res.send(food);
    }
))

export default router;