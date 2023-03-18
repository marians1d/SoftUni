from typing import List

from project.worker import Worker
from project.animal import Animal


class Zoo:
    def __init__(self, name: str, budget: int, animal_capacity: int, workers_capacity: int) -> None:
        self.name = name
        self.__budget = budget
        self.__animal_capacity = animal_capacity
        self.__workers_capacity = workers_capacity
        self.animals: List[Animal] = []
        self.workers: List[Worker] = []

    def add_animal(self, animal: Animal, price: int):
        if self.__budget < price:
            return 'Not enough budget'
        
        if self.__animal_capacity >= len(self.animals):
            return 'Not enough space for animal'
        
        self.animals.append(animal)

        self.__budget -= price

        return f"{animal.name} the {animal.__class__.__name__} added to the zoo"

    def hire_worker(self, worker: Worker):
        if self.__workers_capacity >= len(self.workers):
            return 'Not enough space for worker'
        
        self.workers.append(worker)

        return f"{worker} the {worker.__class__.__name__} hired successfully"
     
    def fire_worker(self, worker_name: str):
        
