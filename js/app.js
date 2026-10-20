let buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
    btn.addEventListener('click' , () => {
        let color = btn.textContent.trim().toLocaleLowerCase();
        switch (color) {
            case 'blue' :
                document.body.style.backgroundColor = 'blue';
            break;
            // blue color
            case 'red' :
                document.body.style.backgroundColor = 'red';
            break;
            // red color
            case 'green' :
                document.body.style.backgroundColor = 'green';
            break;
            // green color      
            case 'pink' :
                document.body.style.backgroundColor = 'pink';
            break;
            // pink color
         
        }
    });
});

