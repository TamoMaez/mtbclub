import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerchPage } from './merch.page';

describe('MerchPage', () => {
  let component: MerchPage;
  let fixture: ComponentFixture<MerchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
