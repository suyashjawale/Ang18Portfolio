import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageLComponent } from './homepage-l.component';

describe('HomepageLComponent', () => {
  let component: HomepageLComponent;
  let fixture: ComponentFixture<HomepageLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
