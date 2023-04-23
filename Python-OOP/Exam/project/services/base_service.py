from abc import ABC, abstractmethod
from project.robots.female_robot import FemaleRobot

from project.robots.male_robot import MaleRobot


class BaseService(ABC):
    def __init__(self, name: str, capacity: int):
        self.name = name
        self.capacity = capacity
        self.robots = []

    @property
    def name(self) -> str:
        return self.__name
    
    @name.setter
    def name(self, name: str) -> None:
        if name == "" or name.isspace():
            raise ValueError("Service name cannot be empty!")
        
        self.__name = name

    @property
    def capacity(self) -> int:
        return self.__capacity
    
    @capacity.setter
    def capacity(self, capacity: int) -> None:
        if capacity <= 0:
            raise ValueError("Service capacity cannot be less than or equal to 0!")
        
        self.__capacity = capacity

    @property
    def robot_names(self) -> list:
        return [robot.name for robot in self.robots]

    @abstractmethod
    def details(self) -> str:
        pass

    @property
    def is_full(self) -> bool:
        return len(self.robots) >= self.capacity
    
    @property
    def total_price(self) -> float:
        return sum([robot.price for robot in self.robots])
    
    def find_robot(self, name: str) -> MaleRobot or FemaleRobot:
        for robot in self.robots:
            if robot.name == name:
                return robot
            
    def feed_all_robots(self) -> str:
        for robot in self.robots:
            robot.eating()
        
        return "All robots were fed successfully"