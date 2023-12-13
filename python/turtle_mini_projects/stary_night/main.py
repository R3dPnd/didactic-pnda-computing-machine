from starty_night import *
from random import *
from turtle import *

draw_sky()

for x in range(100):
    # Get the bounds of the window
    width = window_width()/2
    height = window_height()/2

    # Generate random numbers within the buonds of the screen
    xpos = randrange(-width, width)
    ypos = randrange(-height, height)

    # Generate a random size for the star
    star_size = randrange(0,5)

    #Draw the star
    draw_star(xpos, ypos, star_size)

done()