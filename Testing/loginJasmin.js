



describe("Signin validation in Climate project", function() {

 
it("should validate zubaer",function(){
var result = isSignin("zubaer");
expect(result).toBe(true);
});

 
it("should not validate zubaer",function(){
var result = isSignin_valid("Zubaer123");
expect(result).not.toBe(true);
});
});

//=====================Another Test Case==============================


describe("localhost:4000", function() {
  beforeEach(function() {
    
    window.location.href = "localhost:4000";
   
    setupPage();
  });
 
  it("shows a login form", function() {
    var $signin = $("#signin");
    expect($signin.length).toEqual(1);
  });
 
  describe("fill out and submitting the login form", function() {
    beforeEach(function() {
      $("#signinDone1.name").val("zubaer");
      $("#signinDone2.password").val("zubaer123");
      $("#signinDone3").click();
      $("#signinDone3").submit();
    });
 
    it("sends a POST /login with the name and password", function() {
      // Using http://github.com/pivotal/jasmine-ajax 
      expect(ajaxRequests.length).toEqual(1);
      expect(mostRecentAjaxRequest.method).toEqual("POST");
      expect(mostRecentAjaxRequest.url).toEqual("/login");
      expect(JSON.parse(mostRecentAjaxRequest.params)).toEqual({name: "localhost:4000", password: "12345"});
    });
 
    describe("POST /login 200", function() {
      beforeEach(function() {
        mostRecentAjaxRequest.response({
          status: 200,
          responseText: JSON.stringify({
            name: "zubaer",
            email: "localhost:4000"
          })
        });
      });
 
      it("redirects to the home page", function() {
        expect(window.location.href).toEqual("/");
      });
    });
 
    describe("POST /login 403", function() {
      beforeEach(function() {
        mostRecentAjaxRequest.response({
          status: 403,
          responseText: JSON.stringify({
            message: "Invalid email/password combination"
          })
        });
      });
 
      it("does not redirect to the home page", function() {
        expect(window.location.href).toEqual("http://yoursite.com/login");
      });
 
      it("shows an error", function() {
        expect($("#login .error").text()).toContain("Invalid email/password combination");
      });
    });
  });
});