from project.services.base_service import BaseService


class SecondaryService(BaseService):
    
        @property
        def CAPACITY(self) -> int:
            return 15
    
        def __init__(self, name: str) -> None:
            super().__init__(name, self.CAPACITY)
    
        def details(self) -> str:
            return f"{self.name} Secondary Service:\n" \
                f"Robots: {' '.join(self.robot_names) if self.robot_names else 'none'}"