class Time:
    max_hours: int = 23
    max_minutes: int = 59
    max_seconds: int = 59

    def __init__(self, hours: int, minutes: int, seconds: int) -> None:
        self.hours: int = hours
        self.minutes: int = minutes
        self.seconds: int = seconds

    def set_time(self, hours: int, minutes: int, seconds: int) -> None:
        self.hours = hours
        self.minutes = minutes
        self.seconds = seconds

    def get_time(self) -> str:
        return f"{self.hours:02}:{self.minutes:02}:{self.seconds:02}"

    def next_second(self) -> str:
        self.seconds += 1

        if self.seconds > Time.max_seconds:
            self.minutes += 1
            self.seconds = 0

        if self.minutes > Time.max_minutes:
            self.hours += 1
            self.minutes = 0

        if self.hours > Time.max_hours:
            self.hours = 0

        return self.get_time()

time = Time(23, 59, 59)
print(time.next_second())
