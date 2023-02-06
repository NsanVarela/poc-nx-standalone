import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRouteComponent } from './cart-route/cart-route.component';
import {SharedUiModule} from "@nx-standalone/shared/ui";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [CartRouteComponent],
  imports: [
      CommonModule,
      SharedUiModule,
      RouterModule.forChild([
        {
          path: '',
          component: CartRouteComponent,
        }
      ])
  ],
})
export class CartModule {}
