# Final Test - Login & Sign up (starter)

Build a small login / sign up app using everything from the workshop.
The project is already set up: bootstrap, react-hook-form and react-router-dom are installed.
Your job is to complete every `TODO` in the code.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:5173/home (the other pages will work once you finish the routes).

## What you will build

- `/login` - email + password form, goes to `/home` on submit
- `/signup` - name, email, phone number, password form, shows a success alert, then lets you go to `/login`
- `/home` - welcome page with a list and a log out button

## Where the TODOs are

Search the project for `TODO` (Ctrl+Shift+F in VS Code). Do them in this order:

| # | File | What you practise |
|---|---|---|
| 1 | `src/components/InputField.tsx` | Props + interface, reusable component, JSX attributes |
| 2 | `src/components/Alert.tsx` | `children` |
| 3-7 | `src/pages/SignUp.tsx` | `useForm`, `register`, `handleSubmit`, `useState`, conditional rendering, `useNavigate`, `Link` |
| 8-11 | `src/pages/Login.tsx` | Same tools again, navigate after submit |
| 12, 14 | `src/pages/Home.tsx` | `useNavigate`, `map` + `key`, conditional rendering |
| 13 | `src/routes.tsx` | `createBrowserRouter` routes |

## Checklist - is it done?

- [ ] Opening `/` shows the login form
- [ ] Clicking "Sign up" goes to the sign up page without reloading
- [ ] Submitting the sign up form prints the data in the console, clears the form and shows the green alert
- [ ] The alert button takes you to the login page
- [ ] Submitting the login form takes you to `/home`
- [ ] The home page shows the 6 items and the "Log out" button brings you back to login

## Bonus

- Add validation rules: `register('email', { required: 'Email is required' })` and show the error under each input with `formState: { errors }` (the `error` prop of `InputField`)
- Phone number: only digits, at least 8 characters
- Password: at least 6 characters
- Try validating with `zod`
