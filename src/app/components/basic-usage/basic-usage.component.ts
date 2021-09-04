import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import * as WebDataRocks from 'webdatarocks';
import { WebdatarocksComponent } from '../webdatarocks/webdatarocks.component';

@Component({
  selector: 'app-basic-usage',
  templateUrl: './basic-usage.component.html',
  styleUrls: ['./basic-usage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicUsageComponent implements OnInit, AfterViewInit {

  @ViewChild(WebdatarocksComponent)
  private readonly dataRocks: WebdatarocksComponent;

  public constructor(
    private cd: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {

  }

  public ngAfterViewInit(): void {
    const report: WebDataRocks.Report = {
      dataSource: {
        filename: `/assets/datas/students.json`
      }
    };
    this.dataRocks.setReport(report);
  }

}
