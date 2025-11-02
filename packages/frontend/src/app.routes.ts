import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Notfound } from '@/pages/notfound/notfound';
import { LogTools } from '@/pages/dashboard/logtools';
import { Documentation } from '@/pages/documentation/documentation';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: LogTools },
            { path: 'documentation', component: Documentation }
        ]
    },
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' }
];
