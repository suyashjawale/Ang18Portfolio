import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsideBarComponent } from './mside-bar.component';

describe('MsideBarComponent', () => {
  let component: MsideBarComponent;
  let fixture: ComponentFixture<MsideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
