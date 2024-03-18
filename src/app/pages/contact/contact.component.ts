import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  // formulario reactivo
  formularioContacto: FormGroup;

  constructor(private form:FormBuilder){
    this.formularioContacto = this.form.group({
      name : ["",[Validators.required, Validators.minLength(3)]],
      email : ["",[Validators.email, Validators.required]],
      message : ["",[Validators.required, Validators.minLength(10)]],
    })
  }

  enviar(){
    console.log(this.formularioContacto.value)
  }

  hasErrors(controlName: string, typeError:string){
    // controla si lo que ingresa el usuario tiene un error de validacion y si el usuario entro y salio del input
    return this.formularioContacto.get(controlName)?.hasError(typeError) && this.formularioContacto.get(controlName)?.touched
  }
}
