from project.services.base_service import BaseService


class MainService(BaseService):

    @property
    def CAPACITY(self) -> int:
        return 30
    
    def __init__(self, name: str) -> None:
        super().__init__(name, self.CAPACITY)

    def details(self) -> str:
        return f"{self.name} Main Service:\n" \
               f"Robots: {' '.join(self.robot_names) if self.robot_names else 'none'}"