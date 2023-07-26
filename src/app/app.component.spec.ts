import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//Importe TODOS los componentes que son instanciados en la aplicación mediante un selector
import { ServicesComponent  } from './services/services.component';
import { AboutComponent  } from './about/about.component';
import { CalltoactionComponent } from './calltoaction/calltoaction.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MastheadComponent } from './masthead/masthead.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

  
  
describe('AppComponent', () => {
  /*
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));
  */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,

        //Registre el módulo para realizar peticiones asincrónicas
        HttpClientModule
      ],
      declarations: [
      //Registre TODOS los componentes que son instanciados en la aplicación mediante un selector
      AboutComponent,
      CalltoactionComponent,
      ContactComponent,
      FooterComponent,
      MastheadComponent,
      NavigationComponent,
      PortfolioComponent,
      ServicesComponent
      ],
    }).compileComponents();
    });
    

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AmazonToys'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AmazonToys');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('AmazonToys app is running!');
  });

  //Valide por la existencia de TODOS los componentes que son instanciados en la aplicación mediante un selector
  it('should have the About component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-about')).not.toBe(null);
  });

  it('should have the About component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-about')).not.toBe(null);
  });

  it('should have the CallOfAction component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-calltoaction')).not.toBe(null);
  });

  it('should have the Footer component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-footer')).not.toBe(null);
  });

  it('should have the Masthead component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-masthead')).not.toBe(null);
  });

  it('should have the Navigation component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-navigation')).not.toBe(null);
  });

  it('should have the Portfolio component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-portfolio')).not.toBe(null);
  });

  it('should have the Services component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-services')).not.toBe(null);
  });

});
