import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { MenuItem } from 'primeng/api'; //api
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoaderComponent } from './loader/loader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { PageUnderBuildComponent } from './page-under-build/page-under-build.component';
import { AwardsComponent } from './awards/awards.component';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { DatacardComponent } from './datacard/datacard.component';
import { ProjectsComponent } from './projects/projects.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { MentorComponent } from './mentor/mentor.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoaderComponent,
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
    PageUnderBuildComponent,
    AwardsComponent,
    DatacardComponent,
    ProjectsComponent,
    AchievementsComponent,
    VolunteerComponent,
    MentorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TimelineModule,
    CardModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
