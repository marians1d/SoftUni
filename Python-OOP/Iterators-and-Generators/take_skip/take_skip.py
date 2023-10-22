class take_skip:
    def __init__(self, step, count):
        self.step = step
        self.count = count
        self.current = 0
        self.i = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.i < self.count:
            self.i += 1
            self.current += self.step
            return self.current - self.step
        else:
            raise StopIteration
        
numbers = take_skip(10, 5) 
for number in numbers: 
    print(number) 
