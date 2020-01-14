var $firstName = $("#firstName");
var $lastName = $("#lastName");
var $email = $("#email");
var $password = $("#password");
var $submitBtn = $("#submit");

var API = {
  saveUser: function(register) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/register",
      data: JSON.stringify(register)
    });
  }
};

// handleFormSubmit is called whenever we submit a new User
// Save the new review to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var register = {
    firstName: $firstName.val().trim(),
    lastName: $lastName.val().trim(),
    email: $email.val().trim(),
    password: $password.val().trim()
  };

  if (!register.firstName) {
    $firstName.after('<span class="error">This field is required</span>');
    return;
  }

  if (!register.lastName) {
    $lastName.after('<span class="error">This field is required</span>');
    return;
  }

  if (!register.email) {
    $email.after('<span class="error">This field is required</span>');
    return;
  } else {
    function validEmail(email) {
      var regEx = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
      return regEx.test(email);
    }
    if (!validEmail(email)) {
      $("#email").after('<span class="error">Enter a valid email</span>');
    }
  }

  if (register.password < 8) {
    $password.after(
      '<span class="error">Password must be at least 8 characters long</span>'
    );
    return;
  }
  API.saveUser(register).then(function() {
    console.log("User successfully registered!");
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);

// =====================================================

// var $firstName = $("#firstName");
// var $lastName = $("#lastName");
// var $email = $("#email");
// var $password = $("#password");
// var $submitBtn = $("#submit");

// var API = {
//   saveUser: function(register) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/register",
//       data: JSON.stringify(register)
//     });
//   }
// };

// // handleFormSubmit is called whenever we submit a new User
// // Save the new review to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var register = {
//     firstName: $firstName.val().trim(),
//     lastName: $lastName.val().trim(),
//     email: $email.val().trim(),
//     password: $password.val().trim()
//   };

//   if (!register.firstName) {
//     alert("You must enter a first name");
//     return;
//   }

//   if (!register.lastName) {
//     alert("Please enter a last name");
//     return;
//   }

//   if (!register.email) {
//     alert("Please enter an email address");
//     return;
//   }

//   if (IsEmail(email) === false) {
//     $("#invalid_email").show();
//     return false;
//   }
//   function IsEmail(email) {
//     var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     if (!regex.test(email)) {
//       return false;
//     } else {
//       return true;
//     }
//   }

//   if (!register.password) {
//     alert("Please enter a password");
//     return;
//   }
//   API.saveUser(register).then(function() {
//     console.log("User successfully registered!");
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
