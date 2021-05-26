class Vehicle:
    def __init__(self, color):
        
        self._color = color

    def go(self, speed):
        self._speed = speed
        print(f'Now going at speed {self._speed} mph')

    def print(self):
        print(f'the color is {self._color} and the speed is  {self._speed} ')


class Plane(Vehicle):
    def go(self, speed):
        self._speed = speed
        print(f'Now Flying at speed {self._speed} mph')


boing = Plane('white')
camary = Vehicle('grey')
camary.go(50)
boing.go(1000)
camary.print()
boing.print()

for num in range(1, 101):
    if num % 3 == 0 and num % 5 == 0:
        print("fizz buzz")
    elif num % 3 == 0:
        print("fizz")
    elif num % 5 == 0:
        print("buzz")
    else:
        print(num)

