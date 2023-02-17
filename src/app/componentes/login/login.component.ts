import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogueo:FormGroup;


  constructor(private fb:FormBuilder) { 
    this.formLogueo= this.fb.group({
      usuario:['', Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }


ingresar(){
  console.log(this.formLogueo.value);
}

}
