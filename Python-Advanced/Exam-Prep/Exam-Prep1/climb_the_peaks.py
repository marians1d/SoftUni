from collections import deque

day = 1

food_portions = [int(p) for p in input().split(', ')]
stamina = deque(int(s) for s in input().split(', '))

mountain_peaks = deque([
    ('Vihren', 80),
    ('Kutelo', 90),
    ('Banski Suhodol', 100),
    ('Polezhan', 60),
    ('Kamenitza', 70)
])

concurred_peaks = []

while True:
    if not mountain_peaks:
        print('Alex did it! He climbed all top five Pirin peaks in one week -> @FIVEinAWEEK')
        break
    elif day > 7 or not food_portions or not stamina:
        print('Alex failed! He has to organize his journey better next time -> @PIRINWINS')
        break


    energy = food_portions.pop() + stamina.popleft()

    next_peak = mountain_peaks.popleft()

    if next_peak[1] <= energy:
        concurred_peaks.append(next_peak[0])
    else:
        mountain_peaks.appendleft(next_peak)
        
    day += 1

if concurred_peaks:
    print('Conquered peaks:')
    print(*concurred_peaks, sep='\n')

