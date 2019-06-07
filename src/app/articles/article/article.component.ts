import { Component, OnInit, Input } from "@angular/core";
import { Article } from "./../../shared/article.model";
import { ActivatedRoute } from "@angular/router";
import { ArticleService } from "src/app/shared/article.service";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params["id"];
    if (id) {
      this.article = this.findArticle(id);
    }
  }

  private findArticle(id: Number): Article {
    let articles = this.articleService.getArticles();
    let foundArticle = null;
    articles.forEach(article => {
      if (article.id == id) {
        foundArticle = article;
      }
    });
    return foundArticle;
  }
}
