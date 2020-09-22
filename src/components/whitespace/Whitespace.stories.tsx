import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import  WhiteSpace , { BaseProps } from './index';


export default {
  title: 'Example/间隙',
  component: WhiteSpace,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
      description: 'size属性和height属性相互冲突',
      type: { name: 'string' },
    },
    backgroundColor: {
      control: {
        type: 'color',
      },
      description: 'React.CSSProperties',
      type: { name: 'string' },
      // table: {
      //   type: {
      //     summary: null
      //   }
      // }
    },
    height: {
      description: '高度选择',
      control: {
        type: 'range',
        min: 0,
        step: 1,
        max: 100,
      },
      table: {
        type: {
          summary: 'height'
        },
        defaultValue: { summary: 1 },
      }
    }
  },
} as Meta;

const Template: Story<BaseProps> = (args) => <WhiteSpace {...args} />;

export const Whitespace = Template.bind({});

Whitespace.args = {
  backgroundColor: '#ccc',
  height: 'none'
};


