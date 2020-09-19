import * as React from 'react'
import classNames from 'classnames'
// import {cj} from '../../defaultSettings'

export type ButtonSize = 'lg' | 'md' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';
// export enum ButtonType {
//   Primary = 'primary',
//   Default = 'default',
//   Danger = 'danger',
//   Link = 'link',
// }
export type ButtonShape = 'square' | 'round';

// import './style.less'

export interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  color?: string;
  backgroundColor?: string;
  shape?: ButtonShape;
  btnType?: ButtonType;
  children: React.ReactNode;
  href: string
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorProps>

export default class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    btnType: 'default',
    shape: 'square',
    size: 'md',
  }

  render() {
    const {
      className, disabled, size, btnType, shape, children, href, backgroundColor, ...restProps
    } = this.props
    const prefixCls = 'shenzhiyong'
    const _clsName = classNames(`${prefixCls}-btn`, className, {
      [`${prefixCls}-btn-${btnType}`]: btnType,
      [`${prefixCls}-btn-${size}`]: size,
      [`${prefixCls}-btn-${shape}`]: shape,
      disabled: btnType === 'link' && disabled,
    })

    if (btnType === 'link' && href) {
      return <a className={_clsName} href={href} {...restProps}>{children}</a>
    }
    return (
      <button type="button" style={{ backgroundColor }} className={_clsName} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}
