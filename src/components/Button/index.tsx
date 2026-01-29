import { fastTransition } from '@app/styles/mixins';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

const ButtonStyle = styled(Link)<{ $fullWidth?: boolean }>`
  width: 100%;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.bg.default};
  padding: 8px 16px;
  text-align: center;
  background-color: white;
  color: ${({ theme }) => theme.colors.fg.contrast};
  font-weight: 700;
  ${fastTransition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.default};
    color: ${({ theme }) => theme.colors.fg.default};
  }

  ${({ theme, $fullWidth }) => theme.media('sm')`
    width: ${$fullWidth ? '100%' : '80%'}
  `}
`;

type Props = {
  href?: string;
  isSubmitButton?: boolean;
  newTab?: boolean;
  text: string;
  fullWidth?: boolean;
};

const Button: FC<Props> = ({ href, newTab = false, text, isSubmitButton = false, fullWidth }) => {
  return (
    <ButtonStyle
      href={href || ''}
      target={newTab ? '_blank' : '_self'}
      as={isSubmitButton ? 'button' : Link}
      type={isSubmitButton ? 'submit' : 'button'}
      $fullWidth={fullWidth}
    >
      {text}
    </ButtonStyle>
  );
};

export default Button;
