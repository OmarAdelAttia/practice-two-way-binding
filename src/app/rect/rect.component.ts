import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {

  // size = input.required<{ width: string, height: string }>();
  // sizeChange = output<{ width: string, height: string }>();

  size = model.required<{ width: string, height: string }>()

  onReset() {
    // this.sizeChange.emit({ width: '100', height: '100' });
    this.size.set({ width: '100', height: '100' });
    // this.size.update((value: { width: string, height: string }) => {
    // value.width = '100';
    // value.height = '100';
    // });
  }
}
