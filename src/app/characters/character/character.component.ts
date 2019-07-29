import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/shared/character-service.service';
import { Character } from 'src/app/shared/character.model';
import { take } from "rxjs/operators";

@Component({
  selector: 'swc-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
character: Character;
  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getSelectedCharacter().pipe(take(2)).subscribe((character: Character)=>{
      this.character = character;
    })
  }

}
