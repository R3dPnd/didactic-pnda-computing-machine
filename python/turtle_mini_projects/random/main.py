from random import *
from turtle import *

def move_and_turn (distance, angle):
    forward(distance)
    right(angle)

# for i in range(100):
#     move_and_turn(randrange(20,100),randrange(0,360))
for x in range(100):
    for i in range(x):
        move_and_turn(x*10,360/x)
done()