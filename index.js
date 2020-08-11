// waiting load DOM
window.addEventListener('DOMContentLoaded',()=>{
    var listItem = document.querySelector('.cart__add-produce');
    var btnAdd = document.querySelectorAll('.btn-add');
    var currentPrice = document.querySelector('.cart__total-price');
    //Add event add to item
    for (var i =0; i<btnAdd.length;i++){
        btnAdd[i].addEventListener('click',(e)=>onAddToCart(e))
    }
    function onRemoveCart(e){
        e.target.parentElement.parentElement.remove();
        onUpdatePrice();
    }
    function onChageValue(e){
        if(e.target.value<1){
            e.target.value=1;
        }
        onUpdatePrice();
    }
    function onUpdatePrice(e){
        var price = 0;
        var currentItem = document.querySelectorAll('.cart__add-produce-item');
        for (var i=0; i<currentItem.length;i++){
            price+=parseFloat(currentItem[i].querySelector('.car__add-produce-item-price').innerText.replace('$',''))*parseInt(currentItem[i].querySelector('.car__add-produce-item-quantity').value)
        };
        console.log(price);
        price=price.toFixed(2);
        currentPrice.innerText=`$`+price;
    }
    function onAddToCart(e){
        var currentItem = document.querySelectorAll('.cart__add-produce-item');
        var element = e.target.parentElement.parentElement;
        var src = element.querySelector('img').getAttribute('src');
        var title = element.querySelector('.produce__item--title').innerText;
        var price = element.querySelector('span').innerText;
        for (var i = 0;i <currentItem.length;i++){
            if(title==currentItem[i].querySelector('.car__add-produce-item-name').innerText){
                currentItem[i].querySelector('.car__add-produce-item-quantity').value = parseFloat(currentItem[i].querySelector('.car__add-produce-item-quantity').value) +1;
                return;
            }
        }
            
                var newItem = document.createElement('li');
                newItem.classList.add('cart__add-produce-item');
                newItem.innerHTML=`  <div class="cart__detail--item center">
                                        <img src="${src}" alt="" class="cart__add-produce-item-img">
                                        <span class="car__add-produce-item-name">${title}</span>
                                    </div>
                                    <div class="cart__detail--price center">
                                        <span class="car__add-produce-item-price">${price}</span>
                                    </div>
                                    <div class="cart__detail--quantity center">
                                        <input type="number" class="car__add-produce-item-quantity" value=1>
                                        <button class="car__add-produce-item-remove">Remove</button>
                                    </div>`
                 listItem.insertBefore(newItem,listItem.childNodes[0]);
                 newItem.querySelector('.car__add-produce-item-remove').addEventListener('click',(e)=>onRemoveCart(e));
                 newItem.querySelector('.car__add-produce-item-quantity').addEventListener('change',(e)=>onChageValue(e));
                 onUpdatePrice();

    }
})