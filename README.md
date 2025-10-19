# Workflow repo for the CA

This project is a frontend web application built with HTML, CSS, and JavaScript. It includes user authentication, venue listings, and detailed views. Playwright is used for end-to-end testing.

## Setup

1. **Clone the repository**

git clone https://github.com/NoroffFEU/workflow-repo-ca.git

2. Install dependencies
   npm install

This will automatically install all required packages, including:
• ESLint (for linting)
• Prettier (for formatting)
• Husky & lint-staged (for Git hooks)
• Playwright (for automated testing)

3. Environment variables
   Create a .env file in the root directory. The project requires the following environment variables :
   TEST_USER_EMAIL= your-test-user-email
   TEST_USER_PASSWORD= your-test-user-password

## Scripts

• Run the project

- npm start

• Run Playwright tests

- npx playwright test

• Open Playwright test runner

- npx playwright show-report

Available Scripts
• npm start — Run the local development server
• npm run prepare — Initialize Husky Git hooks
• npx playwright test — Run all automated tests
• npx playwright show-report — View the Playwright test report
• npm run lint — Run ESLint
• npm run format — Run Prettier (if configured in package.json)

## Testing

Login flow
• Valid credentials should successfully log in.
• Invalid credentials should display an error message.

Navigation
• Users can navigate from the home page to a venue details page.
• The venue details page should show the heading “Venue details.”

Author
Morten Lillehaug
