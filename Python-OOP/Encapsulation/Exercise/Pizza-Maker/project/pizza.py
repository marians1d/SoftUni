from functools import reduce
from typing import Dict
from project.topping import Topping
from project.dough import Dough


class Pizza:
    def __init__(self, name: str, dough: Dough, max_number_of_toppings: int) -> None:
        self.name: str = name
        self.dough: Dough = dough
        self.max_number_of_toppings: int = max_number_of_toppings
        self.toppings: Dict[str, int] = {}

    @property
    def name(self):
        return self.__name
    
    @name.setter
    def name(self, value):
        if not value:
            raise ValueError('The name cannot be an empty string')
        
        self.__name = value

    @property
    def dough(self):
        return self.__dough
    
    @dough.setter
    def dough(self, value):
        if value is None:
            raise ValueError('You should add dough to the pizza')
        
        self.__dough = value

    @property
    def max_number_of_toppings(self):
        return self.__max_number_of_toppings
    
    @max_number_of_toppings.setter
    def max_number_of_toppings(self, value):
        if value <= 0:
            raise ValueError('The maximum number of toppings cannot be less or equal to zero')
        
        self.__max_number_of_toppings = value

    def add_topping(self, topping: Topping):
        if len(self.toppings.keys()) >= self.max_number_of_toppings:
            raise ValueError('Not enough space for another topping')
        
        if topping.topping_type not in self.toppings:
            self.toppings[topping.topping_type] = 0

        self.toppings[topping.topping_type] += topping.weight

    def calculate_total_weight(self) -> int or float:
        topping_weight = reduce(lambda a, v: a + v, self.toppings.values())

        total_weight = self.dough.weight + topping_weight

        return total_weight
