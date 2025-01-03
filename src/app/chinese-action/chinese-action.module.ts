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
import { ViewGifsComponent } from './Components/view-gifs/view-gifs.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { BuyGiftsComponent } from './Components/buy-gifts/buy-gifts.component';
import { ListOfDonorsComponent } from './Components/list-of-donors/list-of-donors.component';





@NgModule({
  declarations: [
    ListOfGiftsComponent,
    DonorFormComponent,
    ListOfDonorsComponent,
    DonorFormComponent,
    ViewGifsComponent,
    RegisterComponent,
    LoginComponent,
    BuyGiftsComponent
    
    ],
  imports: [  
    DataViewModule, ButtonModule, TagModule,
    CommonModule,
    ImportsModule,
    NoopAnimationsModule,
    FormsModule,
ReactiveFormsModule,
    RouterModule.forChild([{path: 'donors', component: ListOfDonorsComponent},
      {path: 'viewGift', component: ViewGifsComponent },
      {path: 'viewGifts', component:BuyGiftsComponent },
      {path: '', component: ListOfGiftsComponent  },
      {path: 'form', component: DonorFormComponent  },
      {path: 'register', component: RegisterComponent  }
    ])

  ],
  providers: [MessageService, ConfirmationService, GiftsService,DonorsService],
  exports:[],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChineseActionModule { }
