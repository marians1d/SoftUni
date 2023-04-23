from abc import ABC, abstractmethod

class BaseRobot(ABC):
    def __init__(self, name: str, kind: str, price: float, weight: int) -> None:
        self.name = name
        self.kind = kind
        self.price = price
        self.weight = weight


    @property
    def name(self) -> str:
        return self.__name
    
    @name.setter
    def name(self, name: str) -> None:
        if name == "" or name.isspace():
            raise ValueError("Robot name cannot be empty!")
        
        self.__name = name

    @property
    def kind(self) -> str:
        return self.__kind
    
    @kind.setter
    def kind(self, kind: str) -> None:
        if kind == "" or kind.isspace():
            raise ValueError("Robot kind cannot be empty!")
        
        self.__kind = kind

    @property
    def price(self) -> float:
        return self.__price
    
    @price.setter
    def price(self, price: float) -> None:
        if price <= 0:
            raise ValueError("Robot price cannot be less than or equal to 0.0!")
        
        self.__price = price

    @abstractmethod
    def eating(self) -> str:
        pass
