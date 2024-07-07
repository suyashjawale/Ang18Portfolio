import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistSComponent } from './playlist-s.component';

describe('PlaylistSComponent', () => {
  let component: PlaylistSComponent;
  let fixture: ComponentFixture<PlaylistSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
