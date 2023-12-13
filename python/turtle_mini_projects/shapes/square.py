from turtle import *

t = Turtle()

for i in range(10):
    print(i)
    for c in ['red', 'green', 'yellow', 'blue', 'purple', 'red', 'green', 'yellow', 'blue', 'purple']:
        t.color(c)
        t.forward(50)
        t.left(90)
    t.circle(50)
done()