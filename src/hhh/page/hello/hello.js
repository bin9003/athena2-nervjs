/**
 * @author porform
 * @date 2019-5-26
 * @desc 测试
 */
import Nerv from 'nervjs'

import 'bootstrap/dist/css/bootstrap.css'
import './hello.scss'
import $ from 'my-webpack-jquery'
import 'bootstrap'
class Hello extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    return (
      <div className='abc'>
        <h1>Hello, world!</h1>
        <h2>现在是 {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

Nerv.render(<Hello date={new Date()} />, document.getElementById('J_container'))
