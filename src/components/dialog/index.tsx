import { ReactNode } from 'react';

import { Content, Overlay, Portal, Root, Trigger } from './styles';

type DialofPorps = {
  children: ReactNode;
  trigger: JSX.Element;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function Dialog({ children, trigger, open, onOpenChange }: DialofPorps) {
  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <Trigger>{trigger}</Trigger>
      <Portal>
        <Overlay />
        <Content>{children}</Content>
      </Portal>
    </Root>
  );
}
