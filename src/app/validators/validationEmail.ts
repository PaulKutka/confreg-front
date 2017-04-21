import {FormControl} from '@angular/forms';
import {isNumeric} from 'rxjs/util/isNumeric';

export class CustomValidator {
  static length400(control: FormControl) {
    const wordArray = control.value.split(' ');
    if (wordArray.length >= 400) {
      return {lengthOver400: true };
    }
    return null;
  };
  static emailRegex(control: FormControl) {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    return EMAIL_REGEXP.test(control.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  }
  static phone(control: FormControl) {
    return isNumeric(control.value);
  }

}
