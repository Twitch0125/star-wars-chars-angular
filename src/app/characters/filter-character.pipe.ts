import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterCharacter"
})
export class FilterCharacterPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value) {
      let filterBy = args[0];
      let filteredCharacters = value.filter(character =>
        character.name.toLowerCase().includes(filterBy.toLowerCase())
      );
      return filteredCharacters;
    }
    return [];
  }
}
