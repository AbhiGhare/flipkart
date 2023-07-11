import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

const mat = [
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatBadgeModule,
  MatDialogModule,
  MatInputModule,
  MatFormFieldModule, 
  MatSnackBarModule,
  MatAutocompleteModule
]


@NgModule({
  declarations: [],
  imports: [mat],
  exports:[mat]
})
export class MaterialModule { }
