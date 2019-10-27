import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaPage } from './persona.page';

describe('PersonaPage', () => {
  let component: PersonaPage;
  let fixture: ComponentFixture<PersonaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
