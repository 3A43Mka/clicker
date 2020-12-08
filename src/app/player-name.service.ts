import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerNameService {

  constructor() { }

  playerName: string = '';

  getName(): string {
    return this.playerName;
  }

  setName(newName: string): void {
    this.playerName = newName;
  }

}
