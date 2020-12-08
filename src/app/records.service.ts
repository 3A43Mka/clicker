import { Injectable } from '@angular/core';

export interface IRecord {
  player: string,
  mode: number,
  count: number,
}

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  getRecords(): IRecord[] {
    const data = localStorage.getItem("records");
    let records: IRecord[] = [];
    if (typeof data == 'string') {
      records = records.concat(JSON.parse(data));
    }
    return records;
  }

  addRecord(record: IRecord): void {
    const records: IRecord[] = this.getRecords();
    records.push(record);
    localStorage.setItem("records", JSON.stringify(records));
  }

  clearRecords(): void {
    localStorage.removeItem('records');
  }

}
