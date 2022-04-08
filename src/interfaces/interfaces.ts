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