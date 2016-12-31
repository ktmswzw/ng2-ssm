import {Component, Input} from '@angular/core';
import {HttpService, Post} from "../pages/login/login.service";

@Component({
    selector: 'components'
  }
)
export class MyHttp {
  @Input() public demoPost: Post = new Post(1, 'Demo Title', 'Demo Body');
  @Input() public demoList: Post[] = [];

  constructor(public demoService: HttpService) {
    this.getPosts();
  }

  createPost() {
    this.demoService.createPost(this.demoPost);
  }

  getPosts() {
    this.demoService.getPosts().subscribe(posts => {
      this.demoList = posts;
    });
  }
}
