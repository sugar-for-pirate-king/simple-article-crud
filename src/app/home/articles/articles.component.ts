import { Component, OnInit } from "@angular/core";
import { Article } from "./../../shared/article.model";
import { ArticleService } from "src/app/shared/article.service";

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.css"]
})
export class ArticlesComponent implements OnInit {
  articles: Article[];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }
}
