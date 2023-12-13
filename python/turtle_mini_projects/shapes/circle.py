from turtle import *

t = Turtle()

for i in range(10):
    print(i)
    for c in ['red', 'green', 'yellow', 'blue', 'purple', 'red', 'green', 'yellow', 'blue', 'purple']:
        t.circle(50)

done()