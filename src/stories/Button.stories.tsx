import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import  Button, { BaseButtonProps } from '../components/button';


export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: '背景颜色',
      table: {
        type: {
          summary: 'primary'
        }
      }
    },
    btnType: {
      control: {
        type: 'select',
        options: ['primary','default','danger','link'],
      },
      description: '按钮类型',
      table: {
        type: {
          summary: 'primary | default | danger | link'
        }
      }
    },
    shape: {
      control: {
        type: 'select',
        options: ['square', 'round'],
      },
      description: '是否需要圆角',
      table: {
        type: {
          summary: 'square | round'
        }
      }
    },
    disabled: {
      control: 'boolean',
      // defaultValue: false,
      description: '是否禁用',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' },
      }
    },
    children: {
      description: '按钮显示的文本',
      type: { name: 'string', required: true },
    },
    onClick: {
      description: '() => void: {}'
    }

  },
} as Meta;

const Template: Story<BaseButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  btnType: 'primary',
  shape: 'square',
  children: 'Button',
  onClick: action('sss')
};


