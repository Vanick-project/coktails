import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appSelected]',
})
export class SelectedDirective implements OnChanges {
  @Input() public appSelected: boolean;
  @HostBinding('style.backgroundColor') private backgroudColor: string;
  @HostBinding('style.fontWeight') private fontWeight: string;
  @HostBinding('style.color') private color: string;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    //throw new Error('Method not implemented.');
    if (this.appSelected) {
      this.backgroudColor = 'var(--primary)';
      this.fontWeight = '500';
      this.color = 'white';
    } else {
      this.backgroudColor = 'white';
      this.fontWeight = '400';
      this.color = 'var(--text-regular)';
    }
  }
}
