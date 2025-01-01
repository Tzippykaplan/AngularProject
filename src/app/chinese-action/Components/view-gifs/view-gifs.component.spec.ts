import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGifsComponent } from './view-gifs.component';

describe('ViewGifsComponent', () => {
  let component: ViewGifsComponent;
  let fixture: ComponentFixture<ViewGifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewGifsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
