import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHelixLoaderComponent } from './ngx-helix-loader.component';

describe('NgxHelixLoaderComponent', () => {
  let component: NgxHelixLoaderComponent;
  let fixture: ComponentFixture<NgxHelixLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxHelixLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHelixLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
