from user import User
import json
import os


class HR:
    def __init__(self):
        self.users_list = []
        self._load_users()

    def _load_users(self):
        try:
            self.import_from_json()
        except (FileNotFoundError, json.JSONDecodeError):
            self.users_list = []

    def export_to_json(self):
        filename = "user.json"
        data = [user.to_dict() for user in self.users_list]
        with open(filename, 'w') as f:
            json.dump(data, f, indent=4)
        return f"User data exported to {filename}"

    def import_from_json(self):
        filename = "user.json"
        if not os.path.exists(filename):
            return f"File {filename} not found"
        with open(filename, 'r') as f:
            data = json.load(f)
        self.users_list = []
        for user_data in data:
            user = User(**{
                "name": user_data["name"],
                "email": user_data["email"],
                "extra_details": user_data["extra_details"]
            })
            user.id = user_data["id"]
            self.users_list.append(user)
        return f"User data imported from {filename}"

    def __str__(self):
        if not self.users_list:
            return "No users found"
        return "\n".join([
            "=" * 50,
            *[f"{i}. {user}" for i, user in enumerate(self.users_list)],
            "=" * 50
        ])

    def add_user(self, **kwargs):
        user = User(**kwargs)
        self.users_list.append(user)
        self.export_to_json()
        return user

    def search_users(self, keyword=None):
        if not keyword:
            return self.users_list
        
        search_lambda = lambda user: (
            keyword.lower() in user.name.lower() or
            keyword.lower() in user.email.lower() or
            any(keyword.lower() in str(v).lower() for v in user.extra_details.values())
        )
        
        return list(filter(search_lambda, self.users_list))

    def get_user_by_id(self, user_id):
        return next((user for user in self.users_list if user.id == user_id), None)

    def update_user(self, user_id, **kwargs):
        user = self.get_user_by_id(user_id)
        if not user:
            return None
        user.update(**kwargs)
        self.export_to_json()
        return user

    def delete_user(self, user_id):
        user = self.get_user_by_id(user_id)
        if not user:
            return None
        self.users_list.remove(user)
        self.export_to_json()
        return user

    def get_all_user_names(self):
        return list(map(lambda user: user.name, self.users_list))

    def get_index_by_id(self, user_id):
        for i in range(len(self.users_list)):
            if self.users_list[i].id == user_id:
                return i
        return 404

    def add_book(self, user: User):
        self.users_list.append(user)

    def edit_book_by_id(self, user_id, new_user: User):
        old_user = self.get_user_by_id(user_id)
        if old_user == 404:
            return 404
        if new_user.name:
            old_user.set_name(old_user.name)
        if new_user.email:
            old_user.set_email(old_user.email)
        if new_user.extra_details:
            old_user.set_extra_details(old_user.extra_details)
        return old_user

    def delete_by_id(self, user_id):
        del_user = self.get_user_by_id(user_id)
        if del_user == 404:
            return 404
        self.users_list.remove(del_user)
        return del_user
    def get_all_users_names(self):
        names = []
        for i in range(len(self.users_list)):
            names.append(self.users_list[i].name)
        return names

    @staticmethod
    def exit_library():
        return "goodbye"

def seperator():
    return "=" * 50
