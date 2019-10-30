import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule, MatTableModule, MatTabsModule } from '@angular/material';

import { NgxDropzoneModule } from 'ngx-dropzone';


import { ParceirosComponent } from './parceiros.component';

const routes = [
  {
    path: "parceiros",
    component: ParceirosComponent
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
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    NgxDropzoneModule
  ],
  declarations: [
    ParceirosComponent
  ]
})
export class ParceirosModule { }
