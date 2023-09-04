import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingOneComponent } from './routing-one/routing-one.component'
import { RoutingTwoComponent } from './routing-two/routing-two.component'
import { NotFoundComponent } from './not-found/not-found.component';
import { Child1RoutingComponent } from './child1-routing/child1-routing.component';
import { Child2RoutingComponent } from './child2-routing/child2-routing.component';

const routes: Routes = [
  {
    path: 'first', component: RoutingOneComponent,
    title: 'First component',
    children: [
      { path: 'child1', component: Child1RoutingComponent },
      { path: 'child2', component: Child2RoutingComponent },
    ]
  },
  { path: 'second', component: RoutingTwoComponent, title: 'Second component', },
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
