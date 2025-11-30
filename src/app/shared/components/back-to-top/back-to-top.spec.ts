import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BactToTop } from './back-to-top';
 
describe('BactToTop', () => {
  let component: BactToTop;
  let fixture: ComponentFixture<BactToTop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BactToTop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BactToTop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
