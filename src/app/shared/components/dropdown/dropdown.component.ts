import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  public cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
];

  public value: any;
  public clear: boolean = false;

  public onClear() {
    this.clear = !this.clear;
  }

  public get _onOff() {
    return this.clear ? 'on' : 'off';
  }

}
