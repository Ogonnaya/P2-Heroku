$(document).ready(function() {
  // Function for Switching Tabs
  $(function() {
    // Log In to Register
    $("#login-form-link").click(function(e) {
      $("#login-form")
        .delay(100)
        .fadeIn(100);
      $("#register-form").fadeOut(100);
      $("#register-form-link").removeClass("active");
      $(this).addClass("active");
      e.preventDefault();
    });

    // Register to Log In
    $("#register-form-link").click(function(e) {
      $("#register-form")
        .delay(100)
        .fadeIn(100);
      $("#login-form").fadeOut(100);
      $("#login-form-link").removeClass("active");
      $(this).addClass("active");
      e.preventDefault();
    });
  });

  // ============================================================

  //   var $firstName = $("#firstName");
  //   var $lastName = $("#lastName");
  //   var $email = $("#email");
  //   var $password = $("#password");
  //   var $submitBtn = $("#submit");

  //   var API = {
  //     saveUser: function(register) {
  //       return $.ajax({
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         type: "POST",
  //         url: "api/register",
  //         data: JSON.stringify(register)
  //       });
  //     }
  //   };

  //   // handleFormSubmit is called whenever we submit a new User
  //   // Save the new user to the db and refresh the list
  //   var handleFormSubmit = function(event) {
  //     event.preventDefault();

  //     var register = {
  //       firstName: $firstName.val().trim(),
  //       lastName: $lastName.val().trim(),
  //       email: $email.val().trim(),
  //       password: $password.val().trim()
  //     };

  //     if (!register.firstName) {
  //       $firstName.after('<span class="error">This field is required</span>');
  //     }

  //     if (!register.lastName) {
  //       $lastName.after('<span class="error">This field is required</span>');
  //     }

  //     if (!register.email) {
  //       $email.after('<span class="error">This field is required</span>');
  //     } else {
  //       function validEmail(email) {
  //         var regEx = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
  //         return regEx.test(email);
  //       }
  //       if (!validEmail(email)) {
  //         $("#email").after('<span class="error">Enter a valid email</span>');
  //       }
  //     }

  //     if (register.password < 8) {
  //       $password.after(
  //         '<span class="error">Password must be at least 8 characters long</span>'
  //       );
  //     }
  //     API.saveUser(register).then(function() {
  //       console.log("User successfully registered!");
  //     });
  //   };

  //   // Add event listeners to the submit and delete buttons
  //   $submitBtn.on("click", handleFormSubmit);

  // Working Validation ============================================================

  //   //Function for Register form validation

  //   $("#register-form").submit(function(e) {
  //     e.preventDefault();
  //     var firstName = $("#firstName")
  //       .val()
  //       .trim();
  //     var lastName = $("#lastName")
  //       .val()
  //       .trim();
  //     var email = $("#email")
  //       .val()
  //       .trim();
  //     var password = $("#password")
  //       .val()
  //       .trim();

  //     $(".error").remove();

  //     if (firstName.length < 1) {
  //       $("#firstName").after(
  //         '<span class="error">This field is required</span>'
  //       );
  //     }
  //     if (lastName.length < 1) {
  //       $("#lastName").after('<span class="error">This field is required</span>');
  //     }
  //     if (email.length < 1) {
  //       $("#email").after('<span class="error">This field is required</span>');
  //     } else {
  //       var regEx = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
  //       var validEmail = regEx.test(email);
  //       if (!validEmail) {
  //         $("#email").after('<span class="error">Enter a valid email</span>');
  //       }
  //     }
  //     if (password.length < 8) {
  //       $("#password").after(
  //         '<span class="error">Password must be at least 8 characters long</span>'
  //       );
  //     }
  //   });
});
