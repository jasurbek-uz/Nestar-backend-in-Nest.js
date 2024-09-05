import { Resolver } from '@nestjs/graphql';
import { BoardArticle } from "../../libs/dto/board-article/board-article";
import { BoardArticleService } from "./board-article.service";

@Resolver()
export class BoardArticleResolver {
  constructor(private readonly boardArticleService: BoardArticleService){}
}
