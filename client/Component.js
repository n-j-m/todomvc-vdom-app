import { h } from './app'

import { nameChange } from './app/actions'

/**
 * hello component.
 * renders an h1 saying hello to the given name prop.
 * @param  {object} options.name The name we're saying hi to
 * @return {DOMElement}          The generated DOMElement
 */
export default function Component({name, dispatch}) {
  return (
    h('div', [
      h('input', {
        value: name,
        oninput: (ev) => dispatch(nameChange(ev.target.value))
      }),
      h('h1', `hi, ${name} :}`)
    ])
  )
}