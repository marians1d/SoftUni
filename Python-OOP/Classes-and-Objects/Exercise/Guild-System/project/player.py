from typing import Dict, List


class Player:
    def __init__(self, name: str, hp: int, mp: int) -> None:
        self.name: str = name
        self.hp: int = hp
        self.mp: int = mp
        self.skills: Dict[str: int] = {}
        self.guild: str = 'Unaffiliated'

    
    def add_skill(self, skill_name: str, mana_cost: int) -> str:
        if skill_name in self.skills:
            return f"Skill already added"
        
        self.skills[skill_name] = mana_cost

        return f"Skill {skill_name} added to the collection of the player {self.name}"
    

    def player_info(self):
        message: List[str] = []

        message.append(f"Name: {self.name}")
        message.append(f"Guild: {self.guild}")
        message.append(f"HP: {self.hp}")
        message.append(f"MP: {self.mp}")

        for skill_name, mana_cost in self.skills.items():
            message.append(f"==={skill_name} - {mana_cost}")

        return '\n'.join(message)
