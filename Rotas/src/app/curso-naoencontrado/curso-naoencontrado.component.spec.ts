import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoNaoencontradoComponent } from './curso-naoencontrado.component';

describe('CursoNaoencontradoComponent', () => {
  let component: CursoNaoencontradoComponent;
  let fixture: ComponentFixture<CursoNaoencontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoNaoencontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoNaoencontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
