import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar-otp',
  templateUrl: './snack-bar-otp.component.html',
  styleUrls: ['./snack-bar-otp.component.css']
})
export class SnackBarOtpComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA)public data:any){}
}
