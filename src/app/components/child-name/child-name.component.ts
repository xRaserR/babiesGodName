import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-child-name',
  templateUrl: './child-name.component.html',
  styleUrls: ['./child-name.component.css']
})
export class ChildNameComponent implements OnInit {
  public genderValue: string = '';

  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let gender = params.get('gender');
      this.genderValue = gender ? gender : '';
    });

  }
}
