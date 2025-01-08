import { Component, signal } from '@angular/core';
import { GiftsService } from '../../../services/gifts.service';
import { Gift } from '../../../Models/gift.model';
import { Tag } from 'primeng/tag';
import { Rating } from 'primeng/rating';
import { SelectButton } from 'primeng/selectbutton';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-gifts',
  templateUrl: './view-gifts.component.html',
  styleUrl: './view-gifts.component.css',

})
export class ViewGiftsComponent {
  layout: string = 'grid';
    gifts!:Gift[];
    cart:any

    constructor(private giftService: GiftsService,   private router: Router) {
      
    }

    ngOnInit() {
        this.giftService.getAll().subscribe(data=>{this.gifts= data.slice(0, 12)
          console.log(data);
          
        })
    }
    addToCart(gift:Gift){
    this.cart = JSON.parse(sessionStorage.getItem("cart") || "[]")
     const currentItem= this.cart.find((item:any)=>item.gift.id===gift.id)
      currentItem?currentItem.quantity+=1:this.cart.push({"gift":gift,"quantity":1})
      sessionStorage.setItem("cart",JSON.stringify(this.cart))
    }
    goToCart(){
      this.router.navigate(['/cart']);
    }
}
