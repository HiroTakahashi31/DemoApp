import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  crit: number = 0;
  det: number = 0;
  ss: number = 0;
  dh: number = 0;

  critThreshold(): number {
    if (this.crit === 0) return 0;
    return this.crit % 10;
  }

  detThreshold(): number {
    if (this.det === 0) return 0;
    return this.det % 14;
  }

  ssThreshold(): number {
    if (this.ss === 0) return 0;
    return this.ss % 15;
  }

  dhThreshold(): number {
    if (this.dh === 0) return 0;
    return this.dh % 4;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
