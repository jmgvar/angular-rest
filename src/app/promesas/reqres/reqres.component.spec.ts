import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqresPromiseComponent } from './reqres.component';

describe('ReqresComponent', () => {
  let component: ReqresPromiseComponent;
  let fixture: ComponentFixture<ReqresPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqresPromiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReqresPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
