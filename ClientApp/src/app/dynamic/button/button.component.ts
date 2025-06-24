import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() color: string = 'warm';
  @Input() isDisabled: boolean = false;
  @Input() text: string = '';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter();

  onClick(): void {
    this.buttonClick.emit();
  }
}
