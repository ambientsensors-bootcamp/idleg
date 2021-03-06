import { Component, OnInit, Input } from '@angular/core';
import { WebService } from '../../services/web.service';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {
  commentStr: string;
  //isAdd: boolean;
  //isView: boolean;
  comments: Comment[];

  @Input() billId: string;

  constructor(private ws: WebService) { }

  ngOnInit() {
  }

  addComment(event) {
    //event.preventDefault()//so it denote actually submit
    var newComment = {
      billId: this.billId,
      comment: this.commentStr,
      userId: "just dummy user"
    }

    this.ws.addComment(newComment)
      .subscribe(data => {
        // this.tasks.push(task);
        console.log("sub data", data)
        this.commentStr = '';
      });
  }

 /*  showAddComment() {
    this.isAdd = !this.isAdd;
    this.isView = false;
  } */

  showViewComments() {
    //this.isView = !this.isView;
    //this.isAdd = false;
    //if (this.isView) {

      this.ws.getResource("http://localhost:8080/api/find/"+this.billId, 2).subscribe(data => {
        this.comments = data;
        console.log("recieved comments", this.comments);

      });
    //}

  }
}

interface Comment {
  billId: string,
  comment: string,
  userId: string
}