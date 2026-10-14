# Final Test - Login & Sign up (SOLUTION, instructor only)

Complete version of the final test, including the bonus validation. Do not share with the students before the test.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Flow

`/` or `/login` → "Sign up" link → `/signup` → success alert → "Go to login" → `/login` → submit → `/home` → "Log out" → `/login`

Any email and password work: there is no backend, the form data is only logged to the console.

## TODO → solution map

| # | Where | Solution |
|---|---|---|
| 1 | `src/components/InputField.tsx` | Props interface, `{...registration}`, `htmlFor`, error message with `&&` |
| 2 | `src/components/Alert.tsx` | `children: ReactNode` |
| 3-7 | `src/pages/SignUp.tsx` | `useForm<SignUpData>()`, `useState`, `onSubmit`, `{success && <Alert>…</Alert>}`, `<Link to="/login">` |
| 8-11 | `src/pages/Login.tsx` | `useForm<LoginData>()`, `navigate('/home')` in `onSubmit`, `<Link to="/signup">` |
| 12, 14 | `src/pages/Home.tsx` | `navigate('/login')` on click, `skills.map(...)` with `key` |
| 13 | `src/routes.tsx` | Four routes: `/`, `/login`, `/signup`, `/home` |

## Bonus included

Validation with react-hook-form rules (`required`, `pattern`, `minLength`) and error messages shown through `formState.errors`. The forms use `noValidate` so the custom messages appear instead of the browser's own.
