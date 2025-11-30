import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FormsModule } from '@angular/forms';
import { BactToTop } from './components/back-to-top/back-to-top';



@NgModule({
    declarations: [
        BactToTop
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        FontAwesomeModule
    ],
    exports: [
        BactToTop
    ]
})
export class SharedModule { }
