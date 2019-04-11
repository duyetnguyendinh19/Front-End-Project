import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductContactComponent } from './product-contact.component';

describe('ProductContactComponent', () => {
  let component: ProductContactComponent;
  let fixture: ComponentFixture<ProductContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
