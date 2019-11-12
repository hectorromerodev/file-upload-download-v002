import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//ng add @angular/material
import * as Material from '@angular/material'; //Con esta simple linea importamos todos los modulos de
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    Material.MatButtonModule,
    Material.MatToolbarModule,
    Material.MatInputModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatButtonModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatProgressBarModule,
    Material.MatCardModule,
    Material.MatGridListModule
  ],
  exports: [
    BrowserAnimationsModule,
    Material.MatButtonModule,
    Material.MatToolbarModule,
    Material.MatInputModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatButtonModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatProgressBarModule,
    Material.MatCardModule,
    Material.MatGridListModule
  ]
})
export class MaterialModule {}
