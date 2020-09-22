import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import  Panel , { BaseProps } from './index';


export default {
  title: 'Example/面板',
  component: Panel,
  argTypes: {
    title: {
      description: '标题文本',
      type: { name: 'string' },
    },
    extra: {
      // control: {
      //   type: 'select',
      //   options: ['square', 'round'],
      // },
      description: 'ReactNode',
      type: { name: 'string' },
      // table: {
      //   type: {
      //     summary: null
      //   }
      // }
    },
    border: {
      description: '是否需要边框',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: true },
      }
    }
  },
} as Meta;

const Template: Story<BaseProps> = (args) => <Panel {...args} />;

export const PanelDefault = Template.bind({});
export const PanelOrder = Template.bind({});

PanelDefault.args = {
  title: '标题',
  children: 'Card',
  border: true,
  extra: <a href='#'>more</a>  ,
};

PanelOrder.args = {
  title: '我的订单',
  children: '订单列表',
  border: true,
  extra: <a href='#'>去下单</a>  ,
};

