import { Injectable, OnInit } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BlogPost } from './../models/blogPost.model';

import 'rxjs/add/operator/map';

@Injectable()
export class BlogsService {

  constructor(private http: Http) { }

  getTumblrBlogs(): Observable<BlogPost[]> {
    return this.http.get('https://clockson-twitter.azurewebsites.net/api/tumblr-blog-list')
      .map((response) => (response.json() as Object[]).map(val => new BlogPost(val)));
  }
}
