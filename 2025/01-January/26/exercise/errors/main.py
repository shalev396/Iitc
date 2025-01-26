
try:
    with open("files.txt", "r") as f:
        files=f.read().split(",")
    for i in range(len(files)):
        with open(files[i]+".txt","r") as temp:
            print(temp.read())

except FileNotFoundError as e:
    print(f"file {e.filename} dose not exist")
finally:
    print("done")