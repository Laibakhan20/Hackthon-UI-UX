import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { heroimg } from './header'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, heroimg],
}
