let cardXM = document.querySelectorAll('.card') || [];
let filterBox = document.querySelector('#filterSelect');
let orderList = [];
let amountList = [];
setTimeout(()=>{
    cardXM = document.querySelectorAll('.card') || [];
    cardXM.forEach((elm)=>{
        let Addcount = 1
        let btnToAdd = elm.querySelector('.addBtn');
        let btnToRemove = elm.querySelector('.removeBtn');
        btnToAdd.addEventListener('click', ()=>{
           if(Addcount == 11){
            alert("You have reached the limit")
           }
           else{
            btnToAdd.innerHTML=`${Addcount} Added`;
            btnToRemove.style.display='block';
            Addcount++
            amountList.push(elm.querySelector('.product-price').textContent.replace('$', ''))
            localStorage.setItem('amount', JSON.stringify(amountList))
            if(!orderList.includes(elm.querySelector('.product-name').textContent)){
                orderList.push(elm.querySelector('.product-name').textContent)
                console.log(orderList)
                localStorage.setItem('list', JSON.stringify(orderList))
            }
           }
        });

        btnToRemove.addEventListener('click', ()=>{
            Addcount--
            if(Addcount != 0){
                btnToAdd.innerHTML=`${Addcount} Added`
                amountList.splice(amountList.indexOf(elm.querySelector('.product-price').textContent.replace('$', '')), 1)
                console.log(amountList.indexOf(elm.querySelector('.product-price').textContent))
                localStorage.setItem('amount', JSON.stringify(amountList))
            }
            else{
                btnToAdd.innerHTML='Add';
                btnToRemove.style.display='none';
                if(orderList.includes(elm.querySelector('.product-name').textContent)){
                    console.log(orderList.indexOf(elm.querySelector('.product-name').textContent))
                    orderList.splice(orderList.indexOf(elm.querySelector('.product-name').textContent), 1)
                    localStorage.setItem('list', orderList)
                }
            };
        });
    });

    filterBox.addEventListener('change', ()=>{
        console.log(filterBox.value)
        if(filterBox.value == 'veg'){
            let specificCard = document.querySelectorAll('[data-target-Veg]');
            cardXM.forEach((crrE)=>crrE.style.display='none')
            specificCard.forEach((crrX)=>{crrX.style.display='flex'})
        }
        else if(filterBox.value == 'non'){
            let specificCard = document.querySelectorAll('[data-target-Non]');
            cardXM.forEach((crrE)=>crrE.style.display='none')
            specificCard.forEach((crrX)=>{crrX.style.display='flex'})
        }
        else{
            cardXM.forEach((crrE)=>crrE.style.display='flex')
        }
    });

}, 850)

