import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicUsageComponent } from './components/basic-usage/basic-usage.component';

const routes: Routes = [
    { path: 'basic-usage', component: BasicUsageComponent },
    { path: '**', redirectTo: 'basic-usage' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
