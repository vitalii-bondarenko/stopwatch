import { Component, OnInit } from '@angular/core';
import { interval, Subject, Subscription } from 'rxjs';
import { bufferCount, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-stopwatch',
  templateUrl: 'stopwatch.html',
  styleUrls: [ 'stopwatch.scss' ]
})
export class StopwatchComponent implements OnInit {

  floor = Math.floor;
  seconds: number = 0;
  $sub: Subscription;
  $ticker = interval(1000);
  $waitButton = new Subject<Event>();

  ngOnInit() {
    this.subscribeToWaitButton();
  }

  start() {
    if (!this.$sub || this.$sub.closed) {
      this.$sub = this.$ticker.subscribe(_ => this.seconds++);
    }
  }

  stop() {
    this.seconds = 0;
    this.wait();
  }

  wait() {
    if (this.$sub) {
      this.$sub.unsubscribe();
    }
  }

  reset() {
    this.seconds = 0;
    this.start();
  }

  subscribeToWaitButton() {
    this.$waitButton.pipe(
      map(_ => new Date().getTime()),
      bufferCount(2, 1),
      filter(timestamps => timestamps[ 1 ] - timestamps[ 0 ] < 300)
    ).subscribe(_ =>
      this.wait()
    );
  }
}
