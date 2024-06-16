import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionSComponent } from './collection-s.component';

describe('CollectionSComponent', () => {
  let component: CollectionSComponent;
  let fixture: ComponentFixture<CollectionSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
