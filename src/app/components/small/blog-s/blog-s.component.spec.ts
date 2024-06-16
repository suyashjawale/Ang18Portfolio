import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSComponent } from './blog-s.component';

describe('BlogSComponent', () => {
  let component: BlogSComponent;
  let fixture: ComponentFixture<BlogSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
