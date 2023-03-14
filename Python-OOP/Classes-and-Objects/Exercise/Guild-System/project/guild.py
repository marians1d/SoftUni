from typing import List
from project.player import Player

class Guild:
    def __init__(self, name: str) -> None:
        self.name: str = name
        self.players: List[Player] = []

    def assign_player(self, player: Player) -> str:
        if player in self.players:
            return f"Player {player.name} is already in the guild."

        if player.guild != 'Unaffiliated':
            return f"Player {player.name} is in another guild."

        self.players.append(player)
        player.guild = self.name

        return f"Welcome player {player.name} to the guild {self.name}"

    def kick_player(self, player_name: str) -> str:
        current_players = [p for p in self.players if player_name == p.name]

        if len(current_players) == 0:
            return f"Player {player_name} is not in the guild."
        
        player = current_players[0]
        
        self.players.remove(player)
        player.guild = 'Unaffiliated'

        return f"Player {player_name} has been removed from the guild."
    
    def guild_info(self) -> str:
        message: List[str] = []

        message.append(f"Guild: {self.name}")

        for player in self.players:
            message.append(player.player_info())

        return '\n'.join(message)
