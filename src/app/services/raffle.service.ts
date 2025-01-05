import { inject, Injectable } from '@angular/core';
import { RaffleResponse } from '../Models/raffleResponse/raffleResponse.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { LotteryTicket } from '../Models/lotteryTicket/lotteryTicket.model';


@Injectable({
  providedIn: 'root'
})
export class RaffleService {

    private apiUrl = 'https://localhost:5001/api/Raffle';
    raffleResponseList: RaffleResponse[] = []
     http: HttpClient = inject(HttpClient)
     getRaffleResponseList(): Observable<RaffleResponse[]> {
       return this.http.get<RaffleResponse[]>(`${this.apiUrl}/raffle`);
     }
     creatLotteryTickets(id:number,cart:any): void{
      const ticketRequests: Observable<LotteryTicket>[] = [];
      cart.forEach((item:any)=>{
        const lotteryTicket: LotteryTicket = { userId: id, giftId: item.gift.id ,id:0};
        let i=0
        while (i<item.quantity) {
  
          this.creatLotteryTicket(lotteryTicket).subscribe(data=>{
           i++
          })
}
      })
  

     }
     creatLotteryTicket(lotteryTicket:LotteryTicket): Observable<LotteryTicket> {
    
          return (this.http.post<LotteryTicket>(this.apiUrl,lotteryTicket ))
 } 
    
}
