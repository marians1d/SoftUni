from song import Song
from band import Band
from album import Album



album = Album("The Sound of Perseverance")
song = Song("Scavenger of Human Sorrow", 6.56, False)
album.add_song(song)
message = album.remove_song("Scavenger of Human Sorrow")

print(message)
