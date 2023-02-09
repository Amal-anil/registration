function validate() {
    let x = document.getElementById("fname").value;
    numb = document.getElementById("num").value;
    emailid = document.getElementById("email").value;
    sel = document.getElementById("city").value;
    dt = document.getElementById("date").value;

    z = /^[a-z A-z]{2,15}$/;
    a = /^[0-9]{1,3}$/;
    e = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (x == "") {
        alert("please enter the name field");
        return false;
    } else if (!z.test(x)) {
        alert("enter the correct alphebet");
        return false;
    } else if (!e.test(emailid)) {
        alert("enter the correct email id");
        return false;
    } else if (numb == "") {
        alert(" please enter the number of person");
        return false;
    } else if (!a.test(numb)) {
        alert("enter a number in person field");
        return false;
    } else if (sel == 0) {
        alert("please select the place");
        return false;
    } else if (dt == "") {
        alert("enter the date");
        return false;
    } else if (
        document.getElementById("boarding").checked == false &&
        document.getElementById("fooding").checked == false &&
        document.getElementById("sight").checked == false
    ) {
        alert("please tick the check box");
        return false;
    } else if (
        (document.getElementById("term").checked == false) &
        (document.getElementById("term1").checked == false)
    ) {
        alert("please select the term and condition");
        return false;
    } else {
        return true;
    }
}
