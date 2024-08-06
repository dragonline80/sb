import { fn } from '@storybook/test';
import MyButton from './Button.vue';
import {widthDesign } from 'storybook-addon-designs';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Button',
  component: MyButton,
  decorators:[withDesign],
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

Default.parameters = {
  design:{
    type:'figma',
    url:'https://www.figma.com/design/QdVo1gRYjxFQBte9ThcmSg/KCC-%EA%B8%80%EB%9D%BC%EC%8A%A4-%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B4-%ED%86%B5%ED%95%A9-%EC%86%94%EB%A3%A8%EC%85%98?node-id=455-36732&m=dev',
  }
}