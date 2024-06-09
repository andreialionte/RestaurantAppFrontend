import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploremenuComponent } from './exploremenu.component';

describe('ExploremenuComponent', () => {
  let component: ExploremenuComponent;
  let fixture: ComponentFixture<ExploremenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploremenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExploremenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
