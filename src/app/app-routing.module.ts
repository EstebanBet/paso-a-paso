import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasoUnoComponent } from './components/paso-uno/paso-uno.component';
import { PasoDosComponent } from './components/paso-dos/paso-dos.component';
import { PasoTresComponent } from './components/paso-tres/paso-tres.component';

const routes: Routes = [
  {
    path: 'paso-1',
    component: PasoUnoComponent
  },
  {
    path: 'paso-2',
    component: PasoDosComponent
  },
  {
    path: 'paso-3',
    component: PasoTresComponent
  },
  {
    path: '',
    redirectTo: 'paso-1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
