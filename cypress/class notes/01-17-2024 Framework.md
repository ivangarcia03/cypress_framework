TypeScript
Package.json
playwright.config
Playwright with testing types we use
POM
Fixtures
helpers
test-data
env variables
visual regression
global-setup and teardown with authentication state
hooks
reports
eslint-prettier-tsconfig
version control
CI/CD



In our framework, TypeScript is the core pgoramming language, and all tools are designed around it. We utilize NodeJs for managing dependencies through npm. The package.json file in our framework contains metadata about the project, including dependencies and their versions, as well as scripts for running our tests, aiding in cross-browser testing, and managing our environments and configurations within the playwright.config file.


We employ Playwright for UI and API test automation, leveraging its features for validations, assertions, runner and browser capabilities. Our framework is based on Test-Driven Development (TDD), with a focus on wiriting automation scripts first. Tests are organized in the test folder, encompassing various testing types such as smoke, integration, regression, and end-to-end testing.

We are using the Page Object Model (POM) design pattern, which centralizes page-related locators and methods within the pages folder. This approach facilitates reusability through inheritance between pages.

We utilize Playwright fixtures in along with the Page Object Model (POM), enabling us to develop custom fixtures. This approach allows for the encapsulation of our POM or test-data within a fixture, which enhances reusability accross all our tests.

We organized our helper methods in to a seperate folder, enabling their reusa as methods throuhout the framework.

We store our test-data in a seperate folder and we store this test data in a JSON format, this is where we fetch all the information we need for the expected outputs.

We menage ensitive information by utilizing environment variables, which are securely stores using the dotenv package. This approach ensures the safekeeping of our environment settings, user data, database configurations and authentication keys.

In addition to our functional testing, we also conduct Visual Regression testing using Playwright. This form of testing, helping us scripting and execution process, enabling us to identify and address and visual issues during the development.


We maintain seperate folder for global setup and teardown, which provides beneficial for storing authentication states. This is particularly useful for tests that require frequent logins. Playwright offers a method to bypass this authentication state, allowing us to handle this repeatitive logins. This approach speeds up our execution significantly.

In our framework, we also use before and after hooks which provides us a clear code troughout the framework.

For reporting, we use Playwright built-in reports to generate detailed HTML, JSON, or JUnit reports. These reports provides the clear and readable information in case of a failure/

We use ESLint with TypeScript, as defined in our tsconfig.json, to maintain code quality and standarats throughout the framework, ensuring the consistency. Our eslint setup includes configuration for TypeScript and with prettier for formatting. This approach keeps our code clean, and error-free.

As version control, we are using GitHub. We execute 2 important suites in our framework which are Smoke, and Regression and they are integrated to our CI/CD.

We are currently have 25 smoke tests, and 460 regressions that are running on CI/CD. We are running smoke tests every day 6 AM in the morning while we are running our Regression suite at the end of each sprint, or triggered after any hotfix.