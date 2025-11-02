import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { LogData } from '@/types/logs';

@Injectable({
    providedIn: 'root'
})
export class LogToolsService {
    private readonly http = inject(HttpClient);

    sendLogRecord(logData: Partial<LogData>) {
        return this.http.post('/api/logs', logData, {
            withCredentials: true
        });
    }
}
