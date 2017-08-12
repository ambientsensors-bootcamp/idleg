import { Component, OnInit } from '@angular/core';
import { WebService } from '../../services/web.service';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {
commentStr:string;
  constructor(private ws:WebService) { }

  ngOnInit() {
  }

addComment(event){
  //event.preventDefault()//so it denote actually submit
 var newComment={
    billId:"just dummy bill for now",
    comment:this.commentStr,
    userId:"just dummy user"
 }
 
 this.ws.addComment(newComment)
      .subscribe( data =>{
         // this.tasks.push(task);
         console.log("sub data",data)
          this.commentStr='';
      });
} 

}
