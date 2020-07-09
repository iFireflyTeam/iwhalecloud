import * as React from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'md' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';
export type ButtonShape = 'square' | 'round';

import './style.less'

export interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  shape?: ButtonShape;
  type?: ButtonType;
  children: React.ReactNode;
  href?: string

}

export default class Button extends React.Component<BaseButtonProps, any> {

  render() {
    const { className, disabled, size, type, shape, children, href, ...restProps } = this.props;
    const _clsName = classNames('btn', className, {
      [`btn-${type}`]: type,
      [`btn-${size}`]: size,
      [`btn-${shape}`]: shape,
      disabled: type === 'link' && disabled,
    });

    if(type === 'link' && href) {
      return <a className={_clsName} href={href} {...restProps}>{children}</a>
    }
    return (
      <button type="button" className={_clsName} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}
