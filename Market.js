import { getCharacterById } from './Character.js'
import { randId } from './randId.js'

export default class Market {
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
