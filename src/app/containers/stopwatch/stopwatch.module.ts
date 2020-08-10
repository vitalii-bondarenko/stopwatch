import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopwatchComponent } from './stopwatch.component';
import { StopwatchRouting } from './stopwatch.routing';

@NgModule({
  declarations: [ StopwatchComponent ],
  imports: [
    CommonModule,
    StopwatchRouting
  ]
})
export class StopwatchModule {}
