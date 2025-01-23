# imports class
from idlelib.configdialog import changes

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
                "6. Exit"
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
        case "6. Exit":
            return 6
# ask user to choose a book
def ask_book():
    books = [
        inquirer.List(
            "books",
            message="Please choose an option:",
            choices=library.get_all_books_names()
        ),
    ]
    choice = inquirer.prompt(books)
    return choice["books"]
# ask user to input a book and return the book
def add_book():
    title=""
    author=""
    year=0
    entered_title=False
    while not entered_title:
        title=input("Enter book title:")
        if not title=="":
            entered_title=True
        else:
            print(f"Title cannot be empty, Please try again.")
    entered_author=False
    while not entered_author:
        author=input("Enter author:")
        if not author=="":
            entered_author=True
        else:
            print(f"Author cannot be empty, Please try again.")
    entered_year=False
    year_is_number=False
    while not entered_year or not  year_is_number:
        entered_year = False
        year_is_number = False
        year=input("Enter publication year:")
        if not year=="":
            print(f"Tear cannot be empty, Please try again.")
            entered_year=True
        if entered_year and year.isdecimal():
            print(year.isdecimal())
            year_is_number=True
            year=int(year)
        else:
            print(f"Year must be a Number, Please try again.")
    library.add_book(Book(title,author,year))
    print("Book added successfully")
# ask user for book title and edit the book and return the new book
def edit_book():
    #TODO: handel year is not a number
    book_name=ask_book()
    book=library.search_for_book(book_name)
    print("Enter the updated details below.\nLeave any field blank if you wish to keep its current value.")
    changes_to_book=(library.edit_book_by_id(book.id,Book(input("Enter title : "),input("Enter author : "),input("Enter publication year : "))))
    print(f"Book changed successfully : \n{changes_to_book}")
def delete_book():
    book_name = ask_book()
    book = library.search_for_book(book_name)
    library.delete_by_id(book.id)
    print(f"Book deleted successfully")
def get_all_books():
    print("This is our book collection")
    print(library.__str__())
def search_for_book():
    query=input(f"Please type what you're searching for to find a book : \n")
    book=library.search_for_book(query)
    if not book== 404:
        print(f"Found this book in our collection : \n{book}")
    else:
        print(f"Your book was not found.")
def exit_library():
    print(f"Thank you for using the Library Management System. Goodbye!")
    return False
# to asain function to operation that the user has chosen
def handle_operation(operation,using ):
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
            using = exit_library()
    return using
if(__name__ == "__main__"):
    #greetings
    print("===== Welcome to the Library Management System =====")
    is_using=True
    # init
    library:Library=Library()
    #dummy data
    Dummy0=Book("title","author",2000)
    library.add_book (Dummy0)
    #
    while is_using:
        is_using=handle_operation(ask_operation(),is_using)
