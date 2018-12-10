import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AdminGuard } from "app/shared";

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: '', loadChildren: './user/user-routing.module#UserRoutingModule' },
            { path: 'admin-tools', loadChildren: './Admin tools/admin-tools.module#AdminToolsModule', canActivate: [AdminGuard] },
            { path: 'show-products/:searchWord', loadChildren: './show-products/show-products.module#ShowProductsModule' },
            { path: 'show-categories', loadChildren: './show-categories/show-categories.module#ShowCategoriesModule' },
            { path: 'advanced-search', loadChildren: './advanced-search/advanced-search.module#AdvancedSearchModule' },
            { path: 'category-products/:categoryName', loadChildren: './category-products/category-products.module#CategoryProductsModule' },
			{ path: 'cart', loadChildren: './cart/cart.module#CartModule' },
		]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
