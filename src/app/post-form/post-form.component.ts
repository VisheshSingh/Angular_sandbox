import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Input() currentPost: Post;
  @Input() isEdit: boolean;
  @Output() newPost : EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost : EventEmitter<Post> = new EventEmitter();

  constructor(private ps: PostService) { }

  ngOnInit() {
  }

  addPost(title, body){
    if(!title || !body){
      alert("Add post");
    }else {
      this.ps.savePosts({title, body} as Post).subscribe(post => {
        this.newPost.emit(post);
      })
    }
  }

  updatePost(){
    this.ps.updatePost(this.currentPost).subscribe(post => {
      console.log(post);
      this.isEdit = false;
      this.updatedPost.emit(post);
    })
  }

}
