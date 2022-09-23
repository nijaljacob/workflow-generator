import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCheckinComponent } from './client-checkin.component';

describe('ClientCheckinComponent', () => {
  let component: ClientCheckinComponent;
  let fixture: ComponentFixture<ClientCheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCheckinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
