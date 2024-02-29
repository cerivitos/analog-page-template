import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { injectContentFiles } from '@analogjs/content';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  template: ` <h2>Blog</h2> `,
  styles: [``],
  imports: [RouterModule],
})
export default class BlogListComponent {
  readonly posts = injectContentFiles<Post>((file) =>
    file.filename.includes('/content/posts/')
  );
}
