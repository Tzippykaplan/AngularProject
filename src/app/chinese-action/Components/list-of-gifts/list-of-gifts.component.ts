import { Component, OnInit } from '@angular/core';
import { Gift } from '../../../Models/gift.model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GiftsService } from '../../../services/gifts.service';
import { Observable } from 'rxjs';
import { DonorsService } from '../../../services/donor.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-of-gifts',
  templateUrl: './list-of-gifts.component.html',
  styleUrl: './list-of-gifts.component.css',
  styles: [
    `:host ::ng-deep .p-dialog .gift-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }`,
  ],
})
export class ListOfGiftsComponent implements OnInit {
  giftDialog: boolean = false;

  gifts!: Gift[];

  gift!: Gift;

  selectedGifts!: Gift[] | null;

  submitted: boolean = false;

  donors!: any[];

  constructor(
    private giftService: GiftsService,
    private donorService: DonorsService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router 
  ) {}
async getData()  {
   this.giftService.getAll().subscribe(data=>this.gifts=data)
}
  ngOnInit() {
    this.getData()
   this.donorService.getAll().subscribe(data=>this.donors=data);
  }

  openNew() {
    this.gift = {
      id: 0,
     name: '',
      description: '',
      donorId: 0,
      imgUrl: '',
      price:10,
    };
    this.submitted = false;
    this.giftDialog = true;
  }

  deleteSelectedGifts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected gifts?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.gifts = this.gifts.filter(
          (val) => !this.selectedGifts?.includes(val)
        );
        this.selectedGifts = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'gifts Deleted',
          life: 3000,
        });
      },
    });
  }

  editgift(gift: Gift) {
    this.gift = { ...gift };
    this.giftDialog = true;
  }

   deleteGift(gift: Gift) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + gift.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
         this.giftService.deleteGift(gift).subscribe(data=>{this.getData();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'gift Deleted',
            life: 3000,
          });});
      },
    });
  }

  hideDialog() {
    this.giftDialog = false;
    this.submitted = false;
  }

  savegift() {
    this.submitted = true;
    if (this.gift.name?.trim()) {
      if (this.gift.id) {
       this.giftService.UppdateGift(this.gift).subscribe(data=>{this.getData()
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'gift Updated',
          life: 3000,
        });})
      } else {
        this.giftService.creatGift(this.gift).subscribe(data=>{this.getData()
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'gift Created',
            life: 3000,
          });});

      }

      this.gifts = [...this.gifts];
      this.giftDialog = false;
      this.gift = {
        id: 0,
        name: '',
        description: '',
        donorId: 0,
        imgUrl: '',
        price:10,
      };
    }
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.gifts.length; i++) {
      if (this.gifts[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
    return 'danger'
  }
  todonors()
{
  this.router.navigate(['/donors', { id: 123 }]);
}
}

