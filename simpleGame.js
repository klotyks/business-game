const randId = () => crypto.randomUUID().split('-').at(1)

class Stuff {
  constructor(kind, variant) {
    this.id = randId()
    this.kind = kind
    this.variant = variant
  }
}

// const stuffs = [
//   new Stuff('electronic', 'laptop'),
//   new Stuff('electronic', 'smartphone'),
//   new Stuff('furniture', 'chair'),
//   new Stuff('clothes', 'Ralph Lauren Polo Miami'),
//   new Stuff('clothes', 'Gymshark Onyx v5 Hoodie'),
//   new Stuff('electronic', 'headphones'),
//   new Stuff('shoes', 'nike x travis scott'),
//   new Stuff('jewelry', 'ring'),
//   new Stuff('fragrance', 'creed uventus absolut'),
//   new Stuff('electronic', 'mouse'),
// ]

class Character {
  constructor(nickname, money) {
    this.id = randId()
    this.nickname = nickname
    this.money = money
    this.stuffs = []
  }

  addStuff(stuff) {
    this.stuffs.push(stuff)
  }

  dropStuffById(stuffId) {
    const index = this.stuffs.findIndex(s => s.id === stuffId)
    if (index === -1) return null
    return this.stuffs.splice(index, 1)[0]
  }
}

class Market {
  constructor() {
    this.offers = []
    this.currentCharacter = null
  }

  enter(character) {
    this.currentCharacter = character
  }

  showAllOffers() {
    return this.offers
  }

  showAvailableOffers() {
    return this.offers.filter(o => o.cost <= this.currentCharacter.money)
  }

  buyOfferByOfferId(offerId) {
    if (!this.currentCharacter) {
      return false
    }
    return this.dealByOfferId(offerId, this.currentCharacter)
  }

  leave() {
    this.currentCharacter = null
  }

  addOffer(ownerId, stuffId, cost) {
    // esli y vlodelca takoi stuff id
    const offer = { id: randId(), ownerId, stuffId, cost }
    this.offers.push(offer)
  }

  getOfferById(offerId) {
    const offerIndex = this.offers.findIndex(o => o.id === offerId)
    if (offerIndex === -1) return false
    const offer = this.offers[offerIndex]
    return offer
  }

  // низкоуровневый метод
  dealByOfferId(offerId, buyer) {
    const offer = this.getOfferById(offerId)
    if (!offer) return false
    const seller = getCharacterById(offer.ownerId)
    if (!seller) return false
    if (buyer.money < offer.cost) return false
    const stuff = seller.dropStuffById(offer.stuffId)
    if (!stuff) return false
    buyer.money -= offer.cost
    seller.money += offer.cost
    buyer.addStuff(stuff)
    this.offers = this.offers.filter(o => o.id !== offer.id)
    return true
  }
}

// const characters = [new Character('Rembo', 101), new Character('npc', 9000)]
function getCharacterById(id) {
  return characters.find(n => n.id === id)
}

// const player = characters[0]
// const npc = characters[1]
// const market = new Market()

// npc.addStuff(stuffs[0])
// npc.addStuff(new Stuff('electronic', 'laptop'))
// npc.addStuff(new Stuff('electronic', 'smartphone'))
// npc.addStuff(new Stuff('fragrance', 'parfum de marly althair'))

// market.addOffer(npc.id, stuffs[0].id, 100)
// console.log(market.showAllOffers())

// market.enter(player)
// console.log(market.showAvailableOffers())

// const status = market.buyOfferByOfferId(market.showAllOffers()[0].id)
// console.log('status: ', status)
// console.log(market.showAllOffers())

// console.log(npc)
// console.log(player.stuffs)

// теперь купленный ноутбук продаём подороже. наценку себе в карман
// размещаем офер с тем же ноутбуком и указываем стоимость, какую захотим
// нпц выкупает этот ноутбук
// а потом автоматически настроим нпц чтоб он размещал оферы и выкупал оферы
// console.log(player.stuffs)
// console.log(market.offers)
// market.addOffer(player.id, stuffs[0].id, 159)
// console.log(market.offers)
// console.log(player.stuffs)
// market.enter(npc)
// console.log('>', npc.stuffs)
// market.buyOfferByOfferId(market.offers[0].id)
// console.log('>', npc.stuffs)
// console.log(player.stuffs)

// console.log(player.stuffs)
//////////////
//The game is played here by players:

// const characters = [new Character('Rembo', 101), new Character('npc', 9000)]
// const player = characters[0]
// const npc = characters[1]
// const market = new Market()

// console.log('>', player.stuffs)

// market.enter(player)
// console.log(market.showAllOffers())
// console.log(market.showAvailableOffers())

// npc.addStuff(new Stuff('electronic', 'laptop'))
// npc.addStuff(new Stuff('electronic', 'smartphone'))
// market.addOffer(npc.id, npc.stuffs[1].id, 200)
// market.addOffer(npc.id, npc.stuffs[0].id, 100)

// console.log(market.showAllOffers())
// console.log(market.showAvailableOffers())

// console.log('>', player.stuffs)

// const playerBoughtStuff = market.buyOfferByOfferId(
//   market.showAvailableOffers()[0].id,
// )

// console.log('>', player.stuffs)

// const leaveTheMarket = market.leave(player)

//////////////////

const characters = [new Character('Rembo', 101), new Character('npc', 9000)]
const player = characters[0]
const npc = characters[1]
const market = new Market()

console.log(player.stuffs)

market.enter(player)
player.addStuff(new Stuff('electronic', 'smartphone'))
market.addOffer(player.id, player.stuffs[0].id, 228)
console.log(player.stuffs)
market.leave(player)

market.enter(npc)
console.log(player.money)
const npcBoughtStuff = market.buyOfferByOfferId(
  market.showAvailableOffers()[0].id,
)
market.leave(npc)

market.enter(player)
market.leave(player)
console.log(player.money)
console.log(player.stuffs)
