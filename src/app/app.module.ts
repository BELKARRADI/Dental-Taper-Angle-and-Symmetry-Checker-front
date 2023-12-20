import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListGroupesComponent } from './components/list-groupes/list-groupes.component';

import { AppComponent } from './app.component';


import { FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { AddGroupeComponent } from './components/add-groupe/add-groupe.component';
import { ListToothComponent } from './components/list-tooth/list-tooth.component';
import { AddToothComponent } from './components/add-tooth/add-tooth.component';
import { ListPwComponent } from './components/list-pw/list-pw.component';
import { AddPwComponent } from './components/add-pw/add-pw.component';
const  routers : Routes=[
  {path:'groupes', component:ListGroupesComponent},
  {path:'addgroupe',component:AddGroupeComponent},
  {path:'editgroupe/:id',component:AddGroupeComponent},
  {path:'',redirectTo:'/groupes',pathMatch:'full'},

  {path:'tooths', component:ListToothComponent},
  {path:'addtooth',component:AddToothComponent},
  {path:'edittooth/:id',component:AddToothComponent},

  {path:'pws', component:ListPwComponent},
  {path:'addpw',component:AddPwComponent},
  {path:'editpw/:id',component:AddPwComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ListGroupesComponent,
    AddGroupeComponent,
    ListToothComponent,
    AddToothComponent,
    ListPwComponent,
    AddPwComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routers),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
