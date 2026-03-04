import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pipes-ex',
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    JsonPipe,
    SlicePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
  ],
  templateUrl: './pipes-ex.html',
  styleUrl: './pipes-ex.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipesEx {
  readonly sampleText: string = 'Angular pipes make templates cleaner and easier to read';
  readonly releaseDate: Date = new Date('2026-03-04T09:30:00');
  readonly score: number = 92.4567;
  readonly conversionRate: number = 0.8734;
  readonly amount: number = 123456.75;
  readonly tags: string[] = ['pipes', 'uppercase', 'date', 'json', 'slice', 'currency'];
  readonly profile = {
    id: 101,
    name: 'Karl Jucutan',
    role: 'Frontend Developer',
    skills: ['Angular', 'TypeScript', 'RxJS'],
    active: true,
  };

}
