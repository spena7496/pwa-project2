import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseGridComponent } from './base-grid.component';

describe('BaseGridComponent', () => {
  let component: BaseGridComponent;
  let fixture: ComponentFixture<BaseGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
