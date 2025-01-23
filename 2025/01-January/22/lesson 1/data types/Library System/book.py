import random
class Book:
    def __init__(self,title,author,publication):
        self.id=random.randrange(0,100000)
        self.title = title
        self.author = author
        self.publication=publication

    def __str__(self):
        return f"{self.title},{self.author},{self.publication}"
    def set_title(self,title):
        self.title=title
    def get_title(self):
        return self.title
    def set_author(self,author):
        self.author=author
    def get_author(self):
        return self.author
    def set_publication(self,publication):
        self.publication=publication
    def get_publication(self):
        return self.publication

    def get_id(self):
        return self.id