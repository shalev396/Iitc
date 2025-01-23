from book import Book


class Library:
    book_list: list[Book]

    def __init__(self):
        self.book_list = []

    def __str__(self):
        string = f"{seperator()}"
        for i in range(len(self.book_list)):
            string += f"\n{i}. {self.book_list[i].title} by {self.book_list[i].author} ({self.book_list[i].publication})"
        return string

    def get_book_by_id(self, book_id):
        for i in range(len(self.book_list)):
            if self.book_list[i].id == book_id:
                return self.book_list[i]
        return 404

    def get_index_by_id(self, book_id):
        for i in range(len(self.book_list)):
            if self.book_list[i].id == book_id:
                return i
        return 404

    def add_book(self, book: Book):
        self.book_list.append(book)

    def edit_book_by_id(self, book_id, new_book: Book):
        old_book = self.get_book_by_id(book_id)
        if old_book == 404:
            return 404
        if new_book.title:
            old_book.set_title(new_book.title)
        if new_book.author:
            old_book.set_author(new_book.author)
        if new_book.publication:
            old_book.set_publication(new_book.publication)
        return old_book

    def delete_by_id(self, book_id):
        del_book = self.get_book_by_id(book_id)
        if del_book == 404:
            return 404
        self.book_list.remove(del_book)
        return del_book

    def get_all_books(self):
        return self.book_list

    def search_for_book(self, query):
        for i in range(len(self.book_list)):
            if self.book_list[i].id == query or self.book_list[i].title == query or self.book_list[i].author == query or \
                    self.book_list[i].publication == query:
                return self.book_list[i]
        return 404

    def get_all_books_names(self):
        names = []
        for i in range(len(self.book_list)):
            names.append(self.book_list[i].title)
        return names

    @staticmethod
    def exit_library():
        return "goodbye"


def seperator():
    return "=" * 50
