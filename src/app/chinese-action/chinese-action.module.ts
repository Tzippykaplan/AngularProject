import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ListOfGiftsComponent } from './Components/list-of-gifts/list-of-gifts.component';
import { RouterModule } from '@angular/router';
import { ImportsModule } from './imports';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GiftsService } from '../services/gifts.service';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { DonorFormComponent } from './Components/donor-form/donor-form.component';
import { ListOfDodnorsComponent } from './Components/list-of-dodnors/list-of-dodnors.component'
import { DonorsService } from '../services/donor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewGifsComponent } from './Components/view-gifs/view-gifs.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';




@NgModule({
  declarations: [
    ListOfGiftsComponent,
    DonorFormComponent,
    ListOfDodnorsComponent,
    DonorFormComponent,
    ViewGifsComponent,
    RegisterComponent,
    LoginComponent
    ],
  imports: [  
    DataViewModule, ButtonModule, TagModule,
    CommonModule,
    ImportsModule,
    NoopAnimationsModule,
    FormsModule,
ReactiveFormsModule,
    RouterModule.forChild([{path: 'donors', component: ListOfDodnorsComponent},
      {path: 'viewGift', component: ViewGifsComponent },
      {path: '', component: ListOfGiftsComponent  },
      {path: 'form', component: DonorFormComponent  },
      {path: 'register', component: RegisterComponent  }
    ])

  ],
  providers: [MessageService, ConfirmationService, GiftsService,DonorsService],
  exports:[]
})
export class ChineseActionModule { }
