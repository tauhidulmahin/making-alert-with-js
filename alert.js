function closeBtn() {
    let btnElement = document.createElement('button');
    btnElement.className = 'close';
    btnElement.setAttribute('type', 'button');
    btnElement.setAttribute('data-dismiss', 'alert');

    let btnSpanElement = document.createElement('span');
    btnSpanElement.innerHTML = "&times;";
    btnElement.appendChild(btnSpanElement);

    return btnElement;
}

function message() {
    //let msg = document.createTextNode("Well done! You successfully read this important alert message.");
    // let msg2 = <span class="font-weight-semibold">Morning!</span> We're glad to <a href="#" class="alert-link">see you again</a> and wish you a nice day.;
    let msg = document.createElement("span");
    msg.className = "font-weight-semibold";
    msg.innerHTML = "Hello World!";

    let msg2 = document.createTextNode(" We're glad to ");
    msg.appendChild(msg2);

    let msg3 = document.createElement("a");
    msg3.setAttribute('href', '#');
    msg3.className = "alert-link";
    msg3.innerHTML = "see you again";
    msg.appendChild(msg3);

    let msg4 = document.createTextNode(" We're glad to ");
    msg.appendChild(msg4);

    let msg5 = document.createTextNode("and wish you a nice day.");
    msg.appendChild(msg5);

    return msg;
}

function alert(targetElement, type) {
    let divElement = document.createElement('DIV');
    divElement.classList.add('alert', 'border-0', 'alert-dismissible', type);

    let close = closeBtn();
    let alertMessage = message();
    divElement.appendChild(close);
    divElement.appendChild(alertMessage);

    targetElement.appendChild(divElement);
}

function getAlert() {
    document.querySelectorAll('[data-alert-type]').forEach(element => {
        const alertType = element.getAttribute('data-alert-type');

        alert(element, alertType);
    });
}
document.addEventListener('DOMContentLoaded', getAlert);