import { Component } from '@angular/core';
import { MarmetoShopService } from '../service/marmeto-shop.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  // toolTip = "Switch layout";
  products: any[] = [];
  inputData:string = '';
  gridLayout: boolean = false;

  constructor(private ms : MarmetoShopService) { }

  getProducts(){
    this.ms.getProducts().subscribe((data:any[]) => 
    {
      this.products = Object.values(data);
      console.log("data", data);
    })
  }
  search(){
    this.ms.searchProducts(this.inputData).subscribe((data:any[]) => 
    {
      this.products = data; 
    });
  }
  highlightText(productTitle: string): boolean {
    return !!this.inputData && productTitle.toLowerCase().includes(this.inputData.toLowerCase());
  }
  changeLayout() {
    this.gridLayout = !this.gridLayout;
    }
  ngOnInit() {
    this.getProducts();
  }
}
