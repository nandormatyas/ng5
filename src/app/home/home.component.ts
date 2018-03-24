import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('400ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ]))
        ]), { optional: true }),

        query(':leave', stagger('1ms', [
          animate('.3s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 1 })
          ]))
        ]), { optional: true }),

      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount = 3;
  btnText = 'ADD ITEM';
  goalText = 'My first goal';
  goals = [];
  hiddenxp = false;
  hiddenLang = false;
  hiddenEdu = false;

  showHidexp() {
    this.hiddenLang = false;
    this.hiddenEdu = false;
    this.hiddenxp = !this.hiddenxp;
  }

  showHideLang() {
    this.hiddenxp = false;
    this.hiddenEdu = false;
    this.hiddenLang = !this.hiddenLang;
  }
  showHideEdu() {
    this.hiddenxp = false;
    this.hiddenLang = false;
    this.hiddenEdu = !this.hiddenEdu;
  }

  constructor(private _data: DataService) { }

  activeXp() {
    if (this.hiddenxp) {
      return {
        'color': '#8ef38e',
        'box-shadow': 'unset'
      };
    }
  }
  activeLang() {
    if (this.hiddenLang) {
      return {
        'color': '#8ef38e',
        'box-shadow': 'unset'
      };
    }
  }
  activeEdu() {
    if (this.hiddenEdu) {
      return {
        'color': '#8ef38e',
        'box-shadow': 'unset'
      };
    }
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }
  removeItem(i) {
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);

  }
}
