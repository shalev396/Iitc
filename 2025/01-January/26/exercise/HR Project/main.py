from hr import HR


def get_user_input(prompt, validator=None):
    while True:
        value = input(prompt).strip()
        if not validator:
            return value
        try:
            return validator(value)
        except ValueError as e:
            print(f"Error: {e}")


def add_user(hr):
    print("\n=== Add New User ===")
    try:
        name = get_user_input("Enter name: ")
        email = get_user_input("Enter email: ")
        
        # Handle extra details with *args
        extra_details = {}
        extra_input = get_user_input("Enter extra details (key=value, ','-separated): ")
        if extra_input:
            for item in extra_input.split(","):
                if "=" in item:
                    key, value = item.strip().split("=", 1)
                    extra_details[key.strip()] = value.strip()
        
        user = hr.add_user(name=name, email=email, extra_details=extra_details)
        print(f"\nUser added successfully:\n{user}")
    
    except ValueError as e:
        print(f"\nError adding user: {e}")


def view_users(hr):
    print("\n=== View Users ===")
    keyword = get_user_input("Enter search keyword (or press Enter to view all): ")
    users = hr.search_users(keyword)
    
    if not users:
        print("No users found.")
        return
    
    for i, user in enumerate(users):
        print(f"\n{i + 1}. {user}")


def delete_user(hr):
    print("\n=== Delete User ===")
    user_id = get_user_input(
        "Enter user ID to delete: ",
        validator=lambda x: int(x)
    )
    
    user = hr.delete_user(user_id)
    if user:
        print(f"\nDeleted user:\n{user}")
    else:
        print("\nUser not found.")


def main():
    hr = HR()
    
    while True:
        print("\n=== User Data Manager ===")
        print("1. Add User")
        print("2. View Users")
        print("3. Delete User")
        print("4. Exit")
        
        choice = get_user_input(
            "\nEnter your choice (1-4): ",
            validator=lambda x: int(x) if x in "1234" else ValueError("Invalid choice")
        )
        
        if choice == 1:
            add_user(hr)
        elif choice == 2:
            view_users(hr)
        elif choice == 3:
            delete_user(hr)
        else:
            print("\nGoodbye!")
            break


if __name__ == "__main__":
    main()
