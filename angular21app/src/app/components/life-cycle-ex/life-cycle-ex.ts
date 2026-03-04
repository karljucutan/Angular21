import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-ex',
  imports: [],
  templateUrl: './life-cycle-ex.html',
  styleUrl: './life-cycle-ex.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifeCycleEx
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  lifecycleLogs = signal<string[]>([]);
  private doCheckCount: number = 0;
  private contentCheckedCount: number = 0;
  private viewCheckedCount: number = 0;

  constructor() {
    // Runs when Angular creates the class instance (before lifecycle hooks).
    this.addLog('constructor: component instance created');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Runs when any @Input value changes (first call happens before ngOnInit).
    this.addLog(`ngOnChanges: input values changed (${Object.keys(changes).join(', ') || 'none'})`);
  }

  ngOnInit(): void {
    // Runs once after Angular initializes component inputs.
    this.addLog('ngOnInit: component initialized');
  }

  ngDoCheck(): void {
    // Runs during every change-detection cycle (custom check point).
    this.doCheckCount++;
    if (this.doCheckCount <= 3) {
      this.addLog(`ngDoCheck: custom change detection (${this.doCheckCount})`);
    }
  }

  ngAfterContentInit(): void {
    // Runs once after projected content (<ng-content>) is initialized.
    this.addLog('ngAfterContentInit: projected content initialized');
  }

  ngAfterContentChecked(): void {
    // Runs after each check of projected content.
    this.contentCheckedCount++;
    if (this.contentCheckedCount <= 3) {
      this.addLog(`ngAfterContentChecked: projected content checked (${this.contentCheckedCount})`);
    }
  }

  ngAfterViewInit(): void {
    // Runs once after the component view and child views are initialized.
    this.addLog('ngAfterViewInit: view initialized');
  }

  ngAfterViewChecked(): void {
    // Runs after each check of the component view and child views.
    this.viewCheckedCount++;
    if (this.viewCheckedCount <= 3) {
      this.addLog(`ngAfterViewChecked: view checked (${this.viewCheckedCount})`);
    }
  }

  ngOnDestroy(): void {
    // Runs once right before Angular destroys the component (cleanup stage).
    this.addLog('ngOnDestroy: component destroyed / cleanup');
  }

  triggerCheckCycle(): void {
    this.lifecycleLogs.update(logs => [...logs, 'Manual state update -> triggers change detection']);
  }

  private addLog(hook: string): void {
    this.lifecycleLogs.update(logs => [...logs, hook]);
  }
}
