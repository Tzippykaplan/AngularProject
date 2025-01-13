import { Component, EventEmitter, Output } from '@angular/core';
import { Donor } from '../../../Models/donor/donor';
import { DonorsService } from '../../../services/donor.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-list-of-dodnors',
  templateUrl: './list-of-donors.component.html',
  styleUrl: './list-of-donors.component.css',
  styles: [
    `:host ::ng-deep .p-dialog .gift-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }`,
  ],
})

export class ListOfDonorsComponent {
  layout: string = 'list';
  options: string[] = ['list', 'grid'];
  visible: boolean = false;

  donors!: Donor[];

  donor!: Donor;

  selectedDonors!: Donor[] | null;

  submitted: boolean = false;


  constructor(
    private donorService: DonorsService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}
 getData()  {
 this.donorService.getAll().subscribe(data=>this.donors=data)
}
  ngOnInit() {
    this.getData()
  }

  openNew() {
    this.donor = {
      id: 0,
      firstName: '',
      lastName:'',
      email:'',
    };
    this.submitted = false;
    this.visible = true;
  }

  deleteSelectedDonors() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected donors?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (this.selectedDonors){
        this.selectedDonors.forEach(donor => {
          this.donorService.deleteDonor(donor).subscribe(data=>{ this.selectedDonors = null;
            this.getData()
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'gifts Deleted',
              life: 3000,
            })})}
         )} },
    });
  }

  editdonor(donor: Donor) {
    this.donor = { ...donor };
    this.visible = true;
  }

 async  deleteDonor(donor: Donor) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + donor.firstName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: async ()  => {
         this.donorService.deleteDonor(donor).subscribe(data=>{
        this.getData()
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'donor Deleted',
          life: 3000,
        })});
      },
    });
  }

  hideDialog() {
    this.visible = false;
    this.submitted = false;
  }
  refreshData(refresh:boolean){
  refresh?this.getData():""
  }

//  async savedonor() {
//     this.submitted = true;
//     if (this.donor.firstName?.trim()) {
//       if (this.donor.id) {
//       await this.donorService.UppdateDonor(this.donor).toPromise()
//         await this.getData()
//         this.messageService.add({
//           severity: 'success',
//           summary: 'Successful',
//           detail: 'donor Updated',
//           life: 3000,
//         });
//       } else {
//         await this.donorService.creatDonor(this.donor).toPromise();
//         await this.getData()
//         this.messageService.add({
//           severity: 'success',
//           summary: 'Successful',
//           detail: 'donor Created',
//           life: 3000,
//         });
//       }

//       this.donors = [...this.donors];
//       this.donorDialog = false;
//       this.donor = {
//         id: 0,
//         firstName: '',
//         lastName:'',
//         email:'',
//       };
//     }
//   }



}
