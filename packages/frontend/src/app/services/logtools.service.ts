import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LogData } from '@/types/logs';

@Injectable({
    providedIn: 'root'
})
export class LogToolsService {
    private readonly http = inject(HttpClient);

    sendLogRecord(logData: Partial<LogData>): Observable<any> {
        console.log('Log record sent:', logData);
        return of(null);
    }
}
