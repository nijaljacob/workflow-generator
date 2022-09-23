import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { DndModule } from 'ngx-drag-drop';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientCheckinComponent } from './client-checkin/client-checkin.component';
import { RecentActivitiesComponent } from './recent-activities/recent-activities.component';
import { ReviewLinkModalComponent } from './review-link-modal/review-link-modal.component';
import { WorkflowSidebarComponent } from './workflow-sidebar/workflow-sidebar.component';
import { ClientCheckinModalComponent } from './client-checkin-modal/client-checkin-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    TreeNodeComponent,
    NavbarComponent,
    ClientCheckinComponent,
    RecentActivitiesComponent,
    ReviewLinkModalComponent,
    WorkflowSidebarComponent,
    ClientCheckinModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DndModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
