import { randId } from './randId.js'

export default class Stuff {
  constructor(kind, variant) {
    this.id = randId()
    this.kind = kind
    this.variant = variant
  }
}

export const stuffs = [
  new Stuff('electronic', 'laptop'),
  new Stuff('electronic', 'smartphone'),
  new Stuff('furniture', 'chair'),
  new Stuff('clothes', 'Ralph Lauren Polo Miami'), // Polo Ralph Lauren
  new Stuff('clothes', 'Gymshark Onyx v5 Hoodie'),
  new Stuff('electronic', 'headphones'),
  new Stuff('shoes', 'nike x travis scott'),
  new Stuff('jewelry', 'ring'),
  new Stuff('fragrance', 'creed uventus absolut'),
  new Stuff('electronic', 'mouse'),
]
