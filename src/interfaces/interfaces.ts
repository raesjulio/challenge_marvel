export interface ICharacters {
    id: string
    name: string
    description: string
    thumbnail: {
      extension: string
      path: string
    }
    select?: boolean
  }


 export interface ICharactersResponse {
  attributionHTML: string
  data: {
    results: []
    offset: String
    total:String
    limit: String
  }
}
export type TCharacterList = {
  data:{
      results: [ICharacters]
  }
}
export interface ICharacters {
  id: string
  name: string
  description: string
  thumbnail: {
      extension: string
      path: string
  }
  select?: boolean
}
export type IAcount=[string]
export interface IComic {
  id: string
  description: string
  title: string
  pageCount: Number
  dates: [{
      date: string
      type: string
  }]
  prices: [{
      type: string
      price: string
  }]
  thumbnail: {
      extension: string
      path: string
  }
}
export interface IGetComic {
  data: ICharactersResponse | undefined;
  isFetching: boolean;
  error: boolean
}