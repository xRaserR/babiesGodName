import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  genderValue: string = '';
  constructor(public router: Router, public route: ActivatedRoute) { }

  childNameFunction(args: string): void {
    this.genderValue = args;
    console.log(args);
    // this.router.navigate(['/childNames', args]);
  }
}
