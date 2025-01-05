import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ListOfGiftsComponent } from './Components/list-of-gifts/list-of-gifts.component';
import { RouterModule } from '@angular/router';
import { ImportsModule } from './imports';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GiftsService } from '../services/gifts.service';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { DonorFormComponent } from './Components/donor-form/donor-form.component';
import { DonorsService } from '../services/donor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  ViewGiftsComponent } from './Components/view-gifts/view-gifts.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { BuyGiftsComponent } from './Components/buy-gifts/buy-gifts.component';
import { ListOfDonorsComponent } from './Components/list-of-donors/list-of-donors.component';
import { CartComponent } from './Components/cart/cart.component';
import { OrderListModule } from 'primeng/orderlist';
import { PayLoginComponent } from './Components/pay-login/pay-login.component';
import { PayComponent } from './Components/pay/pay.component';





@NgModule({
  declarations: [
    ListOfGiftsComponent,
    DonorFormComponent,
    ListOfDonorsComponent,
    DonorFormComponent,
   ViewGiftsComponent,
    RegisterComponent,
    LoginComponent,
    BuyGiftsComponent,
    CartComponent,
    PayLoginComponent,
    PayComponent
    ],
  imports: [ 
    
    OrderListModule, 
    DataViewModule, ButtonModule, TagModule,
    CommonModule,
    ImportsModule,
    NoopAnimationsModule,
    FormsModule,
ReactiveFormsModule,
    RouterModule.forChild([{path: 'donors', component: ListOfDonorsComponent},
      {path: 'viewGift', component: ViewGiftsComponent },
      {path: 'viewGifts', component:BuyGiftsComponent },
      {path: '', component: ListOfGiftsComponent  },
      {path: 'form', component: DonorFormComponent  },
      {path: 'login', component: LoginComponent },
      {path: 'register', component: RegisterComponent  },
      {path: 'cart', component: CartComponent },
      {path: 'payLogin', component: PayLoginComponent },
      {path: 'pay', component: PayComponent }
    ])

  ],
  providers: [MessageService, ConfirmationService, GiftsService,DonorsService],
  exports:[],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChineseActionModule { }
