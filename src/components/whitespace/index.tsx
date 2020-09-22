import React from 'react'
import classNames from 'classnames'
import { prefixCls } from '../../defaultSettings'

export type componentSizeProps = 'lg' | 'md' | 'sm';
export type directionProps = 'vertical' | 'horizontal';

export interface BaseProps {
  className?: string,
  size: componentSizeProps,
  height?: number,
  direction?: directionProps,
  backgroundColor?: string
}

export default class WhiteSpace extends React.Component<BaseProps, any> {
  static defaultProps = {
    size: 'md',
    direction: 'horizontal',
  }

  render() {
    const {
      className, size, direction, height, backgroundColor, ...restProps
    } = this.props
    const _clsName = classNames(`${prefixCls}-whitespace`, className, {
      [`${prefixCls}-whitespace-${size}`]: size,
      [`${prefixCls}-whitespace-${direction}`]: direction,
    })
    // const _prefixCls = classNames(`${prefixCls}-panel`)
    return (
      <div className={_clsName} style={{ backgroundColor, height }} {...restProps} />
    )
  }
}
