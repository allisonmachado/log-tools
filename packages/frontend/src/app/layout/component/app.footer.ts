import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `<div class="layout-footer">
        Family Budget App - Developed by
        <a href="https://github.com/allisonmachado" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Allison</a>
    </div>`
})
export class AppFooter {}
