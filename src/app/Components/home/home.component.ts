import { Component, OnInit } from '@angular/core';
import * as Interface from '../../Interfaces/Products';
import * as Model from '../../Models/Product';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public constructor(private saleService: SaleService) {

    this.saleService
      .getAllSale()
      .then(result => {
        this.produts = result;
      })
      .catch(error => {
        this.error = error;
      });
  }
  public error: Error;
  public produts: Interface.Product[];
  images = [
    { img: "../../../assets/معرفی-نژاد-شترمرغ-گردن-آبی-v2.jpg" },
    { img: "../../../assets/ostrich-1.jpg" },
    { img: "../../../assets/5132170_424.jpg" },
    { img: "../../../assets/1399040715375998420673994.jpg" },

  ];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "dots": true,
    "infinite": true
  };


  ngOnInit(): void {


  }

}
