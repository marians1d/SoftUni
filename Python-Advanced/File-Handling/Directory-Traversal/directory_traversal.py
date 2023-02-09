import os


def save_directory(dir_name, shallow=False):
    for filename in os.listdir(dir_name):
        file = os.path.join(dir_name, filename)

        if os.path.isfile(file):
            extension = filename.split('.')[-1]

            if extension not in extensions:
                extensions[extension] = []

            extensions[extension].append(filename)
        elif os.path.isdir(file) and not shallow:
            save_directory(dir_name, True)


directory = input()
extensions = {}

save_directory(directory)

extensions = sorted(extensions.items())

result = []
with open('report.txt', 'w') as report:
    for extension, files in extensions:
        report.write(f'.{extension}\n')

        for file in sorted(files):
            report.write(f'- - - {file}\n')
