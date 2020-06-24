import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatHistoryComponent } from './flat-history.component';

describe('FlatHistoryComponent', () => {
  let component: FlatHistoryComponent;
  let fixture: ComponentFixture<FlatHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
