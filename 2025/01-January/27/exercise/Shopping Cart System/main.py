class ShoppingCart:
    def __init__(self):
        self.cart = {}

    def add_item(self, item):
        self.cart["item" + str(len(self.cart.keys()) + 1)] = item

    def remove_item(self, item_name):
        keys_to_remove = []
        for key, item in self.cart.items():
            if item_name == item['name']:
                keys_to_remove.append(key)
        for key in keys_to_remove:
            del self.cart[key]

    def view_cart(self):
        print(self.cart)

cart = ShoppingCart()
item = {"name": "baba", "quantity": 1, "price": 2}
cart.add_item(item)
item2 = {"name": "lala", "quantity": 1, "price": 2}
cart.add_item(item2)
cart.view_cart()
cart.remove_item("lala")
cart.view_cart()
