const randId = () => crypto.randomUUID().split('-').at(1)

class Npc {
  constructor(money) {
    this.id = randId()
    this.money = money
    this.stuffs = []
  }

  addStuff(stuff) {
    this.stuffs.push(stuff)
  }

  // throw
  dropStuffById(stuffId) {
    const index = this.stuffs.findIndex(s => s.id === stuffId)
    if (index === -1) return null

    return this.stuffs.splice(index, 1)[0]
  }
}

class Stuff {
  constructor(kind, variant) {
    this.id = randId()
    this.kind = kind
    this.variant = variant
  }
}

class Market {
  constructor(npcs) {
    this.npcs = npcs
    this.offers = []
    this.offersLimit = 9
  }

  addOffer(ownerId, stuffId, price) {
    const offer = { id: randId(), ownerId, stuffId, price } // price to cost
    this.offers.push(offer)
  }

  dealByOfferId(offerId, buyer) {
    const offerIndex = this.offers.findIndex(o => o.id === offerId)
    if (offerIndex === -1) return false
    const offer = this.offers[offerIndex]
    if (buyer.money < offer.price) return false

    const seller = this.npcs.find(n => n.id === offer.ownerId)
    if (!seller) return false

    const stuff = seller.dropStuffById(offer.stuffId)
    if (!stuff) return false

    buyer.money -= offer.price
    seller.money += offer.price

    buyer.addStuff(stuff)

    this.offers.splice(offerIndex, 1)

    return true
  }
}

const stuffA = new Stuff('electronic', 'laptop')
const stuffB = new Stuff('electronic', 'smartphone')
const stuffC = new Stuff('furniture', 'chair')
const stuffD = new Stuff('clothes', 'Ralph Lauren Polo Miami')
const stuffE = new Stuff('clothes', 'Gymshark Onyx v5 Hoodie')
const stuffF = new Stuff('electronic', 'headphones')
const stuffG = new Stuff('shoes', 'nike x travis scott')
const stuffH = new Stuff('jewelry', 'ring')
const stuffI = new Stuff('fragrance', 'creed uventus absolut')
const stuffJ = new Stuff('electronic', 'mouse')

const npc1 = new Npc(25000)
const npc2 = new Npc(10000)
const npc3 = new Npc(150000)

const market = new Market([npc1, npc2, npc3])
npc1.addStuff(stuffA)
npc3.addStuff(stuffD)
npc2.addStuff(stuffE)

market.addOffer(npc1.id, stuffA.id, 600)
market.addOffer(npc3.id, stuffD.id, 5000)
market.addOffer(npc2.id, stuffE.id, 10000)
console.log(market.offers)

market.dealByOfferId(market.offers[0].id, npc2)
market.dealByOfferId(market.offers[1].id, npc2)
market.dealByOfferId(market.offers[2].id, npc3)
console.log(market.offers)
console.log(npc2.stuffs)

// a b c d
