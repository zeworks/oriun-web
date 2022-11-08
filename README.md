# oriun web
[![CI](https://github.com/zeworks/oriun-web/actions/workflows/on-push-master.yml/badge.svg?branch=master)](https://github.com/zeworks/oriun-web/actions/workflows/on-push-master.yml)
[![CI](https://github.com/zeworks/oriun-web/actions/workflows/on-pull-request.yml/badge.svg?branch=master)](https://github.com/zeworks/oriun-web/actions/workflows/on-pull-request.yml)

Oriun is a timesheet management platform.
Users with different types of roles, can manage the departments, contacts, and timesheets and download a report of all the timesheets. That's cool for companies that need to have a full report of their departments.

### Requirements
- 

### How to start?
Simple! just run the command `npm install` and it will install all the dependencies for you!
After that just run the command `npm run dev`, it will open the web browser on the `http://localhost:3000` for you.

### Stack
- react + typescript
- @stitches (css in js)
- storybook (ui package)

### Packages

- SDK
  - this package contains all the backend services, all in one place.
  It makes the app detached from the sdk and it can be reusable to other projects, consuming from the same sdk.
- UI
  - this package contains all the UI components, ex: Button, Input, etc...
- WEB

### Thinking about contribute?
Just clone the project and make some pull requests! :)
