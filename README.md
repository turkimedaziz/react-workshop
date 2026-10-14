# React Workshop - Examples

Every example from the presentation, ready to run. A sidebar lets you jump to any example while you present.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173

> Some examples log to the console (event handling, forms): keep the browser console open (F12).

## Slide → file map

| Slide section | Example | File |
|---|---|---|
| 01 Meet React | Create a project with Vite | `npm create vite .` (react + typescript), no code |
| 02 JSX/TSX | Writing JSX | `src/slides/02-jsx/Exemple.tsx` |
| | Adding JS to JSX (curly braces) | `src/slides/02-jsx/AddingJs.tsx` |
| | Arrow functions | `src/slides/02-jsx/ArrowFunctions.tsx` |
| | Loop over elements (map + key) | `src/slides/02-jsx/List.tsx` |
| | Conditional rendering (if / ternary / &&) | `src/slides/02-jsx/ConditionalRendering.tsx` |
| 03 Components | Building components | `src/slides/03-components/Component.tsx` |
| | Styling: bootstrap | `src/slides/03-components/BootstrapDemo.tsx` + import in `src/main.tsx` |
| | Styling: vanilla CSS | `ListGroup.tsx` + `ListGroup.css` |
| | Styling: CSS modules | `ListGroupModule.tsx` + `ListGroup.module.css` |
| | Event handling (onClick) | `src/slides/03-components/CitiesTableClick.tsx` |
| | State management (useState) | `src/slides/03-components/CitiesTableState.tsx` |
| | Props: data and functions | `ItemsTable.tsx` + `ItemsTableDemo.tsx` |
| | Props: children | `Alert.tsx` + `AlertDemo.tsx` |
| | Exercise: cities table with flag | `src/slides/03-components/JsxExercise.tsx` |
| 04 Building forms | Basic form + submit button | `src/slides/04-forms/Form1Basic.tsx` |
| | onSubmit + preventDefault | `src/slides/04-forms/Form2Submit.tsx` |
| | useRef to read values | `src/slides/04-forms/Form3Ref.tsx` |
| | react-hook-form | `src/slides/04-forms/Form4HookForm.tsx` |
| | Exercise: sign in page | `src/slides/04-forms/SignInExercise.tsx` |
| 05 Routing | createBrowserRouter + RouterProvider | `src/shell/routes.tsx` + `src/main.tsx` |
| | Link | `src/slides/05-routing/Home.tsx` |
| | useNavigate | `src/slides/05-routing/Contacts.tsx` |

Not coded: slides 01 (concepts), the "Components types" tree diagram and the "Useful extension" slide.

## How the project is organised

- `src/slides/` - the examples, one folder per section of the presentation. This is what you show.
- `src/shell/` - the frame used to browse the examples (sidebar + router). To add an example, create the component and add one line in `src/shell/registry.tsx`.

## Dependencies used

`bootstrap@5.3.2`, `react-hook-form`, `react-router-dom`
