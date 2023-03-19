from project.beverage.hot_beverage import HotBeverage
from project.food.soup import Soup
from project.beverage.beverage import Beverage
from project.product import Product


product = Product("coffee", 2.5)
print(product.__class__.__name__)
print(product.name)
print(product.price)
beverage = Beverage("coffee", 2.5, 50)
print(beverage.__class__.__name__)
print(beverage.__class__.__bases__[0].__name__)
print(beverage.name)
print(beverage.price)
print(beverage.milliliters)
soup = Soup("fish soup", 9.90, 230)
print(soup.__class__.__name__)
print(soup.__class__.__bases__[0].__name__)
print(soup.name)
print(soup.price)
print(soup.grams)

hot_beverage = HotBeverage('coffee', 3.50, 300)




# Product
# coffee
# 2.5
# Beverage
# Product
# coffee
# 2.5
# 50
# Soup
# Starter
# fish soup
# 9.9
# 230
