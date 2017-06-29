import { Component } from '@angular/core';

export class Hero {
	id: number;
	name:string;
}
@Component({
  template:`
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div><label>name: </label>{{hero.name}}</div>
  `,
  selector: 'app-root',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero : Hero = {
  	id: 1,
  	name: 'Windstorm'
  	};
}