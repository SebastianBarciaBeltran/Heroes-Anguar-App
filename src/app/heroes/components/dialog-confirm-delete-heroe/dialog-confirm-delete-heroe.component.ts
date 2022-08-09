import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroe.interfaces';

@Component({
  selector: 'app-dialog-confirm-delete-heroe',
  templateUrl: './dialog-confirm-delete-heroe.component.html',
  styleUrls: ['./dialog-confirm-delete-heroe.component.css'],
})
export class DialogConfirmDeleteHeroeComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<DialogConfirmDeleteHeroeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe
  ) {}

  ngOnInit(): void {}

  borrar() {
    this.dialogRef.close(true);
  }

  cancelar() {
    this.dialogRef.close();
  }
}
