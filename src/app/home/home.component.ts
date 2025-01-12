import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ConfigService } from '../config.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  newProduct: any = { 
    name: '',
    category: '',
    description: '',
    price: 0
  };
  editingProduct: any = null;
  title = "";
  title2 = "";
  title3 = "";
  title4 = "";
  title5 = "";
  title6 = "";
  title7 = "";
  title8 = "";
  title9 = "";
  title10 = "";
  title11 = "";
  title12 = "";
  title13 = "";
  title14 = "";
  title15 = "";

  constructor(private productsService: ProductsService, private config: ConfigService) {
    config.getContent().subscribe(
      (content)=>{
        this.title=content.title
        this.title2=content.title2
        this.title3=content.title3
        this.title4=content.title4
        this.title5=content.title5
        this.title6=content.title6
        this.title7=content.title7
        this.title8=content.title8
        this.title9=content.title9
        this.title10=content.title10
        this.title11=content.title11
        this.title12=content.title12
        this.title13=content.title13
        this.title14=content.title14
        this.title15=content.title15

        console.log("Menü Items:", content)
      }
    )
    
  }


  ngOnInit(): void {

    this.productsService.getProducts().subscribe((response) => {
      this.products = Object.values(response);
    });
  }


  addProduct(): void {
    this.productsService.addProduct(this.newProduct).subscribe(() => {
      this.products.push(this.newProduct); 
      this.newProduct = { name: '', category: '', description: '', price: 0 };
    });
  }


  editProduct(product: any): void {
    this.editingProduct = { ...product };
  }

  
  saveProduct(): void {
    if (this.editingProduct) {
      this.productsService.updateProduct(this.editingProduct.id, this.editingProduct).subscribe(() => {
        const index = this.products.findIndex(p => p.id === this.editingProduct.id);
        this.products[index] = this.editingProduct;
        this.editingProduct = null;
      });
    }
  }

  deleteProduct(key: string): void {
    this.productsService.deleteProduct(key).subscribe(() => {
      // console.log("totlve" + key)
      this.products = this.products.filter(p => p.key !== key); 
    });
  }

}

