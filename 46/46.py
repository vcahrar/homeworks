import random

class dice:
    def __init__(self, side):
        self.side = side
    def print(self):
        print(self.side)
    def roll(self):
        return random.randint(1, self.side)

sevenside = dice(7)
sevenside.print()
sixside = dice(6)
sixside.print()
print(sevenside.roll())
class sixsided_die(dice):
    def __init__(self):
       super().__init__(6) 
newsixsidedie = sixsided_die()       
newsixsidedie.print()

Ints = [7, 0, 9, 8, 6, 5, 4, 3, 2, 1]
lastSortedPosition = [0]
while lastSortedPosition <= Ints:c
    print(lastSortedPosition)