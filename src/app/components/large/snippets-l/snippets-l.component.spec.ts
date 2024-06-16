import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetsLComponent } from './snippets-l.component';

describe('SnippetsLComponent', () => {
  let component: SnippetsLComponent;
  let fixture: ComponentFixture<SnippetsLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnippetsLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnippetsLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
