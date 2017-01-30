import { Component, OnInit } from '@angular/core';
import { TokenComponent } from '../token/token.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  titulo: string = "Escolha sua chave!";
  tokens: TokenComponent[] = [];  

  informaToken(cToken, cValor){
    this.titulo = "Token: " + cToken + " Chave: " + cValor;
  }

  ngOnInit() {
    console.log('oi');

    var token1 = new TokenComponent();
    var token2 = new TokenComponent();
    var token4 = new TokenComponent();
    var token3 = new TokenComponent();
    

    token1._id = 'asb';
    token1.token = 1;
    token1.valor = 5465;

    token2._id = 'bbb';
    token2.token = 2;
    token2.valor = 1111;

    token4._id = 'asb';
    token4.token = 4;
    token4.valor = 5465;

    token3._id = 'bbb';
    token3.token = 3;
    token3.valor = 1111;


    this.tokens.push(token1);
    this.tokens.push(token2);
    this.tokens.push(token4);
    this.tokens.push(token3);

  }

}
