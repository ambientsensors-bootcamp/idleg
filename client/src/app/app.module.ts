import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
//import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import { MaterialModule } from '@angular/material';

import { HeaderComponent } from './components/header/header.component';
import { CommentBoxComponent } from './components/comment-box/comment-box.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { BillListComponent } from './components/bill-list/bill-list.component';
import { AboutComponent } from './components/about/about.component';
import { BillsComponent } from './components/bills/bills.component';
import { RouterModule, Routes } from '@angular/router';
import { WebService } from './services/web.service';
import { ImportantConfig } from '../assets/config';

const appRoutes:Routes=[
  {path:'',component:AppComponent},
  {path:'about',component:AboutComponent},
  {path:'bills',component:BillsComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,    
    HeaderComponent,
    CommentBoxComponent,
    MenuComponent,
    BillListComponent,
    AboutComponent,
    BillsComponent
    ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserAnimationsModule
    
  ],
  providers: [WebService,ImportantConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
