import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  message:string[] = [];

  log(message:string) {
    this.message.push(message);
  }

}
