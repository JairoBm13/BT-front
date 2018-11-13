import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
        'path': '',
        'component': ThemeComponent,
        'runGuardsAndResolvers': 'paramsChange',
        'children': [
            {
                'path': '',
                'redirectTo': 'contacts',
                'pathMatch': 'full'
            }
        ],
    },
    {
        'path': '**',
        'redirectTo': '404',
        'pathMatch': 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }
