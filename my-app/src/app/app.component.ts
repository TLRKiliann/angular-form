import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import Validation from './utils/validation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false)
  })
  submitted = false;

  signin: FormGroup = new FormGroup({
    siemail: new FormControl(''),
    sipassword: new FormControl('')
  })

  validated = false;

  keyVal: string;

  constructor(private formBuilder: FormBuilder) {
    this.keyVal = "storageData";
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullName: ['', Validators.required],
        userName: ['',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)]
          ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', 
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(40)]
          ],
        confirmPassword: ['', Validators.required],
        acceptTerms: ['', Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
    });

    this.signin = this.formBuilder.group(
      {
        siemail: ['', [Validators.required, Validators.email]],
        sipassword: ['', 
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(40)]
          ]
        },
        {
          validators: [Validation.match('siemail', 'sipassword')]
    });
  }

  getItem(): void {
    const local = JSON.parse(localStorage.getItem("storageData") || 'null')
    return local;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  get g(): { [key: string]: AbstractControl } {
    return this.signin.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onValidate(): void {
    //this.keyVal = "storageData";
    this.validated = true;

    if (this.signin.invalid) {
      return;
    }
    localStorage.setItem(this.keyVal, JSON.stringify(this.signin.value, null, 2));
    console.log(JSON.stringify(this.signin.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
};
