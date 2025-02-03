import tkinter as tk
from tkinter import ttk, messagebox
import json
import os
from typing import Dict, Any

class Account:
    def __init__(self, account_id: str, pin: str, balance: float = 0.0):
        self.account_id = account_id
        self.pin = pin
        self.balance = balance

    def to_dict(self) -> Dict[str, Any]:
        return {
            "account_id": self.account_id,
            "pin": self.pin,
            "balance": self.balance
        }

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> 'Account':
        return cls(data["account_id"], data["pin"], data["balance"])

class Bank:
    def __init__(self):
        self.accounts: Dict[str, Account] = {}
        self.load_data()

    def load_data(self):
        if os.path.exists("bank.json"):
            with open("bank.json", "r") as f:
                data = json.load(f)
                self.accounts = {
                    acc_id: Account.from_dict(acc_data)
                    for acc_id, acc_data in data.items()
                }

    def save_data(self):
        with open("bank.json", "w") as f:
            json.dump(
                {acc_id: acc.to_dict() for acc_id, acc in self.accounts.items()},
                f,
                indent=4
            )

    def add_account(self, account: Account):
        self.accounts[account.account_id] = account
        self.save_data()

    def validate_login(self, account_id: str, pin: str) -> bool:
        return (account_id in self.accounts and 
                self.accounts[account_id].pin == pin)

class ATMGUI:
    def __init__(self, root):
        self.root = root
        self.root.title("ATM Application")
        self.root.geometry("400x500")
        self.root.configure(bg="#f0f0f0")
        
        self.bank = Bank()
        self.current_account: Account | None = None
        
        self.setup_styles()
        self.create_login_frame()

    def setup_styles(self):
        style = ttk.Style()
        style.configure("TLabel", padding=5, font=("Arial", 12))
        style.configure("TEntry", padding=5, font=("Arial", 12))
        style.configure("TButton", padding=5, font=("Arial", 12))

    def create_login_frame(self):
        self.login_frame = ttk.Frame(self.root, padding="20")
        self.login_frame.place(relx=0.5, rely=0.5, anchor="center")

        ttk.Label(self.login_frame, text="ATM Login", 
                 font=("Arial", 16, "bold")).grid(row=0, column=0, columnspan=2, pady=20)

        ttk.Label(self.login_frame, text="Account ID:").grid(row=1, column=0, pady=5)
        self.account_id_entry = ttk.Entry(self.login_frame)
        self.account_id_entry.grid(row=1, column=1, pady=5)

        ttk.Label(self.login_frame, text="PIN:").grid(row=2, column=0, pady=5)
        self.pin_entry = ttk.Entry(self.login_frame, show="*")
        self.pin_entry.grid(row=2, column=1, pady=5)

        ttk.Button(self.login_frame, text="Login", 
                  command=self.login).grid(row=3, column=0, columnspan=2, pady=20)
        
        ttk.Button(self.login_frame, text="Create Account", 
                  command=self.show_create_account).grid(row=4, column=0, columnspan=2)

    def create_main_frame(self):
        self.main_frame = ttk.Frame(self.root, padding="20")
        self.main_frame.place(relx=0.5, rely=0.5, anchor="center")

        ttk.Label(self.main_frame, text=f"Welcome, {self.current_account.account_id}", 
                 font=("Arial", 16, "bold")).grid(row=0, column=0, columnspan=2, pady=20)

        ttk.Label(self.main_frame, text=f"Balance: ${self.current_account.balance:.2f}").grid(
            row=1, column=0, columnspan=2, pady=10)

        ttk.Button(self.main_frame, text="Deposit", 
                  command=self.show_deposit).grid(row=2, column=0, pady=10, padx=5)
        ttk.Button(self.main_frame, text="Withdraw", 
                  command=self.show_withdraw).grid(row=2, column=1, pady=10, padx=5)
        ttk.Button(self.main_frame, text="Logout", 
                  command=self.logout).grid(row=3, column=0, columnspan=2, pady=20)

    def login(self):
        account_id = self.account_id_entry.get()
        pin = self.pin_entry.get()

        if self.bank.validate_login(account_id, pin):
            self.current_account = self.bank.accounts[account_id]
            self.login_frame.place_forget()
            self.create_main_frame()
        else:
            messagebox.showerror("Error", "Invalid account ID or PIN")

    def show_create_account(self):
        self.login_frame.place_forget()
        
        self.create_account_frame = ttk.Frame(self.root, padding="20")
        self.create_account_frame.place(relx=0.5, rely=0.5, anchor="center")

        ttk.Label(self.create_account_frame, text="Create Account", 
                 font=("Arial", 16, "bold")).grid(row=0, column=0, columnspan=2, pady=20)

        ttk.Label(self.create_account_frame, text="Account ID:").grid(row=1, column=0, pady=5)
        self.new_account_id_entry = ttk.Entry(self.create_account_frame)
        self.new_account_id_entry.grid(row=1, column=1, pady=5)

        ttk.Label(self.create_account_frame, text="PIN:").grid(row=2, column=0, pady=5)
        self.new_pin_entry = ttk.Entry(self.create_account_frame, show="*")
        self.new_pin_entry.grid(row=2, column=1, pady=5)

        ttk.Button(self.create_account_frame, text="Create", 
                  command=self.create_account).grid(row=3, column=0, columnspan=2, pady=20)
        ttk.Button(self.create_account_frame, text="Back to Login", 
                  command=self.back_to_login).grid(row=4, column=0, columnspan=2)

    def create_account(self):
        account_id = self.new_account_id_entry.get()
        pin = self.new_pin_entry.get()

        if not account_id or not pin:
            messagebox.showerror("Error", "Please fill in all fields")
            return

        if account_id in self.bank.accounts:
            messagebox.showerror("Error", "Account ID already exists")
            return

        new_account = Account(account_id, pin)
        self.bank.add_account(new_account)
        messagebox.showinfo("Success", "Account created successfully!")
        self.back_to_login()

    def back_to_login(self):
        if hasattr(self, 'create_account_frame'):
            self.create_account_frame.place_forget()
        self.create_login_frame()

    def show_deposit(self):
        amount = self.show_amount_dialog("Deposit Amount")
        if amount:
            self.current_account.balance += amount
            self.bank.save_data()
            self.update_main_frame()

    def show_withdraw(self):
        amount = self.show_amount_dialog("Withdraw Amount")
        if amount:
            if amount <= self.current_account.balance:
                self.current_account.balance -= amount
                self.bank.save_data()
                self.update_main_frame()
            else:
                messagebox.showerror("Error", "Insufficient funds")

    def show_amount_dialog(self, title):
        dialog = tk.Toplevel(self.root)
        dialog.title(title)
        dialog.geometry("300x150")
        
        amount_var = tk.StringVar()
        ttk.Label(dialog, text="Enter amount:").pack(pady=10)
        entry = ttk.Entry(dialog, textvariable=amount_var)
        entry.pack(pady=10)

        def submit():
            try:
                amount = float(amount_var.get())
                if amount > 0:
                    dialog.destroy()
                    return amount
                else:
                    messagebox.showerror("Error", "Amount must be positive")
            except ValueError:
                messagebox.showerror("Error", "Please enter a valid number")

        ttk.Button(dialog, text="Submit", command=submit).pack(pady=10)
        
        dialog.transient(self.root)
        dialog.grab_set()
        self.root.wait_window(dialog)
        
        try:
            return float(amount_var.get())
        except:
            return None

    def update_main_frame(self):
        self.main_frame.place_forget()
        self.create_main_frame()

    def logout(self):
        self.current_account = None
        self.main_frame.place_forget()
        self.create_login_frame()

if __name__ == "__main__":
    root = tk.Tk()
    app = ATMGUI(root)
    root.mainloop()