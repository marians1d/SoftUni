class Song:
    def __init__(self, name: str, length: float, single: bool) -> None:
        self.name: str = name
        self.length: float = length
        self.single: bool = single

    def get_info(self) -> str:
        return f"{self.name} - {self.length}"