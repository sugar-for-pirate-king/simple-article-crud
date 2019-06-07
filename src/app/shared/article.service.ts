import { EventEmitter } from "@angular/core";
import { Article } from "./article.model";
import { getTranslationForTemplate } from "@angular/core/src/render3/i18n";

export class ArticleService {
  private articles: Article[] = [];
  addedArticle = new EventEmitter<Article>();

  constructor() {
    let article1 = new Article("Chika dance", "This is body of chika dance");
    let article2 = new Article("Marumaru", "This is body of marumaru");
    this.addArticle(article1);
    this.addArticle(article2);
  }

  addArticle(article: Article) {
    article.id = this.getRandomId();
    this.articles.unshift(article);
  }

  getRandomId(): Number {
    let randomNumber = Math.random() * 100000000;
    return Math.round(randomNumber);
  }

  getArticles(): Article[] {
    return this.articles.slice();
  }
}
