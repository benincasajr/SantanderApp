import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './admin/config/config.component';
import { IndexComponent } from './index/index.component';
import { ListarChavesComponent } from './listar-chaves/listar-chaves.component';
import { AlterarChavesComponent } from './alterar-chaves/alterar-chaves.component';

const appRoutes: Routes  = [
  { path: '', component: IndexComponent },
  { path: 'Configuracoes', component: ConfigComponent },
  { path: 'Chaves', component: ListarChavesComponent },
  { path: 'Alterar', component: AlterarChavesComponent },
  { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);