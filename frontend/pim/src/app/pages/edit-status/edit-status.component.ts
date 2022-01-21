import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import { ToastrService } from "ngx-toastr";

import {FormControl, FormGroup} from "@angular/forms";
import { OrderService } from '../../services/orders/order.service';

@Component({
  selector: 'app-edit-status',
  templateUrl: './edit-status.component.html',
  styleUrls: ['./edit-status.component.css']
})
export class EditStatusComponent implements OnInit {

  orderForm : any;
  order_id : any;
  isEdited: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private orderService: OrderService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log("NGONINIT BETRETEN");
    this.order_id = this.router.url.split('/').pop();
    console.log(this.order_id);
    this.orderForm = new FormGroup({
      "orderId": new FormControl(),
      "customerId": new FormControl(),
      "products": new FormControl(),
      "price": new FormControl(),
      "status": new FormControl(),
    });
    console.log(this.orderForm);
    console.log("STUFE2");
    console.log(this.order_id)
    this.orderService.getOrderById(this.order_id).subscribe((res) => {
      this.orderForm.patchValue({
        "orderId": res.data.ordersId,
        "customerId": res.data.customerId,
        "products": res.data.products,
        "price": res.data.price,
        "status": res.data.status,
      
      });
    })
    console.log("Stufe 3")
  }

  onFormSubmit(): void {
    console.log("SUBMIT")
      this.orderService.updateStatus(this.order_id, this.orderForm.get("status").value).subscribe((res) => {
        if (res.message == "Order Info updated"){
          this.router.navigate(['/orders']);
          this.isEdited = true;
        } else {
    
        }
      });
    }
}






