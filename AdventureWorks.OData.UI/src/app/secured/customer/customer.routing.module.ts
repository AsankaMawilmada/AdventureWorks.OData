import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlaceholderComponentComponent } from "../layout/components/placeholder-component/placeholder-component.component";
import { LayoutComponent } from "../layout/layout.component";
import { CustomerListComponent } from "./customer-list/customer-list.component";

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'customers', component: PlaceholderComponentComponent, data: { breadcrumb: 'Customers' },
                children: [
                    { path: '', component: CustomerListComponent, data: { breadcrumb: 'Customers' } },
                    // { path: 'new', component: CandidateDetailsComponent, canActivate: [AuthGuard], data: { breadcrumb: 'New' } },
                    // { path: 'edit/:id', component: CandidateDetailsComponent, canActivate: [AuthGuard], data: { breadcrumb: 'Edit' } }
                ]
            }
        ]
    }
]
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class CustomerRoutingModule { }