import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postMaj: string;
  @Input() point: number;

  constructor() { }
  

  ngOnInit() {
  }

  loveIt(){
    this.point = this.point + 1;
    return this.point;
  }

  dontLoveIt(){
    this.point = this.point +(-1) ;
    return this.point;
  }

  getColor(){
    if(this.point > 0) {
      return 'green';
    } else if(this.point < 0) {
      return 'red';
    }
  }

}
