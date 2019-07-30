import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule,MatTabsModule
} from '@angular/material';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatRadioModule} from '@angular/material/radio';
import { MyDatePickerModule } from 'mydatepicker';
import { MatRippleModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
@NgModule({
  imports: [
    CommonModule, 
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,
   BrowserAnimationsModule,
   MatFormFieldModule,
   FlexLayoutModule,
   MatRadioModule,
   MyDatePickerModule,
   MatRippleModule,
   MatGridListModule,
  MatButtonToggleModule,
    MatExpansionModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
   CommonModule,
   MatTabsModule,
   MatToolbarModule, 
   MatButtonModule, 
   MatCardModule, 
   MatInputModule, 
   MatDialogModule, 
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   BrowserAnimationsModule,
   MatFormFieldModule,
   FlexLayoutModule,
   MatRadioModule,
   MyDatePickerModule,
   MatRippleModule,
   MatGridListModule,
  MatButtonToggleModule,
   MatExpansionModule,
   MatStepperModule,
   MatDatepickerModule,
   MatNativeDateModule
   ],
})
export class CustomMaterialModule { }