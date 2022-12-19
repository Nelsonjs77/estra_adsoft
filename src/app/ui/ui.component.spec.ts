import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UiComponent } from './ui.component';
import { By } from '@angular/platform-browser';

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should set numero model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="num"]')).nativeElement;

    // Act 
    inputElement.value = '30';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numero).toEqual('30');
  });

  it('Should set valorA model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="num"]')).nativeElement;

    // Act 
    inputElement.value = 5;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.valorA).toBe(5);
  });

  it('Should set valorB model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="num"]')).nativeElement;

    // Act 
    inputElement.value = 69;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.valorB).toBe(69);
  });


  it('should add numero in the arrayX when i click the Calcular button ', () => {
    // Arrange 
    component.numero = '1, 2, 3, 4, 5';

    let siguienteButton = fixture.debugElement.query(By.css('.siguiente-button'));

    // Act
    siguienteButton.triggerEventHandler('click', null);

    // Assert
    for(let i = 0; i < component.arrayX.length; i++){
      expect(component.arrayX[i]).toBe(i+1);
    }

   });

   it('Should call calcular metod', () => {
    let result: number[] = [];
    component.numero = '0.0, 1.0, 2.0, 3.0';
    component.valorA = 2.0;
    component.valorB = 1.0;

    component.calcular();
    result = component.resultado;

    expect(result).toBe([1, 3, 5, 7]);
  });


});
