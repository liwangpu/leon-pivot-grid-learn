import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-usage',
  templateUrl: './basic-usage.component.html',
  styleUrls: ['./basic-usage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicUsageComponent implements OnInit {

  public constructor() { }

  public ngOnInit(): void {
  }

}
