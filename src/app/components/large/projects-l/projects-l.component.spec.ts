import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsLComponent } from './projects-l.component';

describe('ProjectsLComponent', () => {
  let component: ProjectsLComponent;
  let fixture: ComponentFixture<ProjectsLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
