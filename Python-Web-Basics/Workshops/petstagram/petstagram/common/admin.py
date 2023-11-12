from django.contrib import admin

from petstagram.common.models import Comments, Like


@admin.register(Comments)
class CommentAdmin(admin.ModelAdmin):
    pass


@admin.register(Like)
class LikeAdmin(admin.ModelAdmin):
    pass
