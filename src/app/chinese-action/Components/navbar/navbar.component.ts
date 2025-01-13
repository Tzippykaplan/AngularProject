
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-home',
              routerLink: '',

          },
          {
            label: 'Login',
        routerLink: '/login',
        icon: 'pi pi-sign-in'
          },
          {
              label: 'Manager',
              icon: 'pi pi-user-edit',
              items: [
                  {
                      label: 'Gifts',
                      icon: 'pi pi-gift',
                      routerLink: '/gifts'

                  },
                  {
                      label: 'Donors',
                      icon: 'pi pi-users',
                      routerLink: '/donors',

                    
                  },
                  {
                      label: 'Users',
                      icon: 'pi pi-user'

                  },        {
                    label: 'Raffle',
                    icon: 'pi pi-tags',
                    routerLink: '/raffle',

                }
            
              ]
          },
          {
              label: 'Shop Gifts',
              icon: 'pi pi-gift',
              routerLink: '/viewGift',
          },
        //   {
        //     label: 'Shop Gifts',
        //     icon: 'pi pi-envelope',
        //     badge: '3'
        // }
      ];
  }
}
