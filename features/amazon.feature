Feature:As a Customer I want to be able to navigate amazon page so that i can view information
    @amazon @amazonlogin
    Scenario:Customer is displayed with amazon.com landing page
        Given I am on amazon page
        When I click on "amazonsignin"
        And I enter single fieldvalue
            | InputName | InputValue               |
            | email     | deepathalaivan@gmail.com |
        And I click on "amazoncontinue"
        And I enter single fieldvalue
            | InputName | InputValue |
            | password  | deepa123   |
        And I click on "amazonsigninSubmit"
        Then I should see "theamazonmessage"

    @amazon @newaccount
    Scenario:Creating new customer in amazon with exciting email id so that it shows error msg
        Given I am on amazon page
        When I click on "amazonsignin"
        And I click on "amazoncreateaccount"
        And I enter inputs for login
            | InputName     | InputValue               |
            | customerName  | deepa                    |
            | email         | deepathalaivan@gmail.com |
            | password      | deepa123                 |
            | passwordCheck | deepa123                 |
        And I click on "amazoncontinuebutton"
        Then I should see "amazonerrormsg"