import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private messageSource = new BehaviorSubject("");
message:string;
currentMessage = this.messageSource.asObservable();

  constructor() { }

  
}
