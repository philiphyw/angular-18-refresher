import { ComponentFixture, DeferBlockBehavior, DeferBlockState, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeAll(()=>{
    TestBed.configureTestingModule({
      deferBlockBehavior:DeferBlockBehavior.Manual
    })
  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('test deferable view blocks',()=>{
    it('should render the index 0 defer block', async()=>{
      const deferBlockIndex = 0
      const componentFixture = TestBed.createComponent(HomeComponent)
      const deferBlockFixture = (await componentFixture.getDeferBlocks())[deferBlockIndex];
      await deferBlockFixture.render(DeferBlockState.Complete)

      expect(componentFixture.debugElement.query(By.css('label[data-test="counter-prefix"]'))).toBeTruthy()    
    })

    it('should render the index 1 defer block', async()=>{
      const deferBlockIndex = 1
      const componentFixture = TestBed.createComponent(HomeComponent)
      const deferBlockFixture = (await componentFixture.getDeferBlocks())[deferBlockIndex];
      await deferBlockFixture.render(DeferBlockState.Complete)
    
      expect(componentFixture.debugElement.query(By.css('p[data-test="counter-button-tip"]'))).toBeTruthy()
    })

    it('should render the index 2 defer block', async()=>{
      const componentFixture = TestBed.createComponent(HomeComponent)
      expect(componentFixture.debugElement.query(By.css('p[data-test="counter-action-list-placeholder"]'))).toBeTruthy()
      const startLoadingButton= componentFixture.nativeElement.querySelector('button[data-test="start-loading"]')
      expect(startLoadingButton).toBeTruthy()
      startLoadingButton.click()
      expect(componentFixture.debugElement.query(By.css('p[data-test="counter-action-list-loading"]'))).toBeTruthy()
      
      // wait for the @loading(minimum 2s) to finish
      setTimeout(() => {
      expect(componentFixture.debugElement.query(By.css('ul[data-test="counter-action-list"]'))).toBeTruthy()
      }, 2000)
    })

  })
});
