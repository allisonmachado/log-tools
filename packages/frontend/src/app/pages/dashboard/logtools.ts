import { Component } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';

@Component({
    selector: 'app-log-tools',
    standalone: true,
    imports: [InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule, ReactiveFormsModule],
    template: `<p-fluid>
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
                        <p-select id="level" formControlName="level" [options]="logLevels" optionLabel="name" placeholder="Select One" class="w-full"></p-select>
                        @if (logsForm.get('level')?.invalid && (logsForm.get('level')?.touched || logsForm.get('level')?.dirty)) {
                            <small class="text-red-500">Severity Level is required.</small>
                        }
                    </div>

                    <hr />

                    <div class="flex flex-col gap-6">
                        <div class="flex flex-wrap gap-3">
                            <p-button label="Send" (onClick)="submitLogs()" />
                            <p-button label="Clear" severity="secondary" (onClick)="onClear()" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </p-fluid>`
})
export class LogTools {
    logsForm!: FormGroup;

    logLevels = [
        { name: 'Debug', code: 'Debug' },
        { name: 'Info', code: 'Info' },
        { name: 'Error', code: 'Error' }
    ];

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.logsForm = this.formBuilder.group({
            message: ['', Validators.required],
            level: ['', Validators.required]
        });
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
        const logData = this.logsForm.value;
        // Logic to send logs goes here
        console.log('Logs submitted:', logData);
        this.logsForm.reset();
    }
}
