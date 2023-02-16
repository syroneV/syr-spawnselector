$(function () {
    function display(bool) {
        if (bool) {
            $(".contenedor").show();
        } else {
            $(".contenedor").hide();
        }
    }

    display(false)

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
    })
   

   
    $("#first").click(function () {
       $.post('https://syr-choice/card_one', JSON.stringify({}));
       $.post('https://syr-choice/exit', JSON.stringify({}));  
    })
    $("#two").click(function () {
        $.post('https://syr-choice/card_two', JSON.stringify({}));
        $.post('https://syr-choice/exit', JSON.stringify({}));  
     })
    $("#three").click(function () {
        $.post('https://syr-choice/card_three', JSON.stringify({}));
        $.post('https://syr-choice/exit', JSON.stringify({}));
    })
})



const cards = document.querySelector(".contenedor");
const images = document.querySelectorAll(".card_img");
const backgrounds = document.querySelectorAll(".card_bg");

/* Ajustes de grados */
const range = 20;
const calcValue = (a, b) => (a/b*range-range/2).toFixed(1)

let timeout;
document.addEventListener('mousemove', ({x, y}) => {
  /* Cancela la petición de animación previamente programada */
	if (timeout) {window.cancelAnimationFrame(timeout);}

	timeout = window.requestAnimationFrame(() => {
		const yValue = calcValue(y, window.innerHeight);
		const xValue = calcValue(x, window.innerWidth);

		cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

		/* Aplicar por cada elemento */
		[].forEach.call(images, (image) => {
			image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
		});
		[].forEach.call(backgrounds, (background) => {
			background.style.backgroundPosition = `${xValue*.45}px ${-yValue*.45}px`;
		})
	})
    
}, false);