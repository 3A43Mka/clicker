import { Component, OnInit } from '@angular/core';
import { PlayerNameService } from '../player-name.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-choose-name',
  templateUrl: './choose-name.component.html',
  styleUrls: ['./choose-name.component.scss']
})
export class ChooseNameComponent implements OnInit {

  constructor(private playerNameStore: PlayerNameService, private router: Router) { }

  ngOnInit(): void {
  }

  newName: string = '';

  onContinue() {
    if (!this.newName)
      return;
    this.playerNameStore.setName(this.newName);
    this.router.navigate(['/game']);
  }

}
