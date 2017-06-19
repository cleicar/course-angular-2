import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuSegundoComponent } from './meu-segundo.component';

describe('MeuSegundoComponent', () => {
  let component: MeuSegundoComponent;
  let fixture: ComponentFixture<MeuSegundoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuSegundoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuSegundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
