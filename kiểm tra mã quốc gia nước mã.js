function checkTheCode(str) {
    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (regexp.test(str)) {
        return true;
    }
    return false;
}
var zipcode = prompt("nhập ma");
alert(checkTheCode(zipcode));

