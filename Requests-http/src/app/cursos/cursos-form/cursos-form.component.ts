import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertModalService } from './../../shared/alert-modal.service';
import { CursosService } from './../cursos.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: CursosService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  form: FormGroup;
  submitted: boolean = false;

  onSubmit() {

    this.submitted = true;

    console.log(this.form.value, this.form.value.nome.length);
    if (this.form.valid) {
      console.log('submit');

      const msg: string[] = ['criado', 'criar'];

      if (this.form.value.id) {
        msg[0] = 'editado';
        msg[1] = 'editar';
      }

      this.service.save(this.form.value).subscribe(
        success => {
          this.modal.showSuccess(`Curso ${msg[0]} com sucesso`);
          this.location.back();
        },
        error => this.modal.showDanger(`Erro ao ${msg[1]} curso`)
      );
    }
  }

  onCancel() {

    this.form.reset();
    this.submitted = false;

    this.location.back();
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  ngOnInit(): void {

    const curso = this.route.snapshot.data['curso'];

    this.form = this.fb.group({
      id: [curso.id],
      nome: [
        curso.nome,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(200)
        ]
      ]
    });
  }

}
