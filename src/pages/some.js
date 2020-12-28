
import {connect} from 'react-redux'
import { useEffect } from 'react'
import {tick} from 'src/modules/main/actions'

const Some = (...props) => {
  useEffect(() => {
    props[0].tick()
  }, [])
  return <div>{props[0].state.main.main.some}</div>
}

export default connect(
  state => ({
    state
  }),
  {
    tick
  }
)(Some)

export async function getStaticProps (ctx) {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  return {
    props: {}
  }
}
