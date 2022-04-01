const interface = require('readline-sync');


do {
    console.log("1. - suma");
    console.log("2. - resta");
    console.log("3. - multipliacion");
    console.log("4. - division");
    console.log("5. - salir");
    response = interface.question("que operacion deseas realizar escribe el numero: ")

    if (response != "5") {
        const primernumero = interface.question("ingresa el primer numero: ");
        const segundonumero = interface.question("ingresa el segundo numero: ");

        switch (response) {
            case "1":
                var result = parseInt(primernumero) + parseInt(segundonumero);
                console.log("el resultado es: ", result);

                break;

            case "2":
                var result = parseInt(primernumero) - parseInt(segundonumero);
                console.log("el resultado es: ", result);

                break;

            case "3":
                var result = parseInt(primernumero) * parseInt(segundonumero);
                console.log("el resultado es: ", result);

                break;

            case "4":
                var result = parseInt(primernumero) / parseInt(segundonumero);
                console.log("el resultado es: ", result);

                break;
            default:
                break;

        }
    }
} while (response != "5");