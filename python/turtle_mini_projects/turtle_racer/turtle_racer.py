from turtle import *

move_distance = 10
screen_width = window_width()
screen_height = window_height()
curr_x_pos = 0
curr_y_pos = 0
curr_angle = 0

def create_boad():
    global screen_width
    global screen_height
    bgcolor("yellow")

    color("blue")
    penup()
    goto(screen_width*.2,screen_height/2)
    pendown()
    begin_fill()
    goto(screen_width/2 ,screen_height/2)
    goto(screen_width/2 ,-screen_height/2)
    goto(screen_width*.2,-screen_height/2)
    end_fill()

def wait_for_input():
    onkey(inflate_balloon, "Up")
    listen()

def go_to_start():
    global screen_width
    global screen_height
    global curr_x_pos
    global curr_y_pos
    global curr_angle

    curr_angle = 90
    curr_x_pos = -screen_width/2 + 10
    curr_y_pos = -screen_height/2 + 10

    penup()
    goto(curr_x_pos,  curr_y_pos)
    color("green")
    shape("turtle")
    pendown()

def move_up():
    move("Up")
def move_right():
    move("Right")
def move_down():
    move("Down")
def move_left():
    move("Left")

def move(direction):
    global move_distance
    global curr_x_pos
    global curr_y_pos

    match direction:
        case "Up":
            curr_y_pos += move_distance
            setheading(90)
            goto(curr_x_pos, curr_y_pos)
        case "Right":
            curr_x_pos += move_distance
            setheading(0)
            goto(curr_x_pos, curr_y_pos)
        case "Down":
            curr_y_pos -= move_distance
            setheading(180)
            goto(curr_x_pos, curr_y_pos)
        case "Left":
            curr_x_pos -= move_distance
            setheading(270)
            goto(curr_x_pos, curr_y_pos)

    check_goal()

def check_goal():
    global curr_x_pos
    print(curr_x_pos)
    print(screen_width*.2)
    if(curr_x_pos > (screen_width*.2)):
        penup()
        goto(0,0)
        pendown()
        color("white")
        write("You win!!")

def start_game():
    create_boad()
    color("brown")
    go_to_start()
    listen()
    onkey(move_up, "Up")
    onkey(move_right, "Right")
    onkey(move_down, "Down")
    onkey(move_left, "Left")
    done()