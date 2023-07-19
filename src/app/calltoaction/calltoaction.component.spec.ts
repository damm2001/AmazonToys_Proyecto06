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

  //Valide la existencia de un elemento <nav> en la plantilla html del elemento

  it('nav element', ()=> {
    const headerElement: HTMLElement = fixture.nativeElement;
    const nav = headerElement.querySelector('nav')!;
    expect(nav).toBeTruthy();
  })

  //Valide la NO existencia de un elemento <p> en la plantilla html del elemento

  it('No p element', ()=> {
      const headerElement: HTMLElement = fixture.nativeElement;
      const nav = headerElement.querySelector('p')!;
      expect(nav).toBeFalsy();
  })
});
