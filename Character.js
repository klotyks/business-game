import { randId } from './randId.js'

export default class Character {
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

export const characters = [
  new Character('Rembo', 101),
  new Character('npc', 9000),
]

export function getCharacterById(id) {
  return characters.find(n => n.id === id)
}
