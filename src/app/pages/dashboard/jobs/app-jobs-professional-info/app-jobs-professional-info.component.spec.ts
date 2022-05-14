import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppJobsProfessionalInfoComponent } from './app-jobs-professional-info.component';

describe('AppJobsProfessionalInfoComponent', () => {
  let component: AppJobsProfessionalInfoComponent;
  let fixture: ComponentFixture<AppJobsProfessionalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppJobsProfessionalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppJobsProfessionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
