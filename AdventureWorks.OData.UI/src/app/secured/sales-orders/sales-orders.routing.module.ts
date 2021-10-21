import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlaceholderComponentComponent } from "../layout/components/placeholder-component/placeholder-component.component";
import { LayoutComponent } from "../layout/layout.component";
import { SalesOrderListComponent } from "./sales-order-list/sales-order-list.component";

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'sales-orders', component: PlaceholderComponentComponent, data: { breadcrumb: 'Sales orders' },
                children: [
                    { path: '', component: SalesOrderListComponent, data: { breadcrumb: 'Sales orders' } }
                ]
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SalesOrderRoutingModule { }