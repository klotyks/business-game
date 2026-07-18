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
