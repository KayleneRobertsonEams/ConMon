import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHciPalesaMiningHubMainMenuComponent } from './app-hci-palesa-mining-hub-main-menu.component';

describe('AppHciPalesaMiningHubMainMenuComponent', () => {
  let component: AppHciPalesaMiningHubMainMenuComponent;
  let fixture: ComponentFixture<AppHciPalesaMiningHubMainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHciPalesaMiningHubMainMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppHciPalesaMiningHubMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
