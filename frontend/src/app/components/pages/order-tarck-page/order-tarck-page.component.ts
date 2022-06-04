import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-order-tarck-page',
  templateUrl: './order-tarck-page.component.html',
  styleUrls: ['./order-tarck-page.component.css']
})
export class OrderTarckPageComponent implements OnInit {
  order!:Order;

  constructor(activatedRoute: ActivatedRoute,
              orderService: OrderService) {
                const params = activatedRoute.snapshot.params;
                if(!params['orderId']) return;

                orderService.trackOrderById(params['orderId']).subscribe(order => {
                  this.order = order;
                })
              }

  ngOnInit(): void {
  }

}
