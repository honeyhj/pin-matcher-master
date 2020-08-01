document.getElementById('generate-btn').addEventListener('click', function () {
    document.getElementById('generatePin').value = Math.floor(1000 + Math.random() * 9000);
})

function inputPin(x) {
    document.getElementById('display').value += x;
}

function back() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.substr(0, displayValue.length - 1);
}

function submit() {
    var generatePin = document.getElementById('generatePin').value;
    var display = document.getElementById('display').value;
    if (generatePin == false) {
        alert("Please generate your 4-digit Pin First");
    } else if (display == false) {
        alert("It's empty! Please enter your 4-digit pin first");
    } else if (generatePin == display) {
        document.getElementById('success').style.display = 'block';
    } else {
        generatePin !== display;
        document.getElementById('error').style.display = 'block';
    }
}
document.getElementById('submitBtn').addEventListener('click', function () {
    var submitBtn = document.getElementById('submitBtn').value;
    var submitBtnNum = parseFloat(submitBtn);
    submitBtnNum = document.getElementById('submitBtn').value = submitBtnNum - 1;
    if (submitBtnNum >= 2) {
        document.getElementById('actionLeft').innerText = '2-action-left';
    } else if (submitBtnNum >= 1) {
        document.getElementById('actionLeft').innerText = '1-action-left';
    } else {
        submitBtnNum >= 0;
        document.getElementById('actionLeft').innerText = '0-action-left';
        alert('You are hacker! I know that. So it is ( disappear ) now. he he he he !!!!');
        this.style.display = "none";
    }
})