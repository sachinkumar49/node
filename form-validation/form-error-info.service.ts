import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormErrorInfoService {

  constructor() { }
  getFieldError(validation,label){
    let text ='';
    for(let key in validation){
      if(key === "min"){
         text = label+" should have minimum "+validation[key].min+"char";
      }else if(key === "max"){
        text = label+" has a max value";
      }else if(key === "maxLength"){
        text = label+" has a max length";
      }else if(key === "minLength"){
        text = label+" has a min length";
      }
      else{
        text = label+" has a required field";
      }
    }
    return text;
  }
}
