Feature:As a Target customer I want to be able to navigate the page so that I can view the information

    @target @targetlogin
    Scenario:Customer is logged on Target page
        Given I am on the Target page
        When I click on "targetsigninbutton"
        And I click on "targetsiginbutton1"
        And I enter Inputs for the form fields
            | InputName | InputValue                    |
            | username  | zasaumeveura-4223@yopmail.com |
            | password  | bddtest1                      |
        And I click on "targetLogin"
        Then I should see "thetargetpage"