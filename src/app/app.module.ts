import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewSectionComponent } from './new-section/new-section.component';
import { NewPositionComponent } from './new-position/new-position.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';

import { SectionComponent } from './menu/section/section.component';
import { PositionComponent } from './menu/position/position.component';
import { ContextMenuComponent } from './menu/context-menu/context-menu.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PrisePipe } from './pipes/prise.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewSectionComponent,
    NewPositionComponent,
    MenuComponent,
    SectionComponent,
    PositionComponent,
    ContextMenuComponent,
    PrisePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
