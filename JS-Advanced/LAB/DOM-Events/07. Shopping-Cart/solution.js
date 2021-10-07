function solve() {
   const buttons = Array.from(document.getElementsByClassName('add-product'));
   const result = document.getElementsByTagName('textarea')[0];
   const checkoutBtn = document.querySelector('.checkout');
   
   let productNames = [];
   let productPrice = 0;
   
   for (const button of buttons) {
      button.addEventListener('click', add);
   }
   checkoutBtn.addEventListener('click', onCheckout);


   function add(ev) {
      const product = ev.target.parentElement.parentElement;
      const title = product.querySelector('.product-title').textContent;
      const price = product.querySelector('.product-line-price').textContent;

      if (!productNames.includes(title)) {
         productNames.push(title);
      }
      productPrice += Number(price);

      result.value += `Added ${title} for ${price} to the cart.\n`
   }

   function onCheckout(ev) {
      result.value += `You bought ${productNames.join(', ')} for ${productPrice.toFixed(2)}.`;

      for (const button of buttons) {
         button.setAttribute("disabled", false);
      }
      checkoutBtn.setAttribute("disabled", false);
   }
}