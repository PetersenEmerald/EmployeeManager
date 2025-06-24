import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private snackBar: MatSnackBar) { }

  showToast(
    message: string = 'Toast',
    action: string = 'Close',
    duration: number = 3000,
    horizontalPosition: MatSnackBarHorizontalPosition = 'right',
    verticalPosition: MatSnackBarVerticalPosition = 'top'
  ): void {
    this.snackBar.open(message, action, {
      duration,
      horizontalPosition,
      verticalPosition,
    });
  }
}
