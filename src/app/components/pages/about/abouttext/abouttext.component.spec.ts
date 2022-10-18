import { ComponentFixture, TestBed } from '@angular/core/testing';

import { abouttextComponent } from './abouttext.component';

describe('abouttextComponent', () => {
  let component: abouttextComponent;
  let fixture: ComponentFixture<abouttextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ abouttextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(abouttextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
