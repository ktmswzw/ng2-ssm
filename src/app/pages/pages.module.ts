import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';

import { Pages } from './pages.component';
import {ToastyModule} from "ng2-toasty";
import {SlimLoadingBarModule} from "ng2-slim-loading-bar";

@NgModule({
  imports: [CommonModule, NgaModule, routing,
    ToastyModule.forRoot(),
    SlimLoadingBarModule.forRoot(),],
  declarations: [Pages]
})
export class PagesModule {
}
