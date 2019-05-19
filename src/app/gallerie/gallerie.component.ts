import { Component, OnInit } from '@angular/core';
import { PartcipantService } from '../services/participant.service';
import { Participants } from '../models/Participants';
import { PetiteDto } from '../models/petiteDto';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {
message: string;
  participant: Participants[];
  petit: PetiteDto = new PetiteDto(' ', 0);
  constructor(private service: PartcipantService) { }
upVote(matricule: string) {
  this.petit.like = 1;
  this.petit.matricule = matricule;
  this.service.upVote(this.petit).subscribe(
    {},
   err => {
    this.message = err.error;
   }
  );
}
downVote(matricule: string) {
this.petit.like = 1;
this.petit.matricule = matricule;
this.service.downVote(this.petit).subscribe(
  {},
 err => {
  this.message = err.error;
 }
);
}


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
// this.service.takeSubcription().subscribe(col => this.participant = col);
}

