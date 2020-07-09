import * as React from "react"
import {Button,Panel} from '../components/index'
import "./global.less"

export default class App extends React.Component {

  render() {
    const a = 123
    console.log(a+1)
    return (
      <div>
        <h1>沈先生的组件库</h1>
        <Button className="test"> sss</Button>
        <Panel title={'123'}>sss</Panel>
        {/*<Button>button</Button>*/}
      </div>
    )
  }
}
