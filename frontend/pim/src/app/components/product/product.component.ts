import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product | any;

  constructor() { }

  ngOnInit(): void {
  }

}
