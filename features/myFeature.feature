Feature: Addition
    As a user
    I want to add two numbers
    So that I can see the result

    Scenario: Add two numbers
        Given I have two numbers 1 and 2
        When I add them
        Then the result should be 3