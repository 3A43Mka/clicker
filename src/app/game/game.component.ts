import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerNameService } from '../player-name.service';
import { IRecord, RecordsService } from '../records.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private playerNameStore: PlayerNameService, private router: Router, private recordsStore: RecordsService) { }

  playerName: string = '';
  clickCount: number = 0;
  currentMode: number = 10;
  currentTime: number = 0;
  currentState: string = 'initial';
  records: IRecord[] = [];
  notificationString: string = '';
  ngOnInit(): void {
    this.playerName = this.playerNameStore.getName();
    if (!this.playerName) {
      this.router.navigate(['/choose-name']);
    }
    this.currentTime = this.currentMode;
    this.records = this.recordsStore.getRecords();
  }


  onClick(): void {
    if (this.currentState == 'initial') {
      this.currentState = 'clicking';
      this.currentTime = this.currentMode;
      const makeTick = setInterval(() => {
        this.currentTime--;
      }, 1000);
      setTimeout(() => {
        clearInterval(makeTick);
        this.currentState = 'finished';
        if (this.clickCount > this.getRecordFor(this.currentMode)) {
          const newRecord: IRecord = { player: this.playerName, count: this.clickCount, mode: this.currentMode };
          this.recordsStore.addRecord(newRecord);
          this.records = this.recordsStore.getRecords();
          this.notificationString = `Congratulations, ${this.playerName}, you have set a new record: ${this.clickCount} clicks!`;
        } else {
          this.notificationString = `That's good, but not impressive, ${this.playerName}, ${this.clickCount} clicks - is that all you got?`;
        }
      }, this.currentMode * 1000);
    } else if (this.currentState == 'clicking') {
      this.clickCount++;
    } else if (this.currentState == 'finished') {
      console.log('Hey, my man can\'t click this shit now!');
    }
  }

  onReset(): void {
    this.currentState = 'initial';
    this.notificationString = '';
    this.clickCount = 0;
    this.currentTime = this.currentMode;
  }

  changeMode(sec: number): void {
    this.currentMode = sec;
    this.currentTime = this.currentMode;
  }

  getRecordFor(sec: number): number {
    if (this.records.length<1){
      return 0;
    }
    const filtered = this.records.filter((r) => r.mode == sec);
    if (filtered.length<1){
      return 0;
    }
    return filtered.sort((a, b) => b.count - a.count)[0].count;
  }

}
