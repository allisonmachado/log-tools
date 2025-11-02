import { LogTag } from '@/components/logtag';
import { LogData } from '@/types/logs';
import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-log-tools-table',
    standalone: true,
    imports: [TableModule, LogTag],
    template: `
        <div class="flex mt-8">
            <div class="card flex flex-col gap-6 w-full">
                <div class="font-semibold text-xl">Current Session Logs</div>

                <p-table stripedRows [value]="logs" size="large">
                    <ng-template #header>
                        <tr>
                            <th>Timestamp</th>
                            <th>Severity</th>
                            <th style="width: 60%;">Message</th>
                        </tr>
                    </ng-template>
                    <ng-template #body let-l>
                        <tr>
                            <td>{{ l.timestamp }}</td>
                            <td><app-log-tag [log]="l" /></td>
                            <td style="width: 60%;">{{ l.message }}</td>
                        </tr>
                    </ng-template>
                </p-table>
            </div>
        </div>
    `
})
export class LogToolsTable {
    @Input() logs: LogData[] = [];
}
