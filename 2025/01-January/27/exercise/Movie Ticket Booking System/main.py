class MovieTheater:
    def __init__(self, name, seats):
        self.name = name
        self.seats = seats
        self.available_seats = seats

    def book_ticket(self, number_of_tickets):
        if number_of_tickets <= self.available_seats:
            self.available_seats -= number_of_tickets
            return f"{number_of_tickets} tickets successfully booked."
        else:
            return "no seats available."

    def cancel_ticket(self, number_of_tickets):
        if number_of_tickets <= (self.seats - self.available_seats):
            self.available_seats += number_of_tickets
            return f"{number_of_tickets} tickets successfully canceled."
        else:
            return "stfu."

    def check_available_seats(self):
        return f"{self.available_seats}/{self.seats}"


theater = MovieTheater("CineMax", 100)
print(theater.check_available_seats())
print(theater.book_ticket(30))
print(theater.check_available_seats())
print(theater.cancel_ticket(10))
print(theater.check_available_seats())