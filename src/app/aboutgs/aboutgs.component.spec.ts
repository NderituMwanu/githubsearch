import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutgsComponent } from './aboutgs.component';

describe('AboutgsComponent', () => {
  let component: AboutgsComponent;
  let fixture: ComponentFixture<AboutgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
