import { RootObjectFeedList } from "@app/utils/interfaces/list"
import recipeAxios from "@utils/libs/axios"
import { AxiosResponse } from "axios"


interface IFeedListReq {
  limit?: string | number,
  start?: string | number,
  tag?: string
}

const initReq: IFeedListReq = {
  limit: '18', start: '0', tag: 'list.recipe.popular'
}

const feedListNetwork = (req: IFeedListReq = initReq): Promise<AxiosResponse<RootObjectFeedList>> => {
  return recipeAxios.get('/feeds/list', {
    method: "GET",
    params: {
      ...req
    }
  })
}

export default feedListNetwork