import { Meta, StoryFn } from '@storybook/react';
import Button from '../../atoms/button'
import Toast from './index.tsx'
import { useAppDispatch } from '../../../store'
import { addToast } from '../../../store/toastSlise'


export default {
  component: Toast,
} as Meta;

const Template: StoryFn<typeof Toast> = (args) => {
  const dispatch = useAppDispatch();
  return (
    <div
      className="p-5 flex flex-col gap-2.5 items-center"

    >
      <Button
        variant="filled"
        onClick={() =>
          dispatch(addToast({
            message: 'Test Notification! ',
            type: 'success',
          }))
        }
      >
        Show Success Toast
      </Button>
      <Button
      variant="filled"
      onClick={() =>
        dispatch(addToast({
          message: 'Test Notification! ',
          type: 'error',
        }))
      }
    >
      Show error Toast
    </Button>
      <Button
      variant="filled"
      onClick={() =>
        dispatch(addToast({
          message: 'Test Notification! ',
          type: 'warning',
        }))
      }
    >
      Show warning Toast
    </Button>
      <Button
      variant="filled"
      onClick={() =>
        dispatch(addToast({
          message: 'Test Notification!Test Notification!Test Notification!Test Notification!Test Notification!Test Notification!Test Notification!Test Notification!Test Notification!Test Notification!Test Notification!Test Notification!Test Notification!Test Notification!Test Notification!Test Notification!',
          type: 'info',
        }))
      }
    >
      Show info Toast
    </Button>
      <Toast {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Placement = Template.bind({});
Placement.args = {
  position: 'top-right',
};

export const ChangedHiddenTime = Template.bind({});
ChangedHiddenTime.args = {
  hiddenTime: 3000,
};




