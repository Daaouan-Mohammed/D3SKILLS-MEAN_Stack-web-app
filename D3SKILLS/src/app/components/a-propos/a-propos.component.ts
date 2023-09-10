import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { StatisticsService } from 'src/app/services/statistics.service';
//import {ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AProposComponent implements OnInit, AfterViewInit {
  statistics: any;

  constructor(private renderer: Renderer2, private el: ElementRef, private _statistic: StatisticsService) { }

  ngOnInit() {
    this._statistic.getStatistics().subscribe((statistics: any) => {
      this.statistics = statistics;
      console.log(statistics);
    })
  }

  ngAfterViewInit() {
    this.initializeProgressBars();
  }

  private initializeProgressBars() {
    this.renderer.listen('window', 'load', () => {
      const progressBars = this.el.nativeElement.querySelectorAll('.progress');

      progressBars.forEach((progress: { getAttribute: (arg0: string) => any; querySelector: (arg0: string) => any; }) => {
        const value = progress.getAttribute('data-value');
        const left = progress.querySelector('.progress-left .progress-bar');
        const right = progress.querySelector('.progress-right .progress-bar');

        if (value > 0) {
          if (value <= 50) {
            right.style.transform = `rotate(${this.percentageToDegrees(value)}deg)`;
          } else {
            right.style.transform = 'rotate(180deg)';
            left.style.transform = `rotate(${this.percentageToDegrees(value - 50)}deg)`;
          }
        }
      });
    });
  }

  private percentageToDegrees(percentage: number) {
    return (percentage / 100) * 360;
  }
}
