import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmDeleteHeroeComponent } from './dialog-confirm-delete-heroe.component';

describe('DialogConfirmDeleteHeroeComponent', () => {
  let component: DialogConfirmDeleteHeroeComponent;
  let fixture: ComponentFixture<DialogConfirmDeleteHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConfirmDeleteHeroeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogConfirmDeleteHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
