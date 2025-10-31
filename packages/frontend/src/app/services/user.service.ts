import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private readonly http = inject(HttpClient);

    listUserFamily(): Observable<any> {
        const options = { withCredentials: true };

        return this.http.get<any>('/api/families/my', options);
    }
}
