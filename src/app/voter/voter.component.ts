import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  template: `
    <h4>{{name}}</h4>
    <button type="button" (click)="vote(true)"  [disabled]="didVote">Agree</button>
    <button type="button" (click)="vote(false)" [disabled]="didVote">Disagree</button>
  `,
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent {
  //@Input() cho phép truyền dữ liệu từ component cha xuống component con.
  @Input() name = '';
  //@Output() cho phép truyền dữ liệu từ component con lên component cha.
  //'voted' ở đây là 1 instance của EventEmitter có kiểu dữ liệu là EventEmitter<boolean>
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}
