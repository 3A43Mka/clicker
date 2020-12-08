import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseNameComponent } from './choose-name/choose-name.component';
import { GameComponent } from './game/game.component';
import { RecordsComponent } from './records/records.component';

const routes: Routes = [{
  path: "choose-name",
  component: ChooseNameComponent
},
{
  path: "game",
  component: GameComponent
},
{
  path: "records",
  component: RecordsComponent
},
{ path: '**', redirectTo: '/choose-name' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
