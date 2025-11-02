import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { LogToolsService } from '@/services/logtools.service';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { finalize } from 'rxjs';
import { BackendErrorHandlerService } from '@/services/backenderrorhandler.service';
import { LogData } from '@/types/logs';

@Component({
    selector: 'app-log-tools-form',
    standalone: true,
    imports: [InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule, ReactiveFormsModule, ProgressSpinnerModule],
    template: `
        <form [formGroup]="logsForm">
            <div class="flex mt-8">
                <div class="card flex flex-col gap-6 w-full">
                    <div class="font-semibold text-xl">Send Logs</div>

                    <div class="flex flex-col gap-6">
                        <label for="message">Record Message</label>
                        <input formControlName="message" pInputText id="message" type="text" />
                        @if (logsForm.get('message')?.invalid && (logsForm.get('message')?.touched || logsForm.get('message')?.dirty)) {
                            <small class="text-red-500">Record Message is required.</small>
                        }
                    </div>

                    <div class="flex flex-col gap-6">
                        <label for="level">Severity Level</label>
                        <p-select id="level" formControlName="level" [options]="logLevels" optionLabel="name" optionValue="code" placeholder="Select One" class="w-full"></p-select>
                        @if (logsForm.get('level')?.invalid && (logsForm.get('level')?.touched || logsForm.get('level')?.dirty)) {
                            <small class="text-red-500">Severity Level is required.</small>
                        }
                    </div>

                    <hr />

                    <div class="flex flex-col gap-6">
                        <div class="flex flex-wrap gap-3">
                            @if (loading()) {
                                <p-progress-spinner ariaLabel="loading" [style]="{ width: '50px', height: '50px' }" />
                            } @else {
                                <p-button label="Send" (onClick)="submitLogs()" />
                                <p-button label="Clear" severity="secondary" (onClick)="onClear()" />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </form>
    `
})
export class LogToolsForm {
    logsForm!: FormGroup;
    loading = signal<boolean>(true);
    logLevels = [
        { name: 'Error', code: 'error' },
        { name: 'Warning', code: 'warn' },
        { name: 'Info', code: 'log' },
        { name: 'Debug', code: 'debug' },
        { name: 'Verbose', code: 'verbose' }
    ];

    @Output() onLogCreated = new EventEmitter<LogData>();

    constructor(
        private formBuilder: FormBuilder,
        private logService: LogToolsService,
        private messageService: MessageService,
        private errorHandler: BackendErrorHandlerService
    ) {}

    ngOnInit() {
        this.logsForm = this.formBuilder.group({
            message: ['', Validators.required],
            level: ['', Validators.required]
        });
        this.loading.set(false);
    }

    onClear() {
        this.logsForm.reset();
    }

    submitLogs() {
        if (this.logsForm.invalid) {
            Object.values(this.logsForm.controls).forEach((control) => {
                control.markAsTouched();
            });
            return;
        }

        this.loading.set(true);
        const logData = this.logsForm.value;

        this.logService
            .sendLogRecord(logData)
            .pipe(finalize(() => this.loading.set(false)))
            .subscribe({
                next: () => {
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Log Record Sent Successfully', life: 3000 });
                    this.logsForm.reset();
                    this.onLogCreated.emit(logData);
                },
                error: this.errorHandler.notify()
            });
    }
}
