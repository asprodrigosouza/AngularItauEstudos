import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ListaProdutoComponent } from './modules/produto/lista-produto/lista-produto.component';
import { EditarProdutoComponent } from './modules/produto/editar-produto/editar-produto.component';
import { CadastrarProdutoComponent } from './modules/produto/cadastrar-produto/cadastrar-produto.component';

const routes: Routes = [
  { path: ''                          , component: HomeComponent              },
  { path: 'home'                      , component: HomeComponent              },
  { path: 'produto'                   , component: ListaProdutoComponent      },
  { path: 'produto/editar/:idProduto' , component: EditarProdutoComponent     },
  { path: 'produto/cadastrar'         , component: CadastrarProdutoComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }