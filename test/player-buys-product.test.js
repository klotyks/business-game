import { characters } from '../Character.js'
import Market from '../Market.js'
import Stuff from '../Stuff.js'

// Player buys product:

const player = characters[0]
const npc = characters[1]
const market = new Market()

market.enter(player)
console.log(market.showAllOffers())
console.log(market.showAvailableOffers())

npc.addStuff(new Stuff('electronic', 'laptop'))
npc.addStuff(new Stuff('electronic', 'smartphone'))
market.addOffer(npc.id, npc.stuffs[1].id, 200)
market.addOffer(npc.id, npc.stuffs[0].id, 100)

console.log(market.showAllOffers())
console.log(market.showAvailableOffers())

console.log('>', player.stuffs)
console.log('>', player.money)

const playerBoughtStuff = market.buyOfferByOfferId(
  market.showAvailableOffers()[0].id,
)

console.log('>', player.stuffs)
console.log('>', player.money)
