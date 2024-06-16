import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSComponent } from './homepage-s.component';

describe('HomepageSComponent', () => {
  let component: HomepageSComponent;
  let fixture: ComponentFixture<HomepageSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
