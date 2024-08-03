export default function form(inputs, alerts) {
    const $inputs = document.querySelectorAll(inputs),
    $form = document.querySelector(".form"),
    $alerts = document.querySelectorAll(alerts),
    $submit = document.querySelector(".submit"),
    $affair = document.querySelector(".form > .input:nth-of-type(3)"),
    $modalLoader = document.querySelector(".modal-loader"),
    $sentSuccessfullyMessage = document.querySelector(".sent-successfully-message"),
    validations = [];

    $submit.setAttribute("disabled", true);

    $inputs.forEach((element, index) => {
        validations.push({
            input: element,
            regularExpretion: new RegExp(element.getAttribute("pattern")),
            alert: $alerts[index]
        });
    });

    validations.forEach(element => {
        element.input.addEventListener("input", updateValue);

        function updateValue(e) {
            if (element.regularExpretion.test(e.srcElement.value)) {
                if (!element.input.classList.contains("valid")) {
                    element.input.classList.add("valid");

                    checkInputsWithValidClass();
                }

                if (!element.alert.classList.contains("alert-hidden")) element.alert.classList.add("alert-hidden");
            }
            else if (!element.regularExpretion.test(e.srcElement.value)) {
                if (element.input.classList.contains("valid")) {
                    element.input.classList.remove("valid");

                    checkInputsWithValidClass();
                }

                if (element.alert.classList.contains("alert-hidden")) element.alert.classList.remove("alert-hidden");
            }
        }
    });

    $affair.addEventListener("input", e => {
        $affair.classList.add("valid");

        checkInputsWithValidClass();
    });

    function checkInputsWithValidClass() {
        let saveInputsWithValidClass = [];

        $inputs.forEach(input => {
            if (input.classList.contains("valid")) saveInputsWithValidClass.push(input);
        });

        if (saveInputsWithValidClass.length === 3) $submit.removeAttribute("disabled");
        else $submit.setAttribute("disabled", true);
    }

    document.addEventListener("submit", e => {
        $modalLoader.classList.remove("dnone");

        setTimeout(() => {
            $modalLoader.classList.add("dnone");

            $sentSuccessfullyMessage.classList.remove("dnone");

            $form.reset();

            $submit.setAttribute("disabled", true);

            $inputs.forEach(input => {
                input.classList.remove("valid");
            })

            $affair.classList.remove("valid");

            setTimeout(() => {
                $sentSuccessfullyMessage.classList.add("dnone");
            }, 3000);
        }, 3000);
    })
}