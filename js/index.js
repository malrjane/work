let mainArr = document.querySelectorAll('.menu_article');
  
          let arr = document.querySelectorAll('.menu_drinks_food');
          Array.from(mainArr).forEach((btn) => {
            btn.addEventListener('click', (event) => {
              event.preventDefault();
              Array.from(arr).forEach((e) => {e.classList.remove('hidden');})
            });
          });