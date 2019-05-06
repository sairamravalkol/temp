import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatListModule,
    AppRoutingModule,
    MatSelectModule,MatCardModule,MatToolbarModule,
    MatTableModule,MatIconModule,MatButtonModule,ScheduleModule,MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
