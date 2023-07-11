import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContactInfoComponent } from './show-contact-info.component';

describe('ShowContactInfoComponent', () => {
  let component: ShowContactInfoComponent;
  let fixture: ComponentFixture<ShowContactInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowContactInfoComponent]
    });
    fixture = TestBed.createComponent(ShowContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
