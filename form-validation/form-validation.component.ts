import { Component, OnInit, Input, Renderer2,Inject } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { FormErrorInfoService } from './form-error-info.service';
import { DOCUMENT } from '@angular/common';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {
 isDisabled = false;

  constructor(private errorInfo : FormErrorInfoService, private renderer: Renderer2, @Inject(DOCUMENT) private document,private http: HttpClient) { }
  profileForm = new FormGroup({
    firstName: new FormControl({value: '', disabled:this.isDisabled},[Validators.required,Validators.min(3),Validators.max(3),Validators.minLength(3),Validators.maxLength(3)]),
    lastName: new FormControl(''),
  });
  ngOnInit() {
    
  this.http.get("/api/rest").subscribe(data=>{
    console.log(data)
  })
  }

  formSubmit() {
    if(this.profileForm.status.toLowerCase() === "invalid"){
       for(let key in this.profileForm.controls)
       {
         if(this.profileForm.controls[key].errors){
           if(this.document.getElementById(key).lastChild.className ==="error"){
            this.document.getElementById(key).lastChild.innerHTML = this.errorInfo.getFieldError(this.profileForm.controls[key].errors,"First Name");
           }
           else{
       const child = this.document.createElement('span');
       child.className= "error";
       child.innerHTML =  this.errorInfo.getFieldError(this.profileForm.controls[key].errors,"First Name");
       this.renderer.appendChild(this.document.getElementById(key), child);
           }
       }
      }
    }
  }
}
