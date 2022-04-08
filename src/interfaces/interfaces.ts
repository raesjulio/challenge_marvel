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