// Wraps every example with its title so the audience always knows which slide it belongs to.
import type { Example } from './registry'

const ExampleFrame = ({ example }: { example: Example }) => {
  const isRoutingPage = example.section.startsWith('05')

  // The routing pages (Home / Contacts) are shown as real pages, without a frame around them
  if (isRoutingPage) return example.element

  return (
    <div>
      <small className="text-muted text-uppercase">{example.section}</small>
      <h2 className="mb-1">{example.title}</h2>
      {example.note && <p className="text-muted">{example.note}</p>}
      <hr />
      {example.element}
    </div>
  )
}

export default ExampleFrame
