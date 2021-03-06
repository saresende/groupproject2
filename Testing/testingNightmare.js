var Nightmare = require("nightmare");

describe("Climate", function() {

  var login = "#btnSignin";

  it(" checking login", function(done) {
    // ID for the login button.
    Nightmare({ show: true })
      .goto("http://localhost:4000/")
      // Just to be safe.
      .wait(login)
      .wait(5000)
      // Click the login button.
      .click(login)
      // Evaluate the title
      .evaluate(function() {
        throw new Error('I\'m an error!');
        return document.title;
      })

      // Asset the title is as expected
      .then(function success(title) {
        expect(title).toBe("Log in | Climate");
        done();
      }, function error(err) {
        throw err;
      });
  }, 30000);
});

  //===============================================

  /*
  
  var login = "#header__sign-in";
  it("should present a link to course catalog after login", function(done) {
    Nightmare({ show: true })
      .goto("https://codecademy.com")
      // Just to be safe.
      .wait(login)
      // Click the login button.
      .click(login)
      // Wait for the login input
      .wait("#user_login")
      // Actually log in
      .type("#user_login", "ResilD")
      .type("#user_password", "dummy*password")
      .click("#user_submit")
      // Evaluate the following selector
      .evaluate(function() {
        return document.querySelector("a[href='/learn/all']");
      })
      // Assert the catalog exists
      .then(function(catalog) {
        expect(catalog).not.toBe(undefined);
        done();
      });
  }, 30000);

  it("should ", function() {
    throw new Error(
      "Failed on purpose, just to make the Mocha output more interesting."
    );
  });
});

*/