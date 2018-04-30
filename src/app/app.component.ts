import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aStr: string = '';
  rStr: string = '';
  gStr: string = '';
  bStr: string = '';
  iStr: string = '';

  get a(): number {
    return parseInt(this.aStr, 10);
  }

  set a(n: number) {
    this.aStr = n.toString();
  }

  get r(): number {
    return parseInt(this.rStr, 10);
  }

  set r(n: number) {
    this.rStr = n.toString();
  }

  get g(): number {
    return parseInt(this.gStr, 10);
  }

  set g(n: number) {
    this.gStr = n.toString();
  }

  get b(): number {
    return parseInt(this.bStr, 10);
  }

  set b(n: number) {
    this.bStr = n.toString();
  }

  get i(): number {
    return parseInt(this.iStr, 10);
  }

  set i(n: number) {
    this.iStr = n.toString();
  }

  constructor() {
    this.a = 255;
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.i = 0;
  }

  toZeroPaddedHex(n: number){
    let result = n.toString(16);
    if(result.length == 1){
      result = '0' + result;
    }
    return result;
  }

  get rgbHex(): string {
    return '#' + this.toZeroPaddedHex(this.r) + this.toZeroPaddedHex(this.g) + this.toZeroPaddedHex(this.b);
  }

  get colorPreviewStyle() {
    return ({'background-color': this.rgbHex});
  }

  calcIntValFromArgb() {
    this.i = (this.a << 24) + (this.r << 16) + (this.g << 8) + (this.b << 0);
  }

  calcArgbFromIntVal() {
    this.a = 0xff & this.i >>> 24;
    this.r = 0xff & this.i >>> 16;
    this.g = 0xff & this.i >>> 8;
    this.b = 0xff & this.i;
  }
}
