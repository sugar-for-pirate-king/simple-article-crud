import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AddArticleComponent } from "./add-article/add-article.component";
import { ArticlesComponent } from "./home/articles/articles.component";
import { ArticleService } from "./shared/article.service";
import { ArticleComponent } from "./articles/article/article.component";
import { EditArticleComponent } from "./articles/edit-article/edit-article.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "articles/new", component: AddArticleComponent },
  { path: "articles/:id", component: ArticleComponent },
  { path: "articles/:id/edit", component: EditArticleComponent },
  { path: "404", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/404" }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AddArticleComponent,
    ArticlesComponent,
    ArticleComponent,
    EditArticleComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
