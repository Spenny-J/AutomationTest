# AutomationTest

This automation test was designed to test account registration, contact us, and checking out. 

## Getting Started

Look for scripts in the package.json file to install and run cypress with its dependencies.

### Prerequisites

Items used prior to running the tests:

```
Install
- (Optional) Visual Studio Code
- Cypress 
- Cypress-file-upload
```

### Installing

How to install and run the automation test suites:

Run the cy:install script.

```
npm cy:install
```

Run the cyFile:install for the file upload dependency.

```
npm run cyFile:install
```

You are ready to start cypress. For running we can use cy:run which will run through our tests headless.

```
npm run cy:run
```

We can also use cy:open to run a specific test run, and watch it run through the automation live.

```
npm run cy:open
```

This opens a client of cypress ready to start running through our automation.

## Running the tests

Using the cy:run script it will run through all of our test suites. This is headless and will record screenshots/videos to view later on.

Using the cy:open script we open a client of cypress which each suite can be selected. 
Once selected a window will open and begin running through the tests. 
You can select to do one test at a time. Or run all available tests.

### Available Tests

Checkout

```
Checkout tests if we can finish the checkout process. This test is incomplete in code due to a bug: 
Once the automation attempts to add a clothing item to the cart, the form never completes and the item is not added to the cart. 
Once the user/automation navigates back to the previous page, then adds the item to their cart. It will work upon second submission.

Comments are laid out through the rest of the script of how the rest of the logic would be written. 
But due to time, I opted into saving time by only writing comments instead of working around the bug.
```

Register

```
Register tests registering a new account. 
This takes data from a people.JSON file where we can use a default user, or plug in another. 
All this does is check to verify we can make it through the account registration process successfully.
```

Contact Us
```
Contact Us goes through the contact us form and attempts to submit it. 
This is where the cypress-file-upload dependency is used. 
For all other text fields we have another JSON file which we submit our data from. 

This test was also designed to fail, similar to checkout. Upon first submission it always fails. 
Second submission successfully submits the form. 
I opted into not creating a work around that submits the form again as this is a bug and should be fixed.
```

## Built With

* [Cypress](https://code.visualstudio.com/) - The web framework used

## Authors

* **Spencer Jensen** - *Initial work* - [Spenny-J](https://github.com/Spenny-J)


## Acknowledgments

* Cypress documentation
* Cypress forums
