import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { aboutRoutingModule } from './about-routing.module';
import { aboutComponent } from './about.component';
import { SharedModule } from '../../shared/shared.module';
import { abouttextComponent } from './abouttext/abouttext.component';
import { ServiceComponent } from './service/service.component';
import { TabsComponent } from './tabs/tabs.component';
import { VideoComponent } from './video/video.component';
import { TestimonialsComponent } from './testimonials/testimonials.component'


@NgModule({
  declarations: [aboutComponent, abouttextComponent, ServiceComponent, TabsComponent, VideoComponent, TestimonialsComponent],
  imports: [
    CommonModule,
    aboutRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule
  ]
})
export class aboutModule { }
