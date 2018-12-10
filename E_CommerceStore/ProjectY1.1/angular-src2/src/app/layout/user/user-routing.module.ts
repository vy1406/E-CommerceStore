import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "app/shared";

const routes: Routes = [
    {
        path: '', children: [
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
            { path: 'wishlist', loadChildren: './wishlist/wishlist.module#WishlistModule', canActivate: [AuthGuard] },
            { path: 'purchase-history', loadChildren: './purchase-history/purchase-history.module#PurchaseHistoryModule', canActivate: [AuthGuard] },
            { path: 'history-item/:id', loadChildren: './history-item/history-item.module#HistoryItemModule', canActivate: [AuthGuard] },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
