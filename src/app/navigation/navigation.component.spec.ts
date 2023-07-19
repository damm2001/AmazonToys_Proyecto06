import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationComponent]
    });
    fixture = TestBed.createComponent(NavigationComponent);
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
