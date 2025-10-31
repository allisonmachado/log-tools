import { Component } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';

@Component({
    selector: 'app-log-tools',
    standalone: true,
    imports: [InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule],
    template: `<p-fluid>
        <div class="flex mt-8">
            <div class="card flex flex-col gap-6 w-full">
                <div class="font-semibold text-xl">Send Logs</div>
                <div class="flex flex-col gap-6">
                    <label for="message">Record Message</label>
                    <input pInputText id="message" type="text" />
                </div>

                <div class="flex flex-col gap-6">
                    <label for="level">Severity Level</label>
                    <p-select id="level" [(ngModel)]="selectedLevel" [options]="logLevels" optionLabel="name" placeholder="Select One" class="w-full"></p-select>
                </div>

                <hr />

                <div class="flex flex-col gap-6">
                    <div class="flex flex-wrap gap-3">
                        <p-button label="Send" />
                        <p-button label="Clear" severity="secondary" />
                    </div>
                </div>
            </div>
        </div>
    </p-fluid>`
})
export class LogTools {
    logLevels = [
        { name: 'Debug', code: 'Debug' },
        { name: 'Info', code: 'Info' },
        { name: 'Error', code: 'Error' }
    ];

    selectedLevel = null;
}
