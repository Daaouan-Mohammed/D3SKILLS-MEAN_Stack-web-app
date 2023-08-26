import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieFormComponent } from './galerie-form.component';

describe('GalerieFormComponent', () => {
  let component: GalerieFormComponent;
  let fixture: ComponentFixture<GalerieFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalerieFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalerieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
