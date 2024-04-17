import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NumToWordPipe } from '../../num-to-word.pipe';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [FormsModule, NumToWordPipe],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component {

  inputValue!: string;
}
