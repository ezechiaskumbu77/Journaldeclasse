import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Home
  { path: '', loadChildren: () => import('./components/pages/Home/Home.module').then(m => m.HomeModule), data: { breadcrumb: 'Accueil' } },
  // { path: 'Home-v2', loadChildren: () => import('./components/pages/Home-v2/Home-v2.module').then(m => m.HomeV2Module), data: { breadcrumb: 'Accueil' } },
  // { path: 'Home-v3', loadChildren: () => import('./components/pages/Home-v3/Home-v3.module').then(m => m.HomeV3Module), data: { breadcrumb: 'Accueil' } },
  // Pages
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.aboutModule), data: { breadcrumb: 'Apropos de nous' } },
  // { path: 'team', loadChildren: () => import('./components/pages/team/team.module').then(m => m.TeamModule), data: { breadcrumb: 'Notre équpe' } },
  // { path: 'team-details/:id', loadChildren: () => import('./components/pages/team-details/team-details.module').then(m => m.TeamDetailsModule), data: { breadcrumb: 'Equipe en détail' } },
  // { path: 'careers', loadChildren: () => import('./components/pages/careers/careers.module').then(m => m.CareersModule), data: { breadcrumb: 'Carriere' } },
  // { path: 'faqs', loadChildren: () => import('./components/pages/faqs/faqs.module').then(m => m.FaqsModule), data: { breadcrumb: "FAQ's" } },
  // Services
  { path: 'services', loadChildren: () => import('./components/pages/services/services.module').then(m => m.ServicesModule), data: { breadcrumb: 'Nos services' } },
  { path: 'services-v2', loadChildren: () => import('./components/pages/services-v2/services-v2.module').then(m => m.ServicesV2Module), data: { breadcrumb: 'Nos services' } },
  // { path: 'service-details/:id', loadChildren: () => import('./components/pages/service-details/service-details.module').then(m => m.ServiceDetailsModule), data: { breadcrumb: 'Services Détailés' } },
  // Blog
  //  { path: 'blog/cat/:catId', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: 'Blog Grid' } },
  //  { path: 'blog/tag/:tagId', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: 'Blog Grid' } },
  //  { path: 'blog/author/:authorId', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: 'Blog Grid' } },
  //  { path: 'blog-grid', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: 'Blog Grid' } },
  //  { path: 'blog-standard', loadChildren: () => import('./components/pages/blog-standard/blog-standard.module').then(m => m.BlogStandardModule), data: { breadcrumb: 'Blog Standard' } },
  //  { path: 'blog-details/:id', loadChildren: () => import('./components/pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule), data: { breadcrumb: 'Blog Details' } },
  // Portfolio
  { path: 'portfolio', loadChildren: () => import('./components/pages/portfolio/portfolio.module').then(m => m.PortfolioModule), data: { breadcrumb: 'Evenements' } },
  // { path: 'portfolio-v2', loadChildren: () => import('./components/pages/portfolio-v2/portfolio-v2.module').then(m => m.PortfolioV2Module), data: { breadcrumb: 'Portfolio' } },
  { path: 'portfolio-details/:id', loadChildren: () => import('./components/pages/portfolio-details/portfolio-details.module').then(m => m.PortfolioDetailsModule), data: { breadcrumb: 'Enenements-Détails' } },
  // Shop
  // { path: 'shop/cat/:catId', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: 'Shop' } },
  // { path: 'shop/tag/:tagId', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: 'Shop' } },
  // { path: 'shop', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: 'Shop' } },
  // { path: 'product-details/:id', loadChildren: () => import('./components/pages/product-details/product-details.module').then(m => m.ProductDetailsModule), data: { breadcrumb: 'Shop Details' } },
  // Contact
  { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule), data: { breadcrumb: 'Contact' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
