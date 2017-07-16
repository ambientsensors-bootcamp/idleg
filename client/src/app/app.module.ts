import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CommentBoxComponent } from './components/comment-box/comment-box.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent
=======
<<<<<<< HEAD
    CommentBoxComponent
=======
    MenuComponent
>>>>>>> 2b48498ee6ff1e6ec02c168b79c94d0b904d5bba
>>>>>>> 44f68e8bc0431c5b76ee9689497b3f7cebe2beed
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
