import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFreelancerComponent } from './find-job.component';

describe('FindJobComponent', () => {
  let component: FindFreelancerComponent;
  let fixture: ComponentFixture<FindFreelancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindFreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
