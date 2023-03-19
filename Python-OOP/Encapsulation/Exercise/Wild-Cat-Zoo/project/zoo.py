from functools import reduce
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
        
        if self.__animal_capacity <= len(self.animals):
            return 'Not enough space for animal'
        
        self.animals.append(animal)

        self.__budget -= price

        return f"{animal.name} the {animal.__class__.__name__} added to the zoo"

    def hire_worker(self, worker: Worker):
        if self.__workers_capacity <= len(self.workers):
            return 'Not enough space for worker'
        
        self.workers.append(worker)

        return f"{worker.name} the {worker.__class__.__name__} hired successfully"
     
    def fire_worker(self, worker_name: str):
        worker = self.find_worker(worker_name)

        if worker:
            self.workers.remove(worker)

            return f"{worker_name} fired successfully"

        return f"There is no {worker_name} in the zoo"

    def find_worker(self, worker_name: str) -> Worker:
        for worker in self.workers:
            if worker.name == worker_name:
                return worker
            
    def pay_workers(self):
        total_due = sum(v.salary for v in self.workers)


        if total_due > self.__budget:
            return 'You have no budget to pay your workers. They are unhappy'
        
        self.__budget -= total_due

        return f"You payed your workers. They are happy. Budget left: {self.__budget}"
    
    def tend_animals(self):
        total_due = sum(a.money_for_care for a in self.animals)

        if total_due > self.__budget:
            return 'You have no budget to tend the animals. They are unhappy.'
        
        self.__budget -= total_due

        return f"You tended all the animals. They are happy. Budget left: {self.__budget}"
    
    def profit(self, profit: int):
        self.__budget += profit

    def animals_status(self):
        animals = { 'Lion': [], 'Tiger': [], 'Cheetah': [] }

        result = self.status('animals', self.animals, animals)

        return '\n'.join(result)
    
    def workers_status(self):
        workers = { 'Keeper': [], 'Caretaker': [], 'Vet': [] }

        result = self.status('workers', self.workers, workers)

        return '\n'.join(result)
    
    @staticmethod
    def status(type, collection, initial):
        for animal in collection:
            if animal.__class__.__name__ not in initial:
                initial[animal.__class__.__name__] = []
            
            initial[animal.__class__.__name__].append(animal)

        results = [f'You have {len(collection)} {type}']
        for type, animal_infos in initial.items():
            results.append(f"----- {len(animal_infos)} {type}s:")

            results.extend(str(info) for info in animal_infos)

        return results

        

