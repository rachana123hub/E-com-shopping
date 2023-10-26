import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartInfoService {
  subject = new Subject();

  constructor() { }

  sendInfo(product) {
    this.subject.next(product) //Triggering an event
  }

  getInfo() {
    return this.subject.asObservable()
  }

}
