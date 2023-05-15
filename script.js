let formdata = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male"
}


let workingstatusEl = document.getElementById("status")
let gendermaleEl = document.getElementById("genderMale")
let genderfemaleEl = document.getElementById("genderFemale")

workingstatusEl.addEventListener("change", function(event) {
    formdata.status = event.target.value
})

gendermaleEl.addEventListener("change", function(event) {
    formdata.gender = event.target.value
})

genderfemaleEl.addEventListener("change", function(event) {
    formdata.gender = event.target.value

})







let myFormEl = document.getElementById("myForm");

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

function validateFromdata(formdata) {
    let {
        name,
        email
    } = formdata
    if (name === "") {
        nameErrMsgEl.textContent = "*Required"
    }
    if (email === "") {
        emailErrMsgEl.textContent = "*Required"
    }

}


nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
    formdata.name = event.target.value
});

emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
    formdata.email = event.target.value
});

function submitformdata(formdata) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f"
        },
        body: JSON.stringify(formdata)
    };

    let url = "https://gorest.co.in/public-api/users"

    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsondata) {
            console.log(jsondata)
        });

}

let capText = document.getElementById("captchaText")
let capEnter = document.getElementById("captchaEnter")

let refresh = document.getElementById("refreshBtn")
let check = document.getElementById("checkBtn")

let res = document.getElementById("result")

let chars = "123456789ABCDEFGHIJKKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

let captcha

function newCaptcha() {
    captcha = ""
    for (i = 0; i < 5; i++) {
        let index = Math.floor(Math.random() * chars.length);
        captcha = captcha + chars[index]
    }
    capText.value = captcha
}


function validating() {
    if (captcha === capEnter.value) {
        res.textContent = "Valid Captcha !!! Success"


    } else {
        res.textContent = ""
        alert("Invalid Captcha !!! Try again")

        capEnter.value = ""

    }
}
newCaptcha()

refresh.onclick = newCaptcha;

check.onclick = validating;


myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFromdata(formdata);
    submitformdata(formdata)



});