import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsLComponent } from './posts-l.component';

describe('PostsLComponent', () => {
  let component: PostsLComponent;
  let fixture: ComponentFixture<PostsLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
