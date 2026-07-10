const randId = () => crypto.randomUUID().split('-').at(1)

class Stuff {
  constructor(kind, variant) {
    this.id = randId()
    this.kind = kind
    this.variant = variant
  }
}

const stuffs = [
  new Stuff('electronic', 'laptop'),
  new Stuff('electronic', 'smartphone'),
  new Stuff('furniture', 'chair'),
  new Stuff('clothes', 'Ralph Lauren Polo Miami'),
  new Stuff('clothes', 'Gymshark Onyx v5 Hoodie'),
  new Stuff('electronic', 'headphones'),
  new Stuff('shoes', 'nike x travis scott'),
  new Stuff('jewelry', 'ring'),
  new Stuff('fragrance', 'creed uventus absolut'),
  new Stuff('electronic', 'mouse'),
]

class Character {
  constructor(nickname, money) {
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

  showAvailableOffers() {}

  buyOfferById(id) {
    if (!this.currentCharacter) {
      return false
    }
    return this.dealByOfferId(id, this.currentCharacter)
  }

  leave() {
    this.currentCharacter = null
  }

  addOffer(ownerId, stuffId, cost) {
    const offer = { id: randId(), ownerId, stuffId, cost }
    this.offers.push(offer)
  }

  findOfferById(offerId) {
    const offerIndex = this.offers.findIndex(o => o.id === offerId)
    if (offerIndex === -1) return false
    const offer = this.offers[offerIndex]
    return offer
  }

  // низкоуровневый метод
  dealByOfferId(offerId, buyer) {
    const offer = this.findOfferById(offerId)
    if (!offer) return false
    const seller = findCharacterById(offer.ownerId)
    if (!seller) return false
    if (buyer.money < offer.cost) return false
    const stuff = seller.dropStuffById(offer.stuffId)
    if (!stuff) return false
    buyer.money -= offer.cost
    seller.money += offer.cost
    buyer.addStuff(stuff)
    this.offers.splice(offerIndex, 1)
    return true
  }
}

const characters = [new Character('Rembo', 900), new Character('npc', 9000)]
function findCharacterById(id) {
  return characters.find(n => n.id === id)
}

const player = characters[0]
const npc = characters[1]
const market = new Market()

npc.addStuff(stuffs[0])

market.enter(player)
