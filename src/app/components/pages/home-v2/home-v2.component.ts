import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home-v2',
  templateUrl: './Home-v2.component.html',
  styleUrls: ['./Home-v2.component.css']
})
export class HomeV2Component implements OnInit {

  constructor() { }
  // Footer style
  classname = "grey-bg-footer";
  ftlogo = "assets/img/logo-3.png";
  ftshape = "assets/img/lines/09.png";
  ftshape2 = "assets/img/lines/10.png";
  ftshapeclass = "line-three";
  ftshape2class = "line-four";

  ngOnInit(): void {
  }

}
