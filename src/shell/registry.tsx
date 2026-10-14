// One list that feeds BOTH the sidebar menu and the router.
// To add a new example: create the component, then add one line here.
import type { ReactElement } from 'react'

import Exemple from '../slides/02-jsx/Exemple'
import AddingJs from '../slides/02-jsx/AddingJs'
import ArrowFunctions from '../slides/02-jsx/ArrowFunctions'
import List from '../slides/02-jsx/List'
import ConditionalRendering from '../slides/02-jsx/ConditionalRendering'

import Component from '../slides/03-components/Component'
import BootstrapDemo from '../slides/03-components/BootstrapDemo'
import ListGroup from '../slides/03-components/ListGroup'
import ListGroupModule from '../slides/03-components/ListGroupModule'
import CitiesTableClick from '../slides/03-components/CitiesTableClick'
import CitiesTableState from '../slides/03-components/CitiesTableState'
import ItemsTableDemo from '../slides/03-components/ItemsTableDemo'
import AlertDemo from '../slides/03-components/AlertDemo'
import JsxExercise from '../slides/03-components/JsxExercise'

import Form1Basic from '../slides/04-forms/Form1Basic'
import Form2Submit from '../slides/04-forms/Form2Submit'
import Form3Ref from '../slides/04-forms/Form3Ref'
import Form4HookForm from '../slides/04-forms/Form4HookForm'
import SignInExercise from '../slides/04-forms/SignInExercise'

import Home from '../slides/05-routing/Home'
import Contacts from '../slides/05-routing/Contacts'

export interface Example {
  section: string
  path: string
  title: string
  note?: string
  element: ReactElement
}

export const examples: Example[] = [
  // 02 - JSX / TSX
  { section: '02 · JSX / TSX', path: 'jsx/exemple', title: 'Writing JSX', note: 'Open the console and click the button', element: <Exemple /> },
  { section: '02 · JSX / TSX', path: 'jsx/adding-js', title: 'Adding JS to JSX', element: <AddingJs /> },
  { section: '02 · JSX / TSX', path: 'jsx/arrow-functions', title: 'Arrow functions', element: <ArrowFunctions /> },
  { section: '02 · JSX / TSX', path: 'jsx/list', title: 'Loop over elements (map + key)', note: 'Check the console warning on the first list', element: <List /> },
  { section: '02 · JSX / TSX', path: 'jsx/conditional', title: 'Conditional rendering', note: 'if / ternary / &&', element: <ConditionalRendering /> },

  // 03 - Components
  { section: '03 · Components', path: 'components/first', title: 'Building components', element: <Component /> },
  { section: '03 · Components', path: 'components/bootstrap', title: 'Styling: UI library (bootstrap)', element: <BootstrapDemo /> },
  { section: '03 · Components', path: 'components/vanilla-css', title: 'Styling: vanilla CSS', element: <ListGroup /> },
  { section: '03 · Components', path: 'components/css-modules', title: 'Styling: CSS modules', element: <ListGroupModule /> },
  { section: '03 · Components', path: 'components/events', title: 'Event handling (onClick)', note: 'Open the console and click a row', element: <CitiesTableClick /> },
  { section: '03 · Components', path: 'components/state', title: 'State management (useState)', element: <CitiesTableState /> },
  { section: '03 · Components', path: 'components/props', title: 'Passing data & functions via props', note: 'Same component, two uses', element: <ItemsTableDemo /> },
  { section: '03 · Components', path: 'components/children', title: 'Passing children', element: <AlertDemo /> },
  { section: '03 · Components', path: 'components/exercise', title: 'Exercise: cities table (solution)', element: <JsxExercise /> },

  // 04 - Forms
  { section: '04 · Building forms', path: 'forms/basic', title: 'Basic form + submit button', element: <Form1Basic /> },
  { section: '04 · Building forms', path: 'forms/submit', title: 'Handle submission (onSubmit)', note: 'Open the console and submit', element: <Form2Submit /> },
  { section: '04 · Building forms', path: 'forms/ref', title: 'Read values with useRef', element: <Form3Ref /> },
  { section: '04 · Building forms', path: 'forms/hook-form', title: 'react-hook-form', element: <Form4HookForm /> },
  { section: '04 · Building forms', path: 'forms/exercise', title: 'Exercise: sign in page (solution)', element: <SignInExercise /> },

  // 05 - Routing (same paths as the slides: /home and /contacts)
  { section: '05 · Routing & navigation', path: 'home', title: 'Home (Link)', element: <Home /> },
  { section: '05 · Routing & navigation', path: 'contacts', title: 'Contacts (useNavigate)', element: <Contacts /> },
]
