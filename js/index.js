function writeDate() {
    var lastmoddate = new Date(document.lastModified);
    var mymoy = lastmoddate.getMonth();
    var mydom = lastmoddate.getDate();
    var myyear = lastmoddate.getFullYear();
    var monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var nameOfMonth = monthNames[mymoy];
    document.getElementById("dateMod").innerHTML = nameOfMonth + " " + mydom + ", " + myyear;
}