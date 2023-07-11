import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'users',
    loadChildren:()=>import('../app/users/users.module').then(m=>m.UsersModule)
  },
  {
    path:'home',
    loadChildren:()=>import('../app/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'cart',
    loadChildren:()=>import('../app/cart/cart.module').then(m=>m.CartModule)
  },
  
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
