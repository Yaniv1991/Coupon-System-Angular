import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromptService {

  constructor() { }

  public promptBeforeDelete(message: string, action): void {
    const response = prompt(message + ' ? \nEnter "DELETE"');
    // tslint:disable-next-line:triple-equals
    if (response == 'DELETE') {
      action();
    } else {
      window.alert('You have canceled the delete action');
    }
  }
}
