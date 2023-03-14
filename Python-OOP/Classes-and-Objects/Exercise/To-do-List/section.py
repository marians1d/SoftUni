from typing import List
from project.task import Task

class Section:
    def __init__(self, name: str, ) -> None:
        self.name = name
        self.tasks: List[Task] = []

    def add_task(self, new_task: Task) -> str:
        if new_task not in self.tasks:
            self.tasks.append(new_task)

            return f"Task {new_task.details()} is added to the section"
        
        return f"Task is already in the section {self.name}"
    
    def complete_task(self, task_name: str) -> str:
        for task in self.tasks:
            if task_name == task.name:
                task.completed = True

                return f"Completed task {task_name}"
            
        return f"Could not find task with the name {task_name}"
    
    def clean_section(self) -> str:
        cleaned_tasks: List[Task] = []

        for task in self.tasks:
            if not task.completed:
                cleaned_tasks.append(task)

        removed_amount = len(self.tasks) - len(cleaned_tasks)

        self.tasks = cleaned_tasks

        return f"Cleared {removed_amount} tasks."
    
    def view_section(self) -> str:
        message: List[str] = [f"Section {self.name}:"]

        for task in self.tasks:
            message.append(task.details())


        return '\n'.join(message)

        