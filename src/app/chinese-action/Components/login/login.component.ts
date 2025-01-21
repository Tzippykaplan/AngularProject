import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { RoleType, User } from '../../../Models/user/user.model';
import { Router } from '@angular/router';
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  @Input() visible!: boolean;
  @Output() visibleChange:EventEmitter<boolean>=new EventEmitter(false);
  frmLogin!: FormGroup;
  userService=inject(UserService) 
  globalService = inject(GlobalService)
  constructor(private router:Router){
  this.frmLogin = new FormGroup({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),

})}
hideDialog() {
  debugger
  this.visibleChange.emit(false)
  this.globalService.setLoginView(false)
  console.log("lllllllllll");
  
}
login() {
  if (this.frmLogin.valid) {
    this.userService.Login(this.frmLogin.value).subscribe({
      next: (data) => {
        console.log(data);
        sessionStorage.setItem("user", JSON.stringify(data));
       this.globalService.setIsAdmin(true)

      },
      error: (err) => {
        console.error("Login failed:", err);
        this.router.navigate(['register']);
      },
    });
  } 
  this.router.navigate(['pay'])
}

}
