import { Component, OnInit } from '@angular/core';
import { Participants } from '../models/Participants';
import { PartcipantService } from '../services/participant.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  participants: Participants[];

  constructor(private service: PartcipantService) { }

  ngOnInit() {
    this.service.getScoreList().subscribe(
      participants => {
        console.log(participants);
        this.participants = participants;
      },
      err => {
        console.log(err.error);
      });
  }
}

