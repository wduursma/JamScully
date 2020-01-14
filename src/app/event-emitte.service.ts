import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    
    
@Injectable({    
  providedIn: 'root'    
})    
export class EventEmitterService {    
    
  invokeFirstComponentFunction = new EventEmitter();    
  invokeSelectContentFunction = new EventEmitter();  
  subsVar: Subscription;   
  subsVarContent: Subscription; 
    
  constructor() { }    
    
  onFirstComponentButtonClick(value) {    
    this.invokeFirstComponentFunction.emit(value);   
  }  
  onSelectContentClick(cat) {    
    this.invokeSelectContentFunction.emit(cat);   
  }      
}  