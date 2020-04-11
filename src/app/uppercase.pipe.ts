import { Pipe, PipeTransform } from '@angular/core';
import { invalidPipeArgumentError } from '../app/invalid_pipe_argument_error';


@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  
  transform(value: string): string {
    if(!value) return value;
    if (typeof value != 'string'){
      throw invalidPipeArgumentError (UppercasePipe,value)
    }
    return value.toUpperCase();
  }

}
