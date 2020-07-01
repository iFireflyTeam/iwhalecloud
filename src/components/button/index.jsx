import React from 'react'
import './style.less'

export default class Button extends React.Component {

  render() {
    const {children} = this.props
    return <div className="button">{children}</div>
  }
}
