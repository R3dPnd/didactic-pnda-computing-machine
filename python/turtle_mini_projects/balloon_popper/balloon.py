from turtle import *

inital_diameter = 40
diameter = inital_diameter
pop_diameter = 100

def draw_balloon ():
    global diameter
    color("red")
    dot(diameter)

def inflate_balloon ():
    global diameter
    global pop_diameter
    global inital_diameter

    if diameter >= pop_diameter:
        diameter = inital_diameter
        clear()
        color("blue")
        write("POP!")
    else:
        diameter += 10
        draw_balloon()

def balloon_popper():
    draw_balloon()
    onkey(inflate_balloon, "Up")
    listen()
    done()