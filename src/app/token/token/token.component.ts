import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  @Input() token: number;
  @Input() valor: number;
  _id: string;

  ngOnInit() {
  }

}
