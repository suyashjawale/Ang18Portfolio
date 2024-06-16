import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSComponent } from './projects-s.component';

describe('ProjectsSComponent', () => {
  let component: ProjectsSComponent;
  let fixture: ComponentFixture<ProjectsSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
