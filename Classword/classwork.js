const output = document.getElementById("output");

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

        output.innerHTML += "FOOBAR <br>";

    }

    else if (i % 3 === 0) {

        output.innerHTML += "FOO <br>";

    }

    else if (i % 5 === 0) {

        output.innerHTML += "BAR <br>";

    }

    else {

        output.innerHTML += i + "<br>";

    }

}