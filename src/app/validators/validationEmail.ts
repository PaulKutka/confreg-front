import {FormControl} from '@angular/forms';

export class UsernameValidator{
  static lengthOver400(control:FormControl) {
    let wordArray = control.value.split(' ');
    if(wordArray.length >= 400)
      return {lengthOver400:true };
    return null;
  }
}
