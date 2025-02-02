import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { heroimg } from './header'
import { category } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, heroimg, category],
}
