import turtle


def draw_filled_rectangle(t, x, y, width, height, color):
    """
    Draws a filled rectangle using the turtle 't' with the
    bottom-left corner at (x, y), given width, height, and color.
    """
    t.up()
    t.goto(x, y)
    t.setheading(0)
    t.down()
    t.color(color)
    t.begin_fill()
    for _ in range(2):
        t.forward(width)
        t.left(90)
        t.forward(height)
        t.left(90)
    t.end_fill()


def draw_dog_tags(t, x, y, scale=1):
    """
    Draws a pair of simple dog-tag shapes at (x, y) with a given scale.
    """
    t.up()
    t.goto(x, y)
    t.setheading(-20)
    t.down()
    t.color("gray")
    t.begin_fill()

    # Draw a single dog tag (rounded rectangle approximation)
    for _ in range(2):
        t.forward(30 * scale)
        t.circle(5 * scale, 90)
        t.forward(50 * scale)
        t.circle(5 * scale, 90)

    t.end_fill()

    # Move to draw the second tag
    t.up()
    t.goto(x + 15 * scale, y - 5 * scale)
    t.setheading(-30)
    t.down()
    t.begin_fill()

    # Another dog tag
    for _ in range(2):
        t.forward(30 * scale)
        t.circle(5 * scale, 90)
        t.forward(50 * scale)
        t.circle(5 * scale, 90)

    t.end_fill()


def main():
    screen = turtle.Screen()
    screen.title("Fortnite Battle Royale (Turtle Approximation)")
    screen.setup(width=800, height=600)
    screen.bgcolor("white")

    pen = turtle.Turtle()
    pen.speed(0)
    pen.hideturtle()

    # 1. Draw the big sign background
    #    Top portion for "FORTNITE"
    draw_filled_rectangle(pen, -200, 100, 400, 80, "#4F5F3F")  # greenish background
    #    Middle portion for "BATTLE ROYALE"
    draw_filled_rectangle(pen, -170, 20, 340, 80, "#9BA845")  # lighter green
    #    A small dark outline behind "BATTLE ROYALE" bar
    draw_filled_rectangle(pen, -180, 15, 360, 90, "#3C3C2E")  # dark behind

    # 2. Write "FORTNITE" at the top
    pen.up()
    pen.goto(0, 120)
    pen.color("white")
    pen.write("FORTNITE", align="center", font=("Arial", 26, "bold"))

    # 3. Write "BATTLE ROYALE" in the middle
    pen.goto(0, 50)
    pen.color("black")
    pen.write("BATTLE ROYALE", align="center", font=("Arial", 26, "bold"))

    # 4. Draw the dog tags (approximate) in front
    draw_dog_tags(pen, -20, 35, scale=0.7)

    # Optionally: draw a small tree shape or other background items
    # to emulate the environment in the original image. This is purely decorative.

    # Wait for the user to close the window
    turtle.done()


if __name__ == "__main__":
    main()
