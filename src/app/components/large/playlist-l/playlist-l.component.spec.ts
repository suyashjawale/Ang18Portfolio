import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistLComponent } from './playlist-l.component';

describe('PlaylistLComponent', () => {
  let component: PlaylistLComponent;
  let fixture: ComponentFixture<PlaylistLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
