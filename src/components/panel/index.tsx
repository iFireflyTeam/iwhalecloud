import * as React from 'react'
import './style.less'

interface Props {
  title: string,
  children: any
}

export default class Panel extends React.Component<Props, any> {

  render() {
    const {children,title} = this.props
    return (
      <div className="panel">
        <div className="panel-header">{title}</div>
        <div className="panel-content">{children}</div>
      </div>
    )
  }
}
