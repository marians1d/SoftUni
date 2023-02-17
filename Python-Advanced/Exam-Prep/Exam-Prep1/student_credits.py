


def students_credits(*args):
    def sorted_courses(courses) :
        course_message = []
        for name, credits_n in sorted(courses.items(), key=lambda x: x[1], reverse=True):
            course_message.append(f'{name} - {credits_n:.1f}')

        return '\n'.join(course_message)

    total_credits = 0
    courses = {}

    DIPLOMA_CREDITS = 240

    for course in args:
        name, *values = course.split('-')

        credit_amount, max_points, points_given = [float(v) for v in values]

        given_credits = credit_amount * points_given / max_points

        courses[name] = given_credits

        total_credits += given_credits

    result = []

    if total_credits >= DIPLOMA_CREDITS:
        result.append(f'Diyan gets a diploma with {total_credits:.1f} credits.')
    else:
        result.append(f'Diyan needs {(DIPLOMA_CREDITS - total_credits):.1f} credits more for a diploma.')

    result.append(sorted_courses(courses))

    return '\n'.join(result)





# print(
#     students_credits(
#         "Computer Science-12-300-250",
#         "Basic Algebra-15-400-200",
#         "Algorithms-25-500-490"
#     )
# )

# print(
#     students_credits(
#         "Discrete Maths-40-500-450",
#         "AI Development-20-400-400",
#         "Algorithms Advanced-50-700-630",
#         "Python Development-15-200-200",
#         "JavaScript Development-12-500-480",
#         "C++ Development-30-500-405",
#         "Game Engine Development-70-100-70",
#         "Mobile Development-25-250-225",
#         "QA-20-300-300",
#     )
# )

print(
    students_credits(
        "Python Development-15-200-200",
        "JavaScript Development-12-500-480",
        "C++ Development-30-500-405",
        "Java Development-10-300-150"
    )
)
