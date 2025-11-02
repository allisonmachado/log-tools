import { LogData } from '@/types/logs';
import { Component, signal } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { LogToolsForm } from './logtoolsform';

@Component({
    selector: 'app-log-tools',
    standalone: true,
    imports: [FluidModule, LogToolsForm],
    template: `<p-fluid>
        <app-log-tools-form (onLogCreated)="addLog($event)"></app-log-tools-form>

        @for (log of logData(); track log.message) {
        <p>{{ log.message }} - Level: {{ log.level }}</p>
        } @empty {
        <p>No logs found.</p>
        }

    </p-fluid>`
})
export class LogTools {
    logData = signal<LogData[]>([]);

    constructor() {}

    addLog(logData: LogData) {
        this.logData.update((logs) => [...logs, logData]);
    }
}
