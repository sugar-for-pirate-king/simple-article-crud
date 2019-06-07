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

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "articles/new", component: AddArticleComponent },
  { path: "articles/:id", component: ArticleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AddArticleComponent,
    ArticlesComponent,
    ArticleComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
