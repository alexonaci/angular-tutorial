import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  formModel = {
    username: '',
    password: ''
  };

  reactiveFormGroup = new FormGroup({
    telephone: new FormControl('', {validators: [Validators.required, Validators.email], updateOn: 'blur'}),
    address: new FormControl('', [Validators.required]),
  })

  submitForm(form: NgForm) {
    console.log(form);
  }

  ngOnInit() {
    this.reactiveFormGroup?.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

}
