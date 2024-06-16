import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetsSComponent } from './snippets-s.component';

describe('SnippetsSComponent', () => {
  let component: SnippetsSComponent;
  let fixture: ComponentFixture<SnippetsSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnippetsSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnippetsSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
