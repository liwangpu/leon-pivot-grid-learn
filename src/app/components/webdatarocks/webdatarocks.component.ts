import { ChangeDetectionStrategy, Component, ElementRef, Injector, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SubSink } from 'subsink';
import * as WebDataRocks from 'webdatarocks';

// 根据mirror需要自己实施需要的hooks等
// 具体参考
// https://github.com/WebDataRocks/ng-webdatarocks/blob/main/ng-webdatarocks/src/webdatarocks.component.ts
// webDataRocks文档
// https://www.webdatarocks.com/doc

@Component({
    selector: 'app-pivot-grid-webdatarocks',
    templateUrl: './webdatarocks.component.html',
    styleUrls: ['./webdatarocks.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebdatarocksComponent implements OnInit, OnDestroy {

    @Input()
    public width: string | number;
    @Input()
    public height: string | number;
    private webDataRocks: WebDataRocks.Pivot;
    @ViewChild('pivotContainer', { read: ElementRef, static: true })
    private readonly pivotContainer: ElementRef;
    private subs: SubSink = new SubSink();
    public constructor(protected injector: Injector) {

    }
    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    public ngOnInit(): void {
        this.webDataRocks = new WebDataRocks({
            container: this.pivotContainer.nativeElement,
            width: this.width,
            height: this.height,
            toolbar: true,
            // customizeCell: this.customizeCell,
            // beforetoolbarcreated: WebdatarocksComponent.customizeToolbar,
            global: {
                localization: '/assets/pivot-grid-zh.json'
            }
        });
    }

    public setReport(report: WebDataRocks.Report): void {
        this.webDataRocks.setReport(report);
    }

    private static customizeToolbar(toolbar: any): void {
        const tabs: Array<any> = toolbar.getTabs(); // get all tabs from the toolbar
        // tslint:disable-next-line: only-arrow-functions
        toolbar.getTabs = function (): Array<any> {
            // tabs按钮的顺序依次为
            // 0:connect
            // 1:open
            // 2:save
            // 3:export
            // 4:format
            // 5:options
            // 6:fields
            // 7:fullScreen
            return [tabs[3], tabs[7]];
        };
    }
}
