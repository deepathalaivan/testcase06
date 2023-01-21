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

    @amazon @searchbox
    Scenario: Customer is logged on page and search the items
        Given I am on amazon page
        When I click on "searchbox"
        And I enter single fieldvalue
            | InputName      | InputValue          |
            | field-keywords | Apple8 watch series |
        And I click on "searchbuttonamazon"
        Then I should see "result"

    @amazon @bestseller
    Scenario:Customer is logged on amazon page and finding bestseller items
        Given I am on amazon page
        When I click on "button1"
        And I click on "bestseller"
        Then I should see "items"

    @amazon @coupon
    Scenario: Customer is logged on amazon page and tries to get amazon coupon code
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
        And I click on "coupons"
        And I enter single fieldvalue
            | InputName             | InputValue     |
            | couponSearchTextInput | headphone band |
        And I click on "searchBestSeller"
        Then I should see "couponSearchResultHeader"
        
        @amazon @firetv
        Scenario: Customer is logged on amazon page as username with password and buy some items
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
        And I click on "allbutton"
        And I click on "firetablet"
        And I click on "fire7"
        Then I should see "message"