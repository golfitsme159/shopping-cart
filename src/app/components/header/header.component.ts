import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/service/cartapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cartApi:CartapiService) { }

  ngOnInit(): void {
  }

}
