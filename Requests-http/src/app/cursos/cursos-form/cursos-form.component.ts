import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form: FormGroup;
  submitted: boolean = false;

  onSubmit() {

    this.submitted = true;

    console.log(this.form.value, this.form.value.nome.length);
    if (this.form.valid) {
      console.log('submit');
    }
  }

  onCancel() {

    this.form.reset();
    this.submitted = false;

    console.log('cancel');
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(200)
        ]
      ]
    });
  }

}
