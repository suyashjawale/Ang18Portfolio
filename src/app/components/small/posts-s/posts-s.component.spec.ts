import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsSComponent } from './posts-s.component';

describe('PostsSComponent', () => {
  let component: PostsSComponent;
  let fixture: ComponentFixture<PostsSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
