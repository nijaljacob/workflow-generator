import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCheckinModalComponent } from './client-checkin-modal.component';

describe('ClientCheckinModalComponent', () => {
  let component: ClientCheckinModalComponent;
  let fixture: ComponentFixture<ClientCheckinModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCheckinModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCheckinModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
