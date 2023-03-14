class ProductRepository:
    def __init__(self) -> None:
        self.products: list = []

    def add(self, product):
        self.products.append(product)

    def find(self, product_name: str):
        for product in self.products:
            if product.name == product_name:
                return product
            
    def remove(self, product_name: str):
        product = self.find(product_name)

        if product:
            self.products.remove(product)

    def __repr__(self) -> str:
        return '\n'.join([f'{product.name}: {product.quantity}' for product in self.products])