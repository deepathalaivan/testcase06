Feature:AS a Customer,I want to be able to navigate the landing page so that i can view the information

    @jootza @jootzaLogin @jootzaverify
    Scenario: Customer is logged on jootza page
        Given I am on the jootza page
        And I enter Inputs for the form fields
            | InputName | InputValue |
            | username  | deepakalya |
            | password  | Demo1234   |
        And I click on "jootzaLogin"
        Then I should see "jootzaWelcomeMessage"

    @jootza @validCredentials @jootzaverify
    Scenario Outline: Customer is logged  into joota website automatically as a valid user
        Given I am logged on into jootza website as "<username>" with "<password>"

        Then I should see the approver name as "<Approver>"
        Examples:
            | username   | password | Approver         |
            | deepakalya | Demo1234 | deepa Approver   |
            | kavithas   | demo1234 | kavitha Approver |
            | Shanuser12 | demo1234 | Shan Approver    |
    @jootza @account
    Scenario:Customer is Logged on into jootza website and tries to get account informatiom
        Given I am logged  into jootza website with inputfields
            | InputName | InputValue |
            | username  | deepakalya |
            | password  | Demo1234   |
        When I click on "jootzaAccount"
        And I enter multiple inputs for the form fields
            | InputName      | InputValue       |
            | jootzaDepartment     | Information tech |
            | jootzaOrganization   | AA               |
            | jootzaCompanyAddress | 1234,Main st     |
            | jootzaCity           | Newyork          |
            | jootzaState          | Ny               |
            | jootzaZip            | 11011            |
        And I click on "SAVE"
        Then I should see "msg updated successfully"
