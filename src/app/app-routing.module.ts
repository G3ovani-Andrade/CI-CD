import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoLayoutComponent } from './layouts/autenticacao-layout/autenticacao-layout.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AlunosComponent } from './components/alunos/alunos.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { privadoChildGuard, privadoGuard, publicoGuard } from './guards/autenticacao.guard';
import { NaoAutorizadoComponent } from './components/nao-autorizado/nao-autorizado.component';
import { NaoEncontradoComponent } from './components/nao-encontrado/nao-encontrado.component';
import { AcompanhamentosComponent } from './components/acompanhamentos/acompanhamentos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AlunosCadastroComponent } from './components/alunos-cadastro/alunos-cadastro.component';
import { AcompanhamentosCadastroComponent } from './components/acompanhamentos-cadastro/acompanhamentos-cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'labschool',
    component: BaseLayoutComponent,
    canActivateChild: [privadoChildGuard],
    children: [
      { 
        path: '', 
        redirectTo: '/labschool/inicio',
        pathMatch: 'full'
      },
      { 
        path: 'inicio', 
        component: InicioComponent,
        // canActivate: [privadoGuard]
      },
      { 
        path: 'alunos', 
        component: AlunosComponent,
        // canActivate: [privadoGuard]
      },
      { 
        path: 'alunos-cadastro', 
        component: AlunosCadastroComponent,
        // canActivate: [privadoGuard]
      },
      { 
        path: 'acompanhamentos', 
        component: AcompanhamentosComponent,
        // canActivate: [privadoGuard]
      },
      { 
        path: 'acompanhamentos-cadastro', 
        component: AcompanhamentosCadastroComponent,
        // canActivate: [privadoGuard]
      }
    ]
  },
  {
    path: '',
    component: AutenticacaoLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent, canActivate: [publicoGuard] },
      { path: 'cadastro', component: CadastroComponent, canActivate: [publicoGuard] },
      { path: 'nao-autorizado', component: NaoAutorizadoComponent, canActivate: [publicoGuard] },
      { path: '**', component: NaoEncontradoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
