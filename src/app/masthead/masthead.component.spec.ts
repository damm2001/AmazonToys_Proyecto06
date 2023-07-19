import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastheadComponent } from './masthead.component';

describe('MastheadComponent', () => {
  let component: MastheadComponent;
  let fixture: ComponentFixture<MastheadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MastheadComponent]
    });
    fixture = TestBed.createComponent(MastheadComponent);
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
