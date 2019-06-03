import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { CollegueAuth } from '../models/CollegueAuth';
import { environment } from 'src/environments/environment';
import { tap, map } from 'rxjs/operators';
import { Participants } from '../models/Participants';
import { PetitDto } from '../models/petitDto';

@Injectable({
    providedIn: 'root'
})
export class PartcipantService {
    urlAuth: string = environment.urlAuth;
    sujet: Subject<Participants[]> = new Subject<Participants[]>();
    gallerieSujet: Subject<Participants[]> = new Subject<Participants[]>();
    constructor(private httpClient: HttpClient) { }
    prendreAbonnement(): Observable<Participants[]> {
        return this.sujet.asObservable();
    }
    takeSubcription(): Observable<Participants[]> {
        return this.gallerieSujet.asObservable();
    }
    participantList(): Observable<Participants[]> {
        return this.httpClient.get<Participants[]>(`${this.urlAuth}/participants`, { withCredentials: true });
    }

    upVote(petitDto: PetitDto): any {
        return this.httpClient.patch<Participants>(`${this.urlAuth}/participants/upvote`, petitDto, { withCredentials: true } );
    }

    downVote(petitDto: PetitDto): any {
        return this.httpClient.patch<Participants>(`${this.urlAuth}/participants/downvote`, petitDto, { withCredentials: true } );
    }
    getScoreList(): Observable <Participants[] > {
        return this.httpClient.get<Participants[]>(`${this.urlAuth}/participants/score`, { withCredentials: true } );
}
}
