import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Donor } from '../../../Models/donor/donor';
import { DonorsService } from '../../../services/donor.service';
import { emailUniqe } from '../../../Validators/emailUniqe';
import { __values } from 'tslib';

@Component({
  selector: 'app-donor-form',
  templateUrl: './donor-form.component.html',
  styleUrl: './donor-form.component.css'
})
export class DonorFormComponent implements OnInit {
  frmDonor:FormGroup=new FormGroup({});
  donorService:DonorsService=inject(DonorsService)
  @Input() donor!: Donor;
  emailReg: RegExp = new RegExp('[]@[a-z].[a-z]')
  constructor(private activatedRoute: ActivatedRoute, private donorSrv: DonorsService) {
    this.frmDonor = new FormGroup({
      firstName: new FormControl('', [emailUniqe()]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      email: new FormControl('', [Validators.pattern(this.emailReg),Validators.required])
    });
  }
  ngOnInit() {
console.log(this.donor);
console.log("dfghjkl");


  }
  

ngOnChanges(){
    console.log(this.donor);
console.log("dfghjkl");
  }
  save(){
    this.donorService.creatDonor(this.frmDonor.value)
    this
  }
}
