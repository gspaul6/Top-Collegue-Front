import { Component, OnInit } from '@angular/core';
import { ScoreCard } from './ScoreCard';

export class Participants {

    constructor(public matricule: string, public nom: string, public prenom: string,
                public email: string, public photoUrl: string, public score: ScoreCard) {}

}
