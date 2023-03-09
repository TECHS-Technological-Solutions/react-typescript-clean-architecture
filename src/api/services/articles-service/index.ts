import {AxiosResponse} from 'axios'
import {EditableEntity} from '../../../utils/types'
import {createApiInstance} from '../../client'
import {IMessageOnly} from '../../types'
import {IArticle} from './types'

type FindOneResponse = IArticle
type FindAllResponse = {
  data: IArticle[]
}
type UpdateRequest = EditableEntity<IArticle>
type UpdateResponse = IArticle
type DeleteResponse = IMessageOnly
type Id = IArticle['id']

const api = createApiInstance({
  prefix: 'articles',
})

const findOne = (id: Id) => api.get<FindOneResponse>(id).then(({data}) => data)
const findAll = () => api.get<FindAllResponse>('/').then(({data}) => data)

const update = (inputs: IArticle) =>
  api
    .patch<UpdateRequest, AxiosResponse<UpdateResponse>>(inputs.id, inputs)
    .then(({data}) => data)

const remove = (id: Id) => api.delete<DeleteResponse>(id).then(({data}) => data)

const articleService = {
  findOne,
  findAll,
  remove,
  update,
}

export default articleService
