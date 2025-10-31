import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { ChartDemo } from '@/pages/dashboard/chartdemo';
import { Notfound } from '@/pages/notfound/notfound';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [{ path: '', component: ChartDemo }]
    },
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' }
];
