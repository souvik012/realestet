document.addEventListener('DOMContentLoaded', () => {

  const elements  = document.querySelectorAll(".op1,.op2,.op3,.op4,.op5,.op6,.op7");
  console.log("text is coming");



 elements.forEach(element => {
    // Add event listeners for mouseover and mouseout events to each 'element'
    element.addEventListener('mouseover', () => {
        // Change text color to blue (#0060FFFF) on mouseover
        element.style.color = "#0060FFFF";
        
    });

    element.addEventListener('mouseout', () => {
        // Reset text color to default (inherit) on mouseout
        element.style.color = "";
    });
 });




    const buy = document.getElementById('buy');
    const rent = document.getElementById('rent');
    const sell = document.getElementById('sell');
    const bud  = document.getElementById('bud');



    const options = [buy,rent,sell];
    options.forEach(option => {
        option.addEventListener('change', () => {
            if (option.checked) {
                uncheckOthers(option);
            }
        });
    });

    function uncheckOthers(selectedOption) {
        options.forEach(option => {
            if (option !== selectedOption) {
                option.checked = false;
            }
        });
    }
    

     function hideOptions(checkboxes) {
         checkboxes.forEach(checkbox => {
             checkbox.parentElement.classList.add('hidden');
         });
     }

      function showAllOptions() {
          options.forEach(option => {
              option.parentElement.classList.remove('hidden');
          });
      }
      
 const max = getElementById(maxBudget);
 const min = getElementById(minBudget);
    [max, min].forEach(input => {
      input.addEventListener('input', () => {
         input.value = input.value.replace(/[^0-9]/g, '');
        });
    });

    
    let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () =>{
   menu.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () =>{
      if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
   };
});

document.querySelectorAll('.view-property .details .thumb .small-images img').forEach(images =>{
   images.onclick = () =>{
      src = images.getAttribute('src');
      document.querySelector('.view-property .details .thumb .big-image img').src = src;
   }
});

document.querySelectorAll('.faq .box-container .box h3').forEach(headings =>{
   headings.onclick = () =>{
      headings.parentElement.classList.toggle('active');
   }
});
 

});


