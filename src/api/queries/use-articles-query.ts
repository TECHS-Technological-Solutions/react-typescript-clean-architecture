import {QueryFunctionContext, useQuery} from '@tanstack/react-query'
import articleService from '../services/articles-service'
import {IArticle} from '../services/articles-service/types'

const fetchOneArticle = ({queryKey}: QueryFunctionContext<[string, string]>) =>
  articleService.findOne(queryKey[1])

export function useFindOneArticleQuery(id: IArticle['id']) {
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
