import type {EditableEntity} from '@/utils/types'
import type {Article} from './types'

export type UpdateArticleRequest = EditableEntity<Article>

export type FindOneArticleResponse = Article

export type FindAllArticlesResponse = {
  data: Article[]
}
