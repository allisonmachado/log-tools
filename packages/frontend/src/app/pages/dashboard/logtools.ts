import { LogData } from '@/types/logs';
import { Component, signal } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { LogToolsForm } from './logtoolsform';
import { LogToolsTable } from './logtoolstable';

@Component({
    selector: 'app-log-tools',
    standalone: true,
    imports: [FluidModule, LogToolsForm, LogToolsTable],
    template: `<p-fluid>
        <app-log-tools-form (onLogCreated)="addLog($event)"></app-log-tools-form>

        <app-log-tools-table [logs]="logData()"></app-log-tools-table>
    </p-fluid>`
})
export class LogTools {
    logData = signal<LogData[]>([]);

    constructor() {}

    addLog(logData: LogData) {
        this.logData.update((logs) => [...logs, logData]);
    }
}
