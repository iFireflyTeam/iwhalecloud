import React from 'react'
import classNames from 'classnames'
// import {cj} from '../../defaultSettings.js'
// import './style.less'

export interface BaseProps {
  title: string,
  className?: string,
  border?: boolean,
  style?: React.CSSProperties,
  extra?: React.ReactNode,
  children: React.ReactNode
}

export default class Panel extends React.Component<BaseProps, any> {

  render() {
    const { className, children, title, extra, border, ...restProps } = this.props;
    // const prefixCls = cj.prefixCls
    const prefixCls = 'shenzhiyong'
    const _clsName = classNames(`${prefixCls}-panel`, className, {
      [`${prefixCls}-panel-border`]: !border,
      // [`${prefixCls}-btn-${size}`]: size,
      // [`${prefixCls}-btn-${shape}`]: shape,
      // disabled: btnType === 'link' && disabled,
    });
    const _prefixCls = classNames(`${prefixCls}-panel`);
    return (
      <div className={_clsName} {...restProps}>
        {
          (title || extra) &&
          (
            <div className={`${_prefixCls}-header`}>
              <div className={`${_prefixCls}-wrapper`}>
                {title && <div className={`${_prefixCls}-title`}>{title}</div>}
                {extra && <div className={`${_prefixCls}-extra`}>{extra}</div>}
              </div>
            </div>
          )
        }
        <div className={`${_prefixCls}-content`}>{children}</div>
      </div>
    )
  }
}
