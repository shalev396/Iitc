from contextlib import nullcontext
from tkinter import BooleanVar

maps={
    "name":"shalev"

}
print(maps)
bools:bool=True
print(bools)
print(bools.__class__)
bools:bool=None
print(bools)
print(bools.__class__)
bools:bool=1
print(bools)
print(bools.__class__)