(function () {
    document.querySelector( "#burgerMenu" )
        .addEventListener( "click", function() {
            this.classList.toggle( "active" );
            document.querySelector(".menuItems").classList.toggle( "responsive" );
        });

    document.querySelector( ".addToCard" )
        .addEventListener( "click", function() {
            var values = document.querySelectorAll('input[type="radio"]');
            var obj = {};

            for (var i = 0, length = values.length; i < length; i++) {
                if (values[i].checked) {
                    switch (values[i].name) {
                        case 'color':
                            obj.color = values[i].value;
                            break;
                        case 'gender':
                            obj.gender = values[i].value;
                            break;
                        case 'size':
                            obj.size = values[i].value;
                            break;
                    }
                }
            }
            console.log(JSON.stringify(obj));
        });
})();