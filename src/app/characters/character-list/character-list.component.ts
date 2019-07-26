import { Component, OnInit, SimpleChanges } from '@angular/core';
import { CharacterService } from '../../shared/character-service.service';
@Component({
  selector: 'swc-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  title = 'Character List';
  showDetails = true;
  filterBy = '';

  characters: object[];

  constructor(private characterService: CharacterService) {}

  getCharacters(): void {
    this.characterService
      .getCharacters()
      .subscribe(characters => (this.characters = characters));
  }

  public toggleDetails() {
    if (this.showDetails === true) {
      this.showDetails = false;
    } else {
      this.showDetails = true;
    }

    console.log(this.filterBy);
  }
  ngOnInit() {
    this.getCharacters();
  }
}
