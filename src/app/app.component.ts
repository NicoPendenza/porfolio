import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'porfolio_yo';
  
  formularioDeContacto: FormGroup | any;
 
  constructor(private FormBuilder: FormBuilder) { }
 
  ngOnInit() {
    this.formularioDeContacto = this.FormBuilder.group({
      nombre: ["", [Validators.required]],
      mensaje:["", [Validators.required,]
    ]
    });
  }
  alEnviarMensaje() {
 
 
    if (this.formularioDeContacto.valid == true) {
       
      window.open('https://wa.me/' + 542215689551 + '?text=Hola, mi nombre es '
        + this.formularioDeContacto.value.nombre + 
        '. Me quiero contactar con vos por lo siguiente:'
        + this.formularioDeContacto.value.mensaje, '_blank');
    }
 
  }


}
