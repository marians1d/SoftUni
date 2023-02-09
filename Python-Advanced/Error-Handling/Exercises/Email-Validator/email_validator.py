class NameTooShortError(Exception):
    pass


class MustContainAtSymbolError(Exception):
    pass


class InvalidDomainError(Exception):
    pass


NAME_LENGTH = 4
VALID_DOMAINS = ['com', 'bg', 'org', 'net']

email = input()
while email != 'End':
    if '@' not in email:
        raise MustContainAtSymbolError('Email must contain @')

    name, server = email.split('@')

    if len(name) <= NAME_LENGTH:
        raise NameTooShortError('Name must be more than 4 characters')

    server_sections = server.split('.')

    if server_sections[-1] not in VALID_DOMAINS:
        raise NameTooShortError('Domain must be one of the following: .com, .bg, .org, .net')

    print('Email is valid')\

    email = input()
