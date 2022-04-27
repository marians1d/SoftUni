import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/core/interfaces';
import { PostService } from 'src/app/core/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postList!: IPost[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.loadLatestPosts(5).subscribe(postList => {
      this.postList = postList;
    });
  }
}
