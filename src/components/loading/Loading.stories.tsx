import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import  Loading , { BaseProps } from './index';


export default {
  title: 'Example/加载动画',
  component: Loading,
  argTypes: {
    title: {
      description: '标题文本',
      type: { name: 'string' },
    },
    color: {
      control: {
        type: 'color',
        // options: ['square', 'round'],
      },
      description: 'ReactNode',
      type: { name: 'string' },
      // table: {
      //   type: {
      //     summary: null
      //   }
      // }
    },
    type: {
      control: {
        type: 'select',
        options: ['1', '2'],
      },
    }
  },
} as Meta;

const Template: Story<BaseProps> = (args) => <Loading {...args} />;

export const LoadingBtn = Template.bind({});
LoadingBtn.args = {
  title: '标题',
};


