import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class BackendErrorHandlerService {
    constructor(private messageService: MessageService) {}

    notify() {
        return (err: any) => {
            let messages = 'An unknown error occurred.';
            if (err.error && err.error.message) {
                if (Array.isArray(err.error.message)) {
                    messages = err.error.message.join('\n');
                } else {
                    messages = err.error.message;
                }
            }
            this.messageService.add({ severity: 'error', summary: 'Error', detail: messages, life: 5000 });
        };
    }
}
