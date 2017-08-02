# This controller is an instance of the SecureLogin class
controller = secure_login(Frontend)

# Usage:
# - controller.new
# - controller.login!
# - controller.logged_in?
# - controller.admin?

describe "Your solution" do

  # Test your solution here

  it "should return an object" do
    Test.expect(!controller.new.given_credentials.nil?, "Your method must not return nil.")
  end

  it "should return a username" do
    Test.expect(controller.new.given_credentials.respond_to?(:username),
      "The return value of your method must respond to 'username'.")
  end

  it "should return a password" do
    Test.expect(controller.new.given_credentials.respond_to?(:password),
      "The return value of your method must respond to 'password'.")
  end

end

# This is to test if your exploit worked
describe "Subsequent illegitimate login attempts" do

  before do
    # The controller calls given_credentials internally
    controller.new.login!

    # The class subsequent_login helps you check how
    # your hack affects subsequent login attempts.
    #
    # It uses a sane implementation of the given_credentials
    # method internally (not your implementation).
    #
    # Usage: subsequent_login(username, password)
    @user = subsequent_login('admin', 'h4xx0r3d').new
    @user.login!
  end

  it "should log in successfully" do
    Test.expect(@user.logged_in?)
  end

  it "should gain admin rights" do
    Test.expect(@user.admin?)
  end

end
