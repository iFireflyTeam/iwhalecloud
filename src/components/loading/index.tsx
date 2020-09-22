import React, { FC } from 'react'
import { Spin } from 'antd'

export interface BaseProps {
  type?: string,
  title?: string,
  color?: string
}

const Loading: FC<BaseProps> = (props) => {
  const { type, title, color } = props
  if (type === '2') {
    return (
      <div className="loading-wrapper-One">
        <Spin />
        <p style={{ color: '#1890ff' }}>{title}</p>
      </div>
    )
  }
  return (
    <div className="wechat-loading-wrapper">
      <div className="line-scale">
        <div className="layui-layer-content">
          <div style={{ backgroundColor: color }} />
          <div style={{ backgroundColor: color }} />
          <div style={{ backgroundColor: color }} />
          <div style={{ backgroundColor: color }} />
          <div style={{ backgroundColor: color }} />
        </div>
      </div>
      <p style={{ color }}>{title}</p>
    </div>
  )
}
// 默认props值
Loading.defaultProps = {
  title: '信息加载中...',
  color: '#1EA7FD',
}

export default Loading
