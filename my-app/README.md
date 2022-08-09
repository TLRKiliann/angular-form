# Form (Sign-Up & Sign-In)


## Angular version

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

---

## Install

> npm install -g @angular/cli

> ng new my-app --style=scss

> cd my-app

> ng serve

> ng test

---

## Schema

> app.component.ts

```
import { AbstractControl, FormGroup, FormControl, FormBuilder, Validators }
import Validation from './utils/validation';
```

---

## Structure

> app.module.ts

```
import { ReactiveFormsModule } from '@angular/forms';

  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
```

---

> app.component.ts

```
import Validation from './utils/validation';
      {
        validators: [Validation.match('password', 'confirmPassword')] // *Validation
      });
```

`*Validation` = class Validation of `./utils/validation.ts`

---

> ./utils/validation.ts

```
import { AbstractControl, ValidatorFn } from '@angular/forms';
```

> app.components.html

  <form [formGroup]="form" (ngSubmit)="onSubmit()">

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
