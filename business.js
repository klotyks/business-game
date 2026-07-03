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

  // dropStaffById(stuffId) {
  //   const stuff = this.stuffs.find(s => s.id === stuffId)
  //   this.stuffs = this.stuffs.filter(s => s.id !== stuffId)
  //   return stuff
  // }
}

class Stuff {
  constructor(kind, variant, price) {
    this.id = randId()
    this.kind = kind
    this.variant = variant
  }
}

class Market {
  constructor() {
    this.offers = []
    this.lots = []
    this.offersLimit = 9
  }

  addOffer(ownerId, stuffId, price) {
    const offer = { id: randId(), ownerId, price, stuffId }
    this.offers.push(offer)
  }

  getMarketVolume() {
    return this.offers.reduce((acc, item) => acc + o.price, 0)
  }

  dealByOfferId(offerId, buyer) {
    const offer = this.offers.find(o => o.id === offerId)
    if (!offer) return
    if (buyer.money >= offer.price) {
      buyer.money -= offer.price
    }
  }
}
