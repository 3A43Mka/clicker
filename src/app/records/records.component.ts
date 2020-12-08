import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRecord, RecordsService } from '../records.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  constructor(private router: Router, private recordsStore: RecordsService) { }

  records: IRecord[] = [];
  recordsToShow: IRecord[] = [];
  ngOnInit(): void {
    this.records = this.recordsStore.getRecords();
    this.recordsToShow = this.fitlerRecordsBy(this.selectedMode);
  }

  selectedMode = 5;

  selectMode(sec: number) :void {
    this.selectedMode = sec;
    this.recordsToShow = this.fitlerRecordsBy(this.selectedMode);
  }

  fitlerRecordsBy(mode: number): IRecord[] {
    let records = this.records.filter((r) => r.mode == mode);
    console.log(records);
    if (records.length<2){
      return records;
    }
    records = records.sort((a,b) => b.count - a.count);
    return records;
  }

}
