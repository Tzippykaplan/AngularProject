import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfDodnorsComponent } from './list-of-dodnors.component';

describe('ListOfDodnorsComponent', () => {
  let component: ListOfDodnorsComponent;
  let fixture: ComponentFixture<ListOfDodnorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOfDodnorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfDodnorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
