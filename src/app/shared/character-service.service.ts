import { Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import {Character} from './character.model'
@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  selectedCharacter: Observable<Character> = new Observable();
  subscriber;
  constructor(private httpClient: HttpClient) {
    this.selectedCharacter = new Observable(subscriber => {
      this.subscriber = subscriber;
    });
  }

  getCharacters(): Observable<Character []> {
    let observable = this.httpClient.get<Character[]>('assets/characters.json');
    return observable;
  }

  getSelectedCharacter(): Observable<Character>{
    return this.selectedCharacter;
  }

  setSelectedCharacter(character:Character):void{
    this.subscriber.next(character)
  }

}
