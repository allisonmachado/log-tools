import { LogData } from '@/types/logs';
import { Component, Input, signal } from '@angular/core';
import { TagModule } from 'primeng/tag';

@Component({
    selector: 'app-log-tag',
    standalone: true,
    imports: [TagModule],
    template: ` <p-tag [severity]="severity()" [value]="log.level" />`
})
export class LogTag {
    @Input() log!: LogData;

    severity = signal<string>('');

    ngOnInit() {
        switch (this.log.level) {
            case 'error':
                this.severity.set('danger');
                break;
            case 'log':
                this.severity.set('info');
                break;
            case 'warn':
                this.severity.set('warn');
                break;
            case 'debug':
                this.severity.set('primary');
                break;
            case 'verbose':
                this.severity.set('secondary');
                break;
            default:
                this.severity.set(this.log.level.toUpperCase());
        }
    }
}
