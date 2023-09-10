import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefsPageComponent } from './refs-page.component';

describe('RefsPageComponent', () => {
  let component: RefsPageComponent;
  let fixture: ComponentFixture<RefsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
