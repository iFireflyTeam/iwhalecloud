import * as React from "react"
import Button, {ButtonProps} from '../components/button/index'
import Panel from '../components/panel/index'
// import "./global.less"

export default class App extends React.Component {

  render() {
    const a = 4
    return (
      <div>
        <h1>沈先生的组件库</h1>
        <Button size="sm" btnType="primary" className="test">small</Button>
        <Button size="md" shape="round" className="test">正常</Button>
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

        <Panel
          title='标题'
          className="sss"
          border
          extra={<Button href="/more" btnType="link">more</Button>}>
          <div>带有边框</div>
        </Panel>


        <Panel
          title='标题'
          extra={<Button href="/more" btnType="link">more</Button>}>
          <div>body</div>
        </Panel>
      </div>
    )
  }
}
