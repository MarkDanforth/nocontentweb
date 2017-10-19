import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './components/test-component/test-component.component';

import { FunctionTestService } from './services/function-test.service';

@NgModule({
    declarations: [
        AppComponent,
        TestComponentComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [
        FunctionTestService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
