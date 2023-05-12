import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auto-consulta',
  templateUrl: './auto-consulta.component.html',
  styleUrls: ['./auto-consulta.component.css']
})
export class AutoConsultaComponent implements OnInit {
  captcha:boolean=true;
  siteKey:string="";
  constructor(private formBuilder: FormBuilder) {
    this.siteKey="6Lfe8AEmAAAAAEbw4XVMu9bqWmhlk887s-8lJGvC";
 
  }
  aFormGroup: FormGroup= this.formBuilder.group({
    recaptcha: ['', Validators.required]
  })

  formularioQueja: FormGroup= this.formBuilder.group({
    noqueja: ['', Validators.required]
  })

  ngOnInit() {
    
  }
  
  onSubmit() {
    if (this.aFormGroup.valid) {
      const recaptchaResponse = this.aFormGroup.get('recaptcha')?.value;
      console.log('Respuesta del reCAPTCHA:', recaptchaResponse);{
       this.captcha=false;
      }
    }
  }

  get noquejaField(){
    return this.formularioQueja.get("noqueja")
  }


    get recaptchaField(){
    return this.aFormGroup.get("recaptcha");
   }

   consultar(){
    
   }

}
