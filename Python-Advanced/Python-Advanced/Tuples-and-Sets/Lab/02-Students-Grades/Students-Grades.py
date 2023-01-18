n = int(input())

student_grades = [tuple(input().split()) for _ in range(n)]

student_data = {}

for student, grade in student_grades:
    if student not in student_data:
        student_data[student] = []

    student_data[student].append(float(grade))

for name, grades in student_data.items():
    student_grade_list = " ".join(map(lambda grade: f'{grade:.2f}', grades))
    student_average = sum(grades) / len(grades)

    print(f'{name} -> {student_grade_list} (avg: {student_average:.2f})')
