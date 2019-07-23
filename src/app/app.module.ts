import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { WelcomeComponent } from "./welcome/welcome.component";
import { CharacterListComponent } from "./characters/character-list/character-list.component";
import { CommonModule } from "@angular/common";
import {
  MatListModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, WelcomeComponent, CharacterListComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
