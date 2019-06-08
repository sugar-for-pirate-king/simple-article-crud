import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ArticleService } from "src/app/shared/article.service";
import { Article } from "./../../shared/article.model";

@Component({
  selector: "app-edit-article",
  templateUrl: "./edit-article.component.html",
  styleUrls: ["./edit-article.component.css"]
})
export class EditArticleComponent implements OnInit {
  article: Article;
  @ViewChild("articleTitle") title: ElementRef;
  @ViewChild("articleBody") body: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params["id"];
    this.article = this.findArticle(id);
  }

  updateArticle() {
    let title = this.title.nativeElement.value;
    let body = this.body.nativeElement.value;
    this.article.title = title;
    this.article.body = body;
    this.router.navigate(["/articles", this.article.id]);
  }

  cancel() {
    this.router.navigate(["/articles", this.article.id]);
  }

  private findArticle(id: Number): Article {
    let article = this.articleService.findArticleById(id);
    return article;
  }
}
