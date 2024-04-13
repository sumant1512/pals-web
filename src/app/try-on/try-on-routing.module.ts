import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TryOnComponent } from './try-on.component';

const routes: Routes = [{ path: '', component: TryOnComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TryOnRoutingModule {}
