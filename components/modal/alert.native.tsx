import React from 'react';
import topView from 'rn-topview';
import AlertContainer from './AlertContainer.native';

export default function a(
  title: JSX.Element,
  content: JSX.Element,
  actions = [{ text: '确定' }],
) {
  const onAnimationEnd = (visible: boolean) => {
    if (!visible) {
      topView.remove();
    }
  };

  topView.set(
    <AlertContainer
      title={title}
      content={content}
      actions={actions}
      onAnimationEnd={onAnimationEnd}
    />,
  );
}
