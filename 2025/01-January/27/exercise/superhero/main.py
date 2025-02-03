


class super_hero:
    def __init__(self,name,alias,power,strength_level,team,is_active ):
        self.name=name
        self.alias=alias
        self.power=power
        self.strength_level =strength_level
        self.team =team
        self.is_active =is_active
    def introduce(self):
        print( f"I am {self.alias}, also known as {self.name}. My power is {self.power}, and I fight for {self.team}!")
    def train(self,hours):
        self.strength_level+=hours/10
    def fight_villain(self,villain_name):
        print(f"{self.alias} is fighting {villain_name}!")
        self.strength_level-=5
        if self.strength_level<=10:
            self.is_active=False
    def retire(self):
        self.is_active=False
        print(f"{self.alias} has retired from hero duties.")
    def reactivate(self):
        self.is_active=True
        print(f"{self.alias} is back in action!")
superman=super_hero("Clark Kent","superman",["Super Strength","Flight","Invulnerability","Super Speed","X-Ray Vision","Heat Vision","Super Hearing","Frost Breath","Enhanced Senses"],50,"Justice League",True)
spider_man = super_hero(
    "Peter Parker",
    "spider_man",
    ["Super Strength", "Wall-Crawling", "Spider-Sense", "Enhanced Reflexes", "Web-Shooting"],
    30,
    "Avengers",
    True
)

iron_man = super_hero(
    "Tony Stark",
    "iron_man",
    ["Genius Intellect", "Powered Armor Suit", "Flight", "Energy Repulsors", "Missiles"],
    45,
    "Avengers",
    True
)
# Introductions

superman.introduce()
spider_man.introduce()
iron_man.introduce()

# Training before the fight
superman.train(20)
spider_man.train(10)
iron_man.train(15)

# Fighting the villain
superman.fight_villain("Doomlord")
spider_man.fight_villain("Doomlord")
iron_man.fight_villain("Doomlord")

# Checking the status after the fight
if not superman.is_active:
    superman.reactivate()
if not spider_man.is_active:
    spider_man.reactivate()
if not iron_man.is_active:
    iron_man.reactivate()