import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  itensMenu   =  [
                    {link:'Home',rota:'/'},
                    {link:'Chaves',rota:'/Chaves'},
                    {link:'Alteração',rota:'/Alterar'},
                    {link:'Configurações',rota:'/Configuracoes'}
                ];

  ngOnInit() {
      
  }

}
