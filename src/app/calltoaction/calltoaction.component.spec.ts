import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalltoactionComponent } from './calltoaction.component';

describe('CalltoactionComponent', () => {
  let component: CalltoactionComponent;
  let fixture: ComponentFixture<CalltoactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalltoactionComponent]
    });
    fixture = TestBed.createComponent(CalltoactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
