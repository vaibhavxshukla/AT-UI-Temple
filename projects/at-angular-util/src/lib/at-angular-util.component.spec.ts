import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATAngularUtilComponent } from './at-angular-util.component';

describe('ATAngularUtilComponent', () => {
  let component: ATAngularUtilComponent;
  let fixture: ComponentFixture<ATAngularUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATAngularUtilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ATAngularUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
