import * as React from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'md' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';
// export enum ButtonType {
//   Primary = 'primary',
//   Default = 'default',
//   Danger = 'danger',
//   Link = 'link',
// }
export type ButtonShape = 'square' | 'round';

import './style.less'

export interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  shape?: ButtonShape;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorProps>

export default class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    btnType: 'default',
  }

  render() {
    const { className, disabled, size, btnType, shape, children, href, ...restProps } = this.props;
    const _clsName = classNames('btn', className, {
      [`btn-${btnType}`]: btnType,
      [`btn-${size}`]: size,
      [`btn-${shape}`]: shape,
      disabled: btnType === 'link' && disabled,
    });

    if(btnType === 'link' && href) {
      return <a className={_clsName} href={href} {...restProps}>{children}</a>
    }
    return (
      <button type="button" className={_clsName} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}


