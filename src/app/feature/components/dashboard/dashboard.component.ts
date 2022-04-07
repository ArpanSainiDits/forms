import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  

  // emailFormControl = new FormControl('', [Validators.required, Validators.email],);

  emailFormControl = new FormGroup({
    email:new FormControl('', [Validators.required]),
    password:new FormControl('', [Validators.required])

  })

  
  constructor() { }

  ngOnInit(): void {
  }


  
  onSubmit(){
    console.warn(this.emailFormControl.value);
    if(this.emailFormControl.invalid)
      return;
  }



public a: any =""

  data2:any = {}
  getData(email:any, password:any){
    if (email == ""){
      alert("मेरा एक दोस्त है, जिसका नाम सुडो है")
    }
    const data ={
      Email : email,
      Password : password
    }
    this.data2 = data
    console.log(data);
    
  }
  

}
