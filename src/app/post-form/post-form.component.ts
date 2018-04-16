import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private ps: PostService) { }

  ngOnInit() {
  }

  addPost(title, body){
    if(!title || !body){
      alert("Add post");
    }else {
      this.ps.savePosts({title, body} as Post).subscribe(post => {
        console.log(post);
      })
    }
  }

}
