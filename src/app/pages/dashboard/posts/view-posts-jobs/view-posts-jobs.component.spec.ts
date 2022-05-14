import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPostsJobsComponent } from './view-posts-jobs.component';

describe('ViewPostsJobsComponent', () => {
  let component: ViewPostsJobsComponent;
  let fixture: ComponentFixture<ViewPostsJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPostsJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPostsJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
