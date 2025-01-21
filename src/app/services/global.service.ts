import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

constructor() { }
LoginView=signal(false);
cartQuantity=signal(0);
isAdmin:BehaviorSubject<boolean>=new BehaviorSubject(false)
isLoginView:BehaviorSubject<boolean>=new BehaviorSubject(false)

getCartQuantity(){
  return this.cartQuantity()
}

setCartQuantity(quantity: number){
    this.cartQuantity.update(PrevcartQuantity => PrevcartQuantity+quantity);
  }
  getLoginView(){
    return this.LoginView()
  }
  
  setLoginView(view: boolean){
      this.LoginView.set(view);
    }
  getIsAdmin(){
    return this.isAdmin
  }
  
  setIsAdmin(chageRole: boolean){
      this.isAdmin.next(chageRole);
    }
    // getIsLoginView(){
    //   return this.isLoginView
    // }
    
    // setIsLoginView(view: boolean){

      
    //   this.isLoginView.next(view);
        
    //   }
}
