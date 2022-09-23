import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewLinkModalComponent } from './review-link-modal.component';

describe('ReviewLinkModalComponent', () => {
  let component: ReviewLinkModalComponent;
  let fixture: ComponentFixture<ReviewLinkModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewLinkModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewLinkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
