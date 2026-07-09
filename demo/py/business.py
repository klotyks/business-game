class Player :
  def __init__(self, nickname, capital):
    self.nickname = nickname
    self.age = 0
    self.capital = capital
    self.stuffs = []
    
class Npc:
  def __init__(self, money, stuffs):
      self.money = money
      self.stuffs = stuffs

  def sell_stuff(self, kind, variant, counterparty):
      stuff = next(
        (s for s in self.stuffs if s.kind == kind and s.variant == variant), 
        None
      )
      

      if stuff and counterparty.capital >= stuff.price:
        self.money += stuff.price
        counterparty.capital -= stuff.price
        self.stuffs.remove(stuff)
        if hasattr(counterparty, 'stuffs'):
            counterparty.stuffs.append(stuff)
      else:
          print('такого стафа нет у нпс, или у игрока нехватает денег')
    

class Stuff:
  def __init__(self, kind, variant, price):
    self.kind = kind
    self.variant = variant
    self.price = price
    


player = Player('Elon', 1000)
stuff1 = Stuff('laptop', 'asus', 3000)
stuff2 = Stuff('smartphone', 'samsung', 300)
npc1 = Npc(0, [stuff1, stuff2])