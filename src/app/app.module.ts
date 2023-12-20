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
const  routers : Routes=[
  {path:'groupes', component:ListGroupesComponent},
  {path:'addgroupe',component:AddGroupeComponent},
  {path:'editgroupe/:id',component:AddGroupeComponent},
  {path:'',redirectTo:'/groupes',pathMatch:'full'},

  {path:'tooths', component:ListToothComponent},
  {path:'addtooth',component:AddToothComponent},
  {path:'edittooth/:id',component:AddToothComponent}


]
@NgModule({
  declarations: [
    AppComponent,
    ListGroupesComponent,
    AddGroupeComponent,
    ListToothComponent,
    AddToothComponent
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
