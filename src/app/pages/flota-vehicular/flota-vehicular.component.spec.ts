import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlotaVehicularComponent } from './flota-vehicular.component';

describe('FlotaVehicularComponent', () => {
  let component: FlotaVehicularComponent;
  let fixture: ComponentFixture<FlotaVehicularComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FlotaVehicularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlotaVehicularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
