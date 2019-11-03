# sek-exchanger-api

This is the api for [sek-exchanger](https://github.com/YoucefChihi/sek-exchanger).

To start: `yarn && yarn dev`

## Would do given more time:

### Front-end:

- Setup SSR, would use next.js for that
- Make it better responsive
- Separate styles by component
- Use redux or react context api for state management

### Back-end:

- Proper login logic, not just random token generation
- Proper logging
- Session management

### Both:

- Put sensitive parameters in .env
- Use typescript
- Configure project to work with docker
- Write tests (preferably before writing the logic)
- Use husky for pre-commit actions like formatting and running tests
- Use commitizen for better commit messages, and more conventional changelogs
- Write documentation for people unfamiliar with the code base
