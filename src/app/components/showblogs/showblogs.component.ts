import { Component, OnInit } from '@angular/core';
import { BlogsService } from './../../services/blogs.service';
import { BlogPost } from './../../models/blogPost.model';

@Component({
  selector: 'app-showblogs',
  templateUrl: './showblogs.component.html',
  styleUrls: ['./showblogs.component.css']
})
export class ShowblogsComponent implements OnInit {
  public blogs: BlogPost[];

  constructor(private blogsService: BlogsService) { }

  ngOnInit() {
    this.blogsService.getTumblrBlogs().subscribe((blogs) => this.blogs = blogs);
  }

}
