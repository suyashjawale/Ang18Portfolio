import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSComponent } from './search-s.component';

describe('SearchSComponent', () => {
  let component: SearchSComponent;
  let fixture: ComponentFixture<SearchSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
