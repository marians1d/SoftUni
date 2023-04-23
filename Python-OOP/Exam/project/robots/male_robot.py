from project.robots.base_robot import BaseRobot

class MaleRobot(BaseRobot):
    @property
    def INITIAL_WEIGHT(self) -> int:
        return 9

    def __init__(self, name: str, kind: str, price: float) -> None:
        super().__init__(name, kind, price, self.INITIAL_WEIGHT)

    def eating(self) -> None:
        self.weight += 3
