/**
 * @author porform
 * @date 2019-5-26
 * @desc 测试
 */

import Nerv from 'nervjs'

import './topbar.scss'

class Topbar extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    return (
      <div className='topbar' />
    )
  }
}

export default Topbar
