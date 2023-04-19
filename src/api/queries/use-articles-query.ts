import {useQuery} from '@tanstack/react-query'
import articleService from '../services/article/article-service'
import type {QueryFunctionContext} from '@tanstack/react-query'
import type {Article} from '../services/article/types'

const fetchOneArticle = ({queryKey}: QueryFunctionContext<[string, string]>) =>
  articleService.findOne(queryKey[1])

export function useFindOneArticleQuery(id: Article['id']) {
  return useQuery({
    queryKey: ['articles', id],
    queryFn: fetchOneArticle,
  })
}

export function useFindAllArticleQuery() {
  return useQuery({
    queryKey: ['articles'],
    queryFn: articleService.findAll,
  })
}
