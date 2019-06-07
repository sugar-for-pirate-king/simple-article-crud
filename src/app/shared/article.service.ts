import { EventEmitter } from "@angular/core";
import { Article } from "./article.model";

export class ArticleService {
  private articles: Article[] = [];
  addedArticle = new EventEmitter<Article>();
  removedArticle = new EventEmitter<Article[]>();
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

  removeArticle(article: Article): void {
    let index = null;
    this.articles.forEach((a, i) => {
      console.log(i);
      if (a.id === article.id) {
        index = i;
      }
    });
    if (index != null) {
      this.articles.splice(index, 1);
      this.removedArticle.emit(this.articles);
      console.log(`deleted on ${index}`);
    }
  }

  getId(): Number {
    this.cacheId += 1;
    return this.cacheId;
  }

  getArticles(): Article[] {
    return this.articles.slice();
  }

  findArticleById(id: Number): Article {
    let foundArticle = null;
    this.articles.forEach(article => {
      if (article.id == id) {
        foundArticle = article;
      }
    });
    return foundArticle;
  }
}
