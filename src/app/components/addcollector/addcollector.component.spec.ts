import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcollectorComponent } from './addcollector.component';

describe('AddcollectorComponent', () => {
  let component: AddcollectorComponent;
  let fixture: ComponentFixture<AddcollectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcollectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
