let btnAction = document.querySelectorAll(".filter-btn .list li");
console.log(btnAction);

let items = document.querySelectorAll(".item-img");
console.log(items);

btnAction.forEach(function(el) {
      el.addEventListener('click', function() {
            console.log(el);
            document.querySelector('.list li.active').classList.remove("active");
            el.classList.add("active");
            let target = el.dataset.list ;
            console.log(target);
            items.forEach(function(item) {
                  item.classList.add("hidden");
                  item.classList.remove("visible");
                  if(item.dataset.target == target || target =="all") {
                        item.classList.add("visible");
                        item.classList.remove("hidden");

                  }
            })
      })
})











         
