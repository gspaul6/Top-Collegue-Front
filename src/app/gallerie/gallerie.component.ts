import { Component, OnInit } from '@angular/core';
import { PartcipantService } from '../services/participant.service';
import { Participants } from '../models/Participants';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {
message: string;
  participant: Participants[];
  constructor(private service: PartcipantService) { }

  ngOnInit() {
    this.service.participantList().subscribe(
      participants => {
        this.participant = participants;
      },
      err => {
this.message = err.error;

      }
    );
  }

}
