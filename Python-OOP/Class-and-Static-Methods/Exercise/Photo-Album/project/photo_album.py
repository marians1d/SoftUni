import math


class PhotoAlbum:
    PAGE_CAPACITY = 4

    def __init__(self, pages: int) -> None:
        self.pages = pages
        self.photos = [[] for _ in range(pages)]

    @classmethod
    def from_photos_count(cls, photos_count: int):
        return cls(math.ceil(photos_count / cls.PAGE_CAPACITY))
    
    def add_photo(self, label: str):
        for index in range(len(self.photos)):
            if len(self.photos[index]) < self.PAGE_CAPACITY:
                self.photos[index].append(label)

                return f"{label} photo added successfully on page {index + 1} slot {len(self.photos[index])}"
        else:
            return 'No more free slots'
        
    def display(self):
        divider = '-' * 11

        result = [divider]

        for page in self.photos:
            result.append(('[] ' * len(page)).strip())

            result.append(divider)

        if len(result) == 1:
            result.append(divider)

        return '\n'.join(result)
    


album = PhotoAlbum(2)

print(album.add_photo("baby"))
print(album.add_photo("first grade"))
print(album.add_photo("eight grade"))
print(album.add_photo("party with friends"))
print(album.photos)
print(album.add_photo("prom"))
print(album.add_photo("wedding"))

print(album.display())
