import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AuthService }  from './auth.service';
import { ModalService } from './services/modal.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { GeneratorComponent }   from './components/generators/overview/generator-overview.component';
import { DropdownFormComponent } from './components/dropdown/dropdown.form';
import { PhoneRngComponent }    from './components/generators/rng/phone-rng.component';
import { PhoneUpDownComponent }    from './components/generators/updown/phone-updown.component';
import { PhoneDropDownComponent }    from './components/generators/dropdown/phone-dropdown.component';
import { PhoneDropDownExtremeComponent }    from './components/generators/dropdownextreme/phone-dropdownextreme.component';
import { PhoneSliderComponent }    from './components/generators/slider/phone-slider.component';
import { PhoneTimerComponent }    from './components/generators/timer/phone-timer.component';
import { PhoneCheckboxComponent }    from './components/generators/checkbox/phone-checkbox.component';
import { ModalComponent }    from './components/modals/modal.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    GeneratorComponent,
    DropdownFormComponent,

    PhoneRngComponent,
    PhoneUpDownComponent,
    PhoneDropDownComponent,
    PhoneDropDownExtremeComponent,
    PhoneSliderComponent,
    PhoneTimerComponent,
    PhoneCheckboxComponent,
    ModalComponent
  ],
  providers: [
    AuthService,
    ModalService
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
