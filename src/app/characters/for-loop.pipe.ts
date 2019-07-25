import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "forLoop"
})
export class ForLoopPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    for (let i = 0; i < value; i++) {}
  }
  return: null;
}
