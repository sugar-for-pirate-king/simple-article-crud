import { EventEmitter } from "@angular/core";
import { Article } from "./article.model";

export class ArticleService {
  private articles: Article[] = [];
  addedArticle = new EventEmitter<Article>();
  cacheId = 0;

  constructor() {
    let article1 = new Article("Chika dance", "This is body of chika dance");
    let article2 = new Article("Marumaru", "This is body of marumaru");
    this.addArticle(article1);
    this.addArticle(article2);
  }

  addArticle(article: Article) {
    article.id = this.getId();
    this.articles.unshift(article);
  }

  getId(): Number {
    this.cacheId += 1;
    return this.cacheId;
  }

  getArticles(): Article[] {
    return this.articles.slice();
  }
}
