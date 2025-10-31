import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Notfound } from '@/pages/notfound/notfound';
import { LogTools } from '@/pages/dashboard/logtools';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [{ path: '', component: LogTools }]
    },
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' }
];
