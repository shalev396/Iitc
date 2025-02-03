# imports class\
from book import Book
from library import Library
# import lib
import inquirer


# ask the user for operation and return a number
def ask_operation():
    operations = [
        inquirer.List(
            "operation",
            message="Please choose an option:",
            choices=[
                "1. Add a Book",
                "2. Update a Book",
                "3. Delete a Book",
                "4. View All Books",
                "5. Search for a Book",
                "6. Sort Books",
                "7. View Statistics",
                "8. Filter by Year Range",
                "9. Export Library",
                "10. Import Library",
                "11. Exit"
            ],
        ),
    ]
    choice = inquirer.prompt(operations)
    match choice["operation"]:
        case "1. Add a Book":
            return 1
        case "2. Update a Book":
            return 2
        case "3. Delete a Book":
            return 3
        case "4. View All Books":
            return 4
        case "5. Search for a Book":
            return 5
        case "6. Sort Books":
            return 6
        case "7. View Statistics":
            return 7
        case "8. Filter by Year Range":
            return 8
        case "9. Export Library":
            return 9
        case "10. Import Library":
            return 10
        case "11. Exit":
            return 11


# ask user to choose a book
def ask_book():
    books = [
        inquirer.List(
            "books",
            message="Please choose a book:",
            choices=library.get_all_books_names()
        ),
    ]
    choice = inquirer.prompt(books)
    return choice["books"]


# ask user to input a book and return the book
def add_book():
    title = ""
    author = ""
    year = 0
    entered_title = False
    while not entered_title:
        title = input("Enter book title:")
        if not title == "":
            entered_title = True
        else:
            print(f"Title cannot be empty, Please try again.")
    entered_author = False
    while not entered_author:
        author = input("Enter author:")
        if not author == "":
            entered_author = True
        else:
            print(f"Author cannot be empty, Please try again.")
    entered_year = False
    year_is_number = False
    while not entered_year or not year_is_number:
        entered_year = False
        year_is_number = False
        year = input("Enter publication year:")
        if not year == "":
            entered_year = True
        else:
            print(f"Year cannot be empty, Please try again.")
        if entered_year and year.isdecimal():
            year_is_number = True
            year = int(year)
        else:
            print(f"Year must be a Number, Please try again.")
    library.add_book(Book(title, author, year))
    print(f"Book '{title}' by {author} ({year}) added to the library!")


# ask user for book title and edit the book and return the new book
def edit_book():
    book_name = ask_book()
    book = library.search_for_book(book_name)
    print("Enter the updated details below.\nLeave any field blank if you wish to keep its current value.")
    title = input("Enter new title: ")
    author = input("Enter new author: ")
    year = input("Enter new publication year: ")
    print(year.isdecimal())
    while not year.isdecimal():
        if year.isdecimal():
            year = int(year)
        else:
            print(f"Year must be a Number, Please try again.")
            year = input("Enter publication year : ")
    changes_to_book = (library.edit_book_by_id(book.id, Book(title, author, year)))
    print(f"Book '{changes_to_book.title}' updated successfully!")


def delete_book():
    book_name = ask_book()
    book = library.search_for_book(book_name)
    book=library.delete_by_id(book.id)
    print(f"Book  '{book.title}' removed from the library.")


def get_all_books():
    print(f"===== Library Collection =====")
    print(library.__str__())
    print(f"=======================================")


def search_for_book():
    query = input(f"Please type what you're searching for to find a book : \n")
    book = library.search_for_book(query)
    if not book == 404:
        print(f"Found this book in our collection : \n{book}")
    else:
        print(f"Your book was not found.")


def exit_library():
    print(f"Thank you for using the Library Management System. Goodbye!")
    return False


def sort_books():
    sort_options = [
        inquirer.List(
            "sort_by",
            message="Sort books by:",
            choices=["Title", "Author", "Year"],
        ),
    ]
    choice = inquirer.prompt(sort_options)
    result = library.sort_books(choice["sort_by"].lower())
    print(result)
    get_all_books()


def view_statistics():
    print(library.get_statistics())


def filter_by_year_range():
    try:
        start_year = int(input("Enter start year: "))
        end_year = int(input("Enter end year: "))
        if start_year > end_year:
            start_year, end_year = end_year, start_year
        print(library.filter_by_year_range(start_year, end_year))
    except ValueError:
        print("Please enter valid year numbers")


def export_library():
    print(library.export_to_json())


def import_library():
    print(library.import_from_json())


# to asain function to operation that the user has chosen
def handle_operation(operation, using):
    match operation:
        case 1:
            add_book()
        case 2:
            edit_book()
        case 3:
            delete_book()
        case 4:
            get_all_books()
        case 5:
            search_for_book()
        case 6:
            sort_books()
        case 7:
            view_statistics()
        case 8:
            filter_by_year_range()
        case 9:
            export_library()
        case 10:
            import_library()
        case 11:
            using = exit_library()
    return using


if __name__ == "__main__":
    #greetings
    print("===== Welcome to the Library Management System =====")
    is_using = True
    # init
    library: Library = Library()
    #dummy data
    dummy_book_0 = Book("Pride and Prejudice", "Jane Austen", 1813)
    dummy_book_1 = Book("1984", "George Orwell", 1949)
    dummy_book_2 = Book("To Kill a Mockingbird", "Harper Lee", 1960)
    dummy_book_3 = Book("The Great Gatsby", "F. Scott Fitzgerald", 1925)
    dummy_book_4 = Book("Moby-Dick", "Herman Melville", 1851)
    dummy_book_5 = Book("The Catcher in the Rye", "J.D. Salinger", 1951)
    dummy_book_6 = Book("War and Peace", "Leo Tolstoy", 1869)
    dummy_book_7 = Book("Brave New World", "Aldous Huxley", 1932)
    dummy_book_8 = Book("The Adventures of Huckleberry Finn", "Mark Twain", 1884)
    dummy_book_9 = Book("The Lord of the Rings", "J.R.R. Tolkien", 1954)

    library.add_book(dummy_book_0)
    library.add_book(dummy_book_1)
    library.add_book(dummy_book_2)
    library.add_book(dummy_book_3)
    library.add_book(dummy_book_4)
    library.add_book(dummy_book_5)

    library.add_book(dummy_book_6)
    library.add_book(dummy_book_7)
    library.add_book(dummy_book_8)
    library.add_book(dummy_book_9)
    #
    while is_using:
        is_using = handle_operation(ask_operation(), is_using)
