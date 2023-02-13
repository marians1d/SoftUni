def even_odd_filter(**kwargs):
    kwargs = {k: v for k, v in kwargs.items() if k in ('even', 'odd')}

    if 'even' in kwargs:
        kwargs['even'] = [x for x in kwargs['even'] if x % 2 == 0]
    if 'odd' in kwargs:
        kwargs['odd'] = [x for x in kwargs['odd'] if x % 2 != 0]

    return kwargs

print(even_odd_filter(
    odd=[1, 2, 3, 4, 10, 5],
    even=[3, 4, 5, 7, 10, 2, 5, 5, 2],
))