import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

const customValidator: (array: string[]) => ValidatorFn =
  (array: string[]) =>
  (control: AbstractControl): { customMessage: string } | null => {
    if (array.includes(control.value)) {
      return { customMessage: 'Pole obowiązkowe' };
    }
    return null;
  };

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
})
export class RecipeFormComponent implements OnInit {
  form!: FormGroup;
  // recipeNameControl = new FormControl({ value: '', disabled: false }, [
  //   Validators.minLength(4),
  //   Validators.required,
  //   customValidator(['kluski']),
  // ]);
  constructor(private formBuild: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuild.group({
      name: this.formBuild.control({ value: '', disabled: false }, [
        Validators.minLength(4),
        Validators.required,
        customValidator(['kluski']),
      ]),
      description: this.formBuild.control(''),
      ingredients: this.formBuild.array([
        this.formBuild.group({
          name: ['', Validators.required],
          value: ['', Validators.required],
        }),
      ]),
      rating: this.formBuild.control(3),
      imageUrl: this.formBuild.control(''),
    });

    // this.addIngredient();
  }

  // ingredients() {
  //   return this.form.get('ingredients') as FormArray;
  // }

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  addIngredient(): FormGroup {
    return this.formBuild.group({
      name: ['', Validators.required],
      value: ['', Validators.required],
    });
  }

  send() {
    console.log('sending');
  }
}
