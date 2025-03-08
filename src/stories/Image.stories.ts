import type { Meta, StoryObj } from '@storybook/angular';
import { ImageComponent } from '../app/image/image.component';

const meta: Meta<ImageComponent> = {
  title: 'Example/Image Component',
  component: ImageComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ImageComponent>;

export const NoImageCaption: Story = {
  args: {
    figCaptionTxt: '',
  },
};

export const WithImageCaption: Story = {
  args: {
    figCaptionTxt:
      'The French Quarter or White Town area in Pondicherry is filled with elegant colonial mansions in the midst of tree-lined boulevards named on French streets beginning with "rue", numerous parks and charming cafes',
  },
};

export const WithFullOpacity: Story = {
  args: {
    imgOpacity: 1,
  },
};

export const WithHalfOpacity: Story = {
  args: {
    imgOpacity: 0.5,
  },
};
