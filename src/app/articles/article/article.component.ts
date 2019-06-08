import { Component, OnInit, Input } from "@angular/core";
import { Article } from "./../../shared/article.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ArticleService } from "src/app/shared/article.service";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  showPage: Boolean = false;

  @Input() article: Article;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params["id"];
    if (id) {
      this.article = this.findArticle(id);
      this.showPage = true;
    }
  }

  removeArticle(article: Article): void {
    this.articleService.removeArticle(article);
    this.router.navigate(["/"]);
  }

  editArticle(article: Article): void {
    this.router.navigate(["/articles", article.id, "edit"]);
  }

  private findArticle(id: Number): Article {
    return this.articleService.findArticleById(id);
  }
}
