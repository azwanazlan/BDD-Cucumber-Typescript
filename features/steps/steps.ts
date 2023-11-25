import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

let a: number;
let b: number;
let result: number;

Given('I have two numbers {int} and {int}', function (num1: number, num2: number) {
    a = num1;
    b = num2;
});

When('I add them', function () {
    result = a + b;
});

Then('the result should be {int}', function (expectedResult: number) {
    expect(result).to.equal(expectedResult);
    console.log('Test is done..');
});