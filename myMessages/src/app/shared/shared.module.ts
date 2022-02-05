import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './sections/header/header.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/button/button.component';
import { MessageComponent } from './components/message/message.component';

const declarations = [
  HeaderComponent,
  ButtonComponent,
  MessageComponent
];

const imports = [
  CommonModule,
  FontAwesomeModule
];

@NgModule({
  declarations,
  imports: [
    ...imports, RouterModule
  ],
  exports: [
    ...declarations, ...imports
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
