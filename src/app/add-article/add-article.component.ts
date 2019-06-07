import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Article } from "../shared/article.model";
import { ArticleService } from "../shared/article.service";

@Component({
  selector: "app-add-article",
  templateUrl: "./add-article.component.html",
  styleUrls: ["./add-article.component.css"]
})
export class AddArticleComponent implements OnInit {
  @ViewChild("articleTitle") articleTitle: ElementRef;
  @ViewChild("articleBody") articleBody: ElementRef;

  constructor(private router: Router, private articleService: ArticleService) {}

  ngOnInit() {}

  addArticle(): void {
    let title = this.articleTitle.nativeElement.value;
    let body = this.articleBody.nativeElement.value;
    let article = new Article(title, body);
    this.articleService.addArticle(article);
    this.articleService.addedArticle.emit(article);
    this.router.navigate(["/"]);
  }

  cancel(): void {
    this.router.navigate(["/"]);
  }
}
