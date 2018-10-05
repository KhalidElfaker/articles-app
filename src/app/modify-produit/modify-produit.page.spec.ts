import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyProduitPage } from './modify-produit.page';

describe('ModifyProduitPage', () => {
  let component: ModifyProduitPage;
  let fixture: ComponentFixture<ModifyProduitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyProduitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyProduitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
