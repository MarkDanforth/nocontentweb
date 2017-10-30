import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './components/test-component/test-component.component';

import { FunctionTestService } from './services/function-test.service';
import { BlogsService } from './services/blogs.service';
import { ShowblogsComponent } from './components/showblogs/showblogs.component';

@NgModule({
    declarations: [
        AppComponent,
        TestComponentComponent,
        ShowblogsComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [
        FunctionTestService,
        BlogsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
