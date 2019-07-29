import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { CommonModule } from '@angular/common';
import {
  MatListModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FilterCharacterPipe } from './characters/filter-character.pipe';
import { ForceComponent } from './characters/force/force.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterComponent } from './characters/character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CharacterListComponent,
    FilterCharacterPipe,
    ForceComponent,
    CharacterComponent
  ],
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
    FormsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
