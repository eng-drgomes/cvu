import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule, MatTableModule, MatTabsModule } from '@angular/material';

import { MembrosComponent } from './membros.component';

const routes = [
  {
    path: "membros",
    component: MembrosComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FuseSharedModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    MatDatepickerModule
  ],
  declarations: [
    MembrosComponent

  ],
  exports: [
    
  ]
})
export class MembrosModule { }
