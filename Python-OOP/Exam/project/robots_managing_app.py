from project.services.main_service import MainService
from project.services.secondary_service import SecondaryService
from project.robots.male_robot import MaleRobot
from project.robots.female_robot import FemaleRobot


class RobotsManagingApp:
    VALID_SERVICE_TYPES = ["MainService", "SecondaryService"]
    VALID_ROBOT_TYPES = ["MaleRobot", "FemaleRobot"]

    def __init__(self) -> None:
        self.robots = []
        self.services = []

    def find_robot(self, name: str) -> MaleRobot or FemaleRobot:
        for robot in self.robots:
            if robot.name == name:
                return robot
    
    def find_service(self, name: str) -> MainService or SecondaryService:
        for service in self.services:
            if service.name == name:
                return service

    def add_service(self, service_type: str, name: str) -> None:
        if service_type not in self.VALID_SERVICE_TYPES:
            raise Exception("Invalid service type!")
        
        if service_type == "MainService":
            self.services.append(MainService(name))
            
        elif service_type == "SecondaryService":
            self.services.append(SecondaryService(name))

        return f"{service_type} is successfully added."
    
    def add_robot(self, robot_type: str, name: str, kind: str, price: float) -> None:
        if robot_type not in self.VALID_ROBOT_TYPES:
            raise Exception("Invalid robot type!")
        
        if robot_type == "MaleRobot":
            self.robots.append(MaleRobot(name, kind, price))

        elif robot_type == "FemaleRobot":
            self.robots.append(FemaleRobot(name, kind, price))

        return f"{robot_type} is successfully added."
    
    def add_robot_to_service(self, robot_name: str, service_name: str) -> None:
        robot = self.find_robot(robot_name)
        service = self.find_service(service_name)

        if robot.__class__.__name__ == "MaleRobot" and service.__class__.__name__ == "SecondaryService" or robot.__class__.__name__ == "FemaleRobot" and service.__class__.__name__ == "MainService":
            return 'Unsuitable service.'
        
        if service.is_full:
            raise Exception("Not enough capacity for this robot!")
        
        self.robots.remove(robot)

        service.robots.append(robot)
        
        return f"Successfully added {robot_name} to {service_name}."
    
    def remove_robot_from_service(self, robot_name: str, service_name: str) -> None:
        service = self.find_service(service_name)

        robot = service.find_robot(robot_name)

        if not robot:
            raise Exception("No such robot in this service!")

        service.robots.remove(robot)

        self.robots.append(robot)

        return f"Successfully removed {robot_name} from {service_name}."
    
    def feed_all_robots_from_service(self, service_name: str) -> None:
        service = self.find_service(service_name)
        service.feed_all_robots()

        return f"Robots fed: {len(service.robots)}."
    
    def service_price(self, service_name: str) -> str:
        service = self.find_service(service_name)
        return f"The value of service {service_name} is {service.total_price:.2f}."
    
    def __str__(self) -> str:
        result = []

        for service in self.services:
            result.append(f"{service.details()}")

        return '\n'.join(result)
    
    def __repr__(self) -> str:
        result = []

        for service in self.services:
            result.append(f"{service.details()}")

        return '\n'.join(result)
    
    