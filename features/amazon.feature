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