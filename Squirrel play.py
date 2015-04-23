# __author__ = 'trevor'
#
# The squirrels in Palo Alto spend most of the day playing. In particular, they play if the
# temperature is between 60 and 90 (inclusive). Unless it is summer, then the upper limit is
# 100 instead of 90. Given an int temperature and a boolean is_summer, return True if the
# squirrels play and False otherwise.
#


def squirrel_play(temp_range, summer):
    if temp_range(90, 101)and summer is True:
        return True
    elif temp_range(60, 91) and summer is False:
        return True
    else:
        return False

print squirrel_play(70, False)
print squirrel_play(95, False)
print squirrel_play(95, True)

