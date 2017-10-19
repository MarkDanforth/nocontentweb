import { Injectable, OnInit } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/do';

@Injectable()
export class FunctionTestService implements OnInit {

    constructor(private http: Http) { }

    ngOnInit() {

    }

    getTestString() {
        var params: URLSearchParams = new URLSearchParams();
        params.append('name', 'John');

        return this.http.get('https://clockson-twitter.azurewebsites.net/api/TestFunction1', { search: params });
    }

}
