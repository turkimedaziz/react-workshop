// Slides: "Routing - creating routes"
// The router object defines which component is shown for which URL.
// Here it is generated from the examples list so every example gets its own URL.
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import ExampleFrame from './ExampleFrame'
import { examples } from './registry'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <div>
            <h1>React Workshop - examples</h1>
            <p className="lead">Pick an example in the menu. Each one matches a slide of the presentation.</p>
            <p className="text-muted">
              The code is in <code>src/slides</code>, one folder per section of the presentation.
            </p>
          </div>
        ),
      },
      ...examples.map((example) => ({
        path: example.path,
        element: <ExampleFrame example={example} />,
      })),
    ],
  },
])

export default router
