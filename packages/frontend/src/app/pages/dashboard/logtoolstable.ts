import { LogData } from '@/types/logs';
import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-log-tools-table',
    standalone: true,
    imports: [TableModule],
    template: `
        <p-table [value]="logs" [tableStyle]="{ 'min-width': '50rem' }">
            <ng-template #header>
                <tr>
                    <th>Timestamp</th>
                    <th>Severity</th>
                    <th>Message</th>
                </tr>
            </ng-template>
            <ng-template #body let-product>
                <tr>
                    <td>{{ product.timestamp }}</td>
                    <td>{{ product.level }}</td>
                    <td>{{ product.message }}</td>
                </tr>
            </ng-template>
        </p-table>
    `
})
export class LogToolsTable {
    @Input() logs: LogData[] = [];
}
