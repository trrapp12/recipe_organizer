
def parrot_trouble(talking, hour):

    if (talking is True and (hour < 7 or > 20)):
        return True

    else:
        return False

print parrot_trouble(True, 6)
print parrot_trouble(True, 7)
print parrot_trouble(False, 6)