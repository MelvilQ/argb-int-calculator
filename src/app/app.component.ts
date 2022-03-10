import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  static readonly argbRgbaRegex = /^[0-9a-fA-F]{8}$/;

  argbStr: string = '#FFFFFFFF';
  rgbaStr: string = '#FFFFFFFF';
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
    this.reset();
  }

  reset() {
    this.argbStr = '#FFFFFFFF';
    this.rgbaStr = '#FFFFFFFF';
    this.a = 255;
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.i = -1;
  }

  toZeroPaddedHex(n: number){
    let result = n.toString(16);
    if(result.length == 1){
      result = '0' + result;
    }
    return result;
  }

  get rgbaHex(): string {
    const hexStr = '#'
      + this.toZeroPaddedHex(this.r)
      + this.toZeroPaddedHex(this.g)
      + this.toZeroPaddedHex(this.b)
      + this.toZeroPaddedHex(this.a);
    return hexStr.toUpperCase();
  }

  get argbHex(): string {
    const hexStr = '#'
      + this.toZeroPaddedHex(this.a)
      + this.toZeroPaddedHex(this.r)
      + this.toZeroPaddedHex(this.g)
      + this.toZeroPaddedHex(this.b);
    return hexStr.toUpperCase();
  }

  get colorPreviewStyle() {
    return ({'background-color': this.rgbaHex});
  }

  calcIntValFromArgb() {
    this.i = (this.a << 24) + (this.r << 16) + (this.g << 8) + (this.b << 0);
    this.rgbaStr = this.rgbaHex;
    this.argbStr = this.argbHex;
  }

  calcArgbFromIntVal() {
    this.a = 0xff & this.i >>> 24;
    this.r = 0xff & this.i >>> 16;
    this.g = 0xff & this.i >>> 8;
    this.b = 0xff & this.i;
    this.rgbaStr = this.rgbaHex;
    this.argbStr = this.argbHex;
  }

  calcIntValFromHexArgb() {
    const argbWithoutHash = this.argbStr.replace('#', '');
    if (!AppComponent.argbRgbaRegex.test(argbWithoutHash)) {
      this.reset();
      return;
    }
    this.a = parseInt(argbWithoutHash.substring(0, 2), 16);
    this.r = parseInt(argbWithoutHash.substring(2, 4), 16);
    this.g = parseInt(argbWithoutHash.substring(4, 6), 16);
    this.b = parseInt(argbWithoutHash.substring(6, 8), 16);
    this.calcIntValFromArgb();
  }

  calcIntValFromHexRgba() {
    const rgbaWithoutHash = this.rgbaStr.replace('#', '');
    if (!AppComponent.argbRgbaRegex.test(rgbaWithoutHash)) {
      this.reset();
      return;
    }
    this.r = parseInt(rgbaWithoutHash.substring(0, 2), 16);
    this.g = parseInt(rgbaWithoutHash.substring(2, 4), 16);
    this.b = parseInt(rgbaWithoutHash.substring(4, 6), 16);
    this.a = parseInt(rgbaWithoutHash.substring(6, 8), 16);
    this.calcIntValFromArgb();
  }
}
