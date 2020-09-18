import React, { Component } from 'react'
import { Button, Tooltip,Icon} from 'antd';
import MarkdownView from '../../vendor/MarkdownView';
import Breadcrumb from './BreadcrumbTitle/index';
import './index.scss';


class BreadcrumbTitleComponent extends Component {

    render() {

        const menus = [
            {
              name: '首页',
              href: '/',
            },
            {
              name: '面包屑二级菜单',
              href: '/',
            },
            { name: '面包屑详情'},
          ];
        return (
            <div className="CjButtonComponent">
             <div className="gap"></div>
              <Breadcrumb title={menus} />

              <div className="gap"></div>
              <div className="gap"></div>
                <div>
                {/* <h3 style={{marginBottom: '10px'}}>默认按钮</h3> */}
                <div className="">
                        <div className="">
                             <div className="gap"></div>
                            <MarkdownView content={`
\`\`\` html
const routes = [
    { path: '/home', breadcrumb:'首页',href:''},
    { path: '/detail', breadcrumb: '详情' },
];

<Breadcrumb  title={menus} split='>' />
\`\`\`
`}/>
                        </div>
                    </div>
        
                   </div>
                <div className="gap" style={{height:'100px'}}></div>
                            <MarkdownView content={`
## API

|参数|说明|类型|默认值|
|:--|:--|:--:|:--:|
|size|设置按钮大小|\`large、middle、small\`|defult|
|btnType|设置按钮类型|\`string\`|defult|
|shape|button的形状|\`string()\`|square|
|iocn|设置按钮的图标组件|\`svg\`|none|
|disabled|button的使用状态|\`string()\`|\`-\`|
`}/>
                
            </div>
        )
    }
}



export default BreadcrumbTitleComponent
