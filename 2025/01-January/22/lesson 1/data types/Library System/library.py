from book import Book
import json
import os


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

    def export_to_json(self):
        """Export library data to a JSON file"""
        filename = "library_data.json"
        data = []
        for book in self.book_list:
            data.append({
                "id": book.id,
                "title": book.title,
                "author": book.author,
                "publication": book.publication
            })
        with open(filename, 'w') as f:
            json.dump(data, f, indent=4)
        return f"Library data exported to {filename}"

    def import_from_json(self):
        """Import library data from a JSON file"""
        filename = "library_data.json"
        if not os.path.exists(filename):
            return f"File {filename} not found"
        with open(filename, 'r') as f:
            data = json.load(f)
        self.book_list = []
        for book_data in data:
            book = Book(book_data["title"], book_data["author"], book_data["publication"])
            book.id = book_data["id"]
            self.book_list.append(book)
        return f"Library data imported from {filename}"

    def sort_books(self, key="title"):
        """Sort books by title, author, or year"""
        if key == "title":
            self.book_list.sort(key=lambda x: x.title.lower())
        elif key == "author":
            self.book_list.sort(key=lambda x: x.author.lower())
        elif key == "year":
            self.book_list.sort(key=lambda x: x.publication)
        return f"Books sorted by {key}"

    def get_statistics(self):
        """Get library statistics"""
        if not self.book_list:
            return "Library is empty"
        total_books = len(self.book_list)
        years = [book.publication for book in self.book_list]
        oldest = min(years)
        newest = max(years)
        avg_year = sum(years) / len(years)
        return f"""Library Statistics:
Total Books: {total_books}
Year Range: {oldest} - {newest}
Average Publication Year: {avg_year:.0f}"""

    def filter_by_year_range(self, start_year, end_year):
        """Filter books by year range"""
        filtered_books = [book for book in self.book_list 
                        if start_year <= book.publication <= end_year]
        if not filtered_books:
            return f"No books found between {start_year} and {end_year}"
        result = f"Books published between {start_year} and {end_year}:\n{seperator()}"
        for i, book in enumerate(filtered_books):
            result += f"\n{i}. {book.title} by {book.author} ({book.publication})"
        return result


def seperator():
    return "=" * 50
