import {createApiInstance} from '../../client'
import type {FindOneArticleResponse, UpdateArticleRequest} from './dto'
import type {Article} from './types'

type Id = Article['id']

const api = createApiInstance({
  prefix: 'articles',
})

const articleService = {
  findOne(id: Id) {
    return api.get<FindOneArticleResponse>(id).then(({data}) => data)
  },
  findAll() {
    api.get('articles').then(({data}) => data)
  },
  update(req: UpdateArticleRequest) {
    api.patch(`articles/${req.id}`, req).then(({data}) => data)
  },
  remove(id: Id) {
    api.delete(id).then(({data}) => data)
  },
}

export default articleService
