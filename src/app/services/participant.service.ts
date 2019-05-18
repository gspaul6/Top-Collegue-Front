import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { CollegueAuth } from '../models/CollegueAuth';
import { environment } from 'src/environments/environment';
import { tap, map } from 'rxjs/operators';
import { Participants } from '../models/Participants';

@Injectable({
    providedIn: 'root'
})
export class PartcipantService {
    urlPart: string = environment.urlPart;
    sujet: Subject<Participants> = new Subject<Participants>();
    constructor(private httpClient: HttpClient) { }
    prendreAbonnement(): Observable<Participants> {
        return this.sujet.asObservable();
    }
    participantList(): Observable<Participants[]> {
        return this.httpClient.get<Participants[]>(`${this.urlPart}`, { withCredentials: true });
    }
}
