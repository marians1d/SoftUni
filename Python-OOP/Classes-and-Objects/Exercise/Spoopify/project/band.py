from typing import List
from project.album import Album


class Band:
    def __init__(self, name: str) -> None:
        self.name: str = name
        self.albums: List[Album] = []

    def add_album(self, album: Album) -> str:
        if album in self.albums:
            return f"Band {self.name} already has {album.name} in their library."
        
        self.albums.append(album)

        return f"Band {self.name} has added their newest album {album.name}."
    
    def remove_album(self, album_name: str) -> str:
        album = self.find_album(album_name)

        if album is None:
            return f"Album {album_name} is not found."

        if album.published:
            return f"Album has been published. It cannot be removed."
        
        self.albums.remove(album)

        return f"Album {album.name} has been removed."
        
    def find_album(self, album_name: str):
        for album in self.albums:
            if album.name == album_name:
                return album
            

        return None
    
    def details(self) -> str:
        message = []

        message.append(f'Band {self.name}')

        for album in self.albums:
            message.append(album.details())

        return '\n'.join(message)
