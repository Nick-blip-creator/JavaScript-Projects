function validateForm() {
    var x = document.forms["myForm"]["fname", "lname", "email"].value;
    if (x == "") {
      alert("Please fill out the form entirely");
      return false;
    }
  }