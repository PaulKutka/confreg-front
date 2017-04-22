import {FormControl} from '@angular/forms';
import {isNumeric} from 'rxjs/util/isNumeric';

export class CustomValidator {
  static length400(control: FormControl) {
    if (control.value == null) {
      return null;
    }
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
    const PHONE_REGEXP = /^(0|[1-9][0-9]*|[1-9][0-9]{0,2}(,[0-9]{3,3})*)$/i;
    return PHONE_REGEXP.test(control.value) ? null : {
      validatePhone: {
        valid: false
      }
    };
  }
}
