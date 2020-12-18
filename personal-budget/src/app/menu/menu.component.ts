import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logout() {
    document.cookie = "token = ";
    window.location.href = "/";
  }

}