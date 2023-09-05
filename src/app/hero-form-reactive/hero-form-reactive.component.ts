import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../_drt-forbidden-name/forbidden-name.directive';
@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls: ['./hero-form-reactive.component.scss']
})
export class HeroFormReactiveComponent {

  hero = { name: 'Dr.' };

  heroForm!: FormGroup;

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/admin/i)
      ]),
    })
  }

  get name() { return this.heroForm.get('name')!; }
}
