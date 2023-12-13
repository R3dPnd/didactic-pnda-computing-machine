# Turtle Racer

## Definition
1. Create a Turtle that can move in 4 directions.
2. Have an end goal.
3. Have Visual Feedback.

## Flow
                                                                                                        -> Wait
                                                                                                No  /
Start -> BG_Color Orange -> Draw the Ocean -> Move Turtle to starting POS -> Move Key Pressed?                                                     -> Hide Turtle Write "You Win!" -> End
                                                                             \                   Yes \                                       Yes /
                                                                               \                         -> Move Turtle -> Check End State
                                                                                 \                                                           No  \
                                                                                   \                                                                 -> Return to Waiting for move\
                                                                                     ---------------------------------------------------------------------------------------------<-