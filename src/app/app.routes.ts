import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login.component';
import { ConfigComponent } from './admin/config/config.component';
import { ListarComponent } from './token/listar/listar.component';
import { TokenComponent } from './token/token/token.component';

const appRoutes: Routes  = [
  { path: '', component: LoginComponent },
  { path: 'Configuracoes', component: ConfigComponent },
  { path: 'ListarTokens', component: ListarComponent },
  { path: 'Token', component: TokenComponent },
  { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);