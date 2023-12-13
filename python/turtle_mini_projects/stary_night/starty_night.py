from turtle import *

def draw_sky ():
    hideturtle()
    bgcolor("black")

def draw_star (xpos, ypos, star_size):
    color("white")
    penup()
    goto(xpos, ypos)
    pendown()
    dot(star_size)

