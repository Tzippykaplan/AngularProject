import { Component, signal } from '@angular/core';
import { GiftsService } from '../../../services/gifts.service';
import { Gift } from '../../../Models/gift.model';
import { DataView } from 'primeng/dataview';
import { Tag } from 'primeng/tag';
import { Rating } from 'primeng/rating';
import { SelectButton } from 'primeng/selectbutton';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-gifs',
  templateUrl: './view-gifs.component.html',
  styleUrl: './view-gifs.component.css',

})
export class ViewGifsComponent {
  layout: string = 'list';
  options: string[] = ['list', 'grid'];
    gifts:Gift[]=[];


    constructor(private giftService: GiftsService) {}

    ngOnInit() {
        this.giftService.getAll().subscribe(data=>{this.gifts= data.slice(0, 12)})
    }


}
