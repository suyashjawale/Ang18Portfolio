import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionLComponent } from './collection-l.component';

describe('CollectionLComponent', () => {
  let component: CollectionLComponent;
  let fixture: ComponentFixture<CollectionLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
