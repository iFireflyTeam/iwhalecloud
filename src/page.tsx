import * as React from 'react'
import Button, { ButtonProps } from './components/button/index'
import Panel from './components/panel/index'
import Loading from './components/loading/index'
import WhiteSpace from './components/whitespace/index'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>长江大数据的组件库</h1>
        <h1>loading</h1>
        <WhiteSpace size="lg" direction="vertical" backgroundColor="red"/>

        <Loading />
        <Button size="sm" btnType="primary" className="test">small</Button>
        <Button size="md" shape="round" className="test">正常</Button>
        <Button size="lg" disabled className="test">disabled</Button>
        <Button size="lg" btnType="danger" className="test" onClick={() => alert(1)}>危险</Button>
        <Button
          btnType="link"
          href="https://www.baidu.com"
          target="_blank"
          // onClick={() => alert(1)}
        >长江工业互联网平台
        </Button>

        <Button
          disabled
          btnType="link"
          href="https://www.baidu.com"
          // autoFocus
        >长江
        </Button>

        <Panel
          title="标题"
          className="sss"
          border
          extra={<Button href="/more" btnType="link">more</Button>}
        >
          <div>带有边框</div>
        </Panel>

        <Panel
          title="标题"
          border={false}
          extra={<Button href="/more" btnType="link">more</Button>}
        >
          <div>body</div>
        </Panel>
      </div>
    )
  }
}
