import * as React from "react"
import Button, {ButtonProps} from '../components/button/index'
import "./global.less"

export default class App extends React.Component {

  render() {
    const a = 4
    return (
      <div>
        <h1>沈先生的组件库</h1>
        <Button size="sm" btnType="primary" className="test">small</Button>
        <Button size="md" className="test">正常</Button>
        <Button size="lg" disabled className="test">disabled</Button>
        <Button size="lg" btnType="danger" className="test" onClick={() => alert(1)}>危险</Button>
        <Button
          btnType="link"
          href="https://www.baidu.com"
          target="_blank"
          // onClick={() => alert(1)}
        >Hello Baidu</Button>

        <Button
          disabled
          btnType="link"
          href="https://www.baidu.com"
          // autoFocus
        >Hello baidu</Button>
      </div>
    )
  }
}
