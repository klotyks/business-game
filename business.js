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

  dropStuffById(stuffId) {
    const index = this.stuffs.findIndex(s => s.id === stuffId)
    if (index === -1) return null

    return this.stuffs.splice(index, 1)[0]
  }
}

class Stuff {
  constructor(kind, variant, price) {
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
    const offer = { id: randId(), ownerId, stuffId, price }
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
