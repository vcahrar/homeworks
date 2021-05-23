import random

name = 'AStrauss'
# Fake Address
address = '105 Apolo Estates, New York, NY 00011'
siblings = ['Rakelle', 'Bertha', 'Elvira', 'Camdan']
text = '{}'
print(text.format(siblings[0:4]))
length = (name[0:7:3])
print(length)
thirn = siblings[-2]
print(thirn[1:-1])
for x in range(1, 10):
    for y in range(1, 10):
        print(x*y)
        usersguess = 0
        computerchoice = random.randint(0,9)
        while usersguess != computerchoice:
            usersguess = int(0)
            num = input()
            usersguess = int(num)
            print("computer choice is ", computerchoice)
            print('Guess the number!')
        print('You Won!!')
