import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLComponent } from './blog-l.component';

describe('BlogLComponent', () => {
  let component: BlogLComponent;
  let fixture: ComponentFixture<BlogLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
