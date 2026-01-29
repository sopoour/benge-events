import { header } from '@app/styles/fonts';
import { fastTransition } from '@app/styles/mixins';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

const ButtonStyle = styled(Link)<{ hoverColor?: string }>`
  width: 100%;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.bg.default};
  padding: 8px 16px;
  text-align: center;
  background-color: white;
  color: ${({ theme }) => theme.colors.fg.contrast};
  font-weight: 700;
  ${fastTransition};
  font-family: ${header.style.fontFamily};

  &:hover {
    background-color: ${({ theme, hoverColor }) => hoverColor || theme.colors.fg.inactive};
    color: ${({ theme, hoverColor }) =>
      hoverColor ? theme.colors.fg.default : theme.colors.fg.contrast};
  }
`;

type Props = {
  href?: string;
  isSubmitButton?: boolean;
  newTab?: boolean;
  text: string;
  hoverColor?: string;
};

const Button: FC<Props> = ({ href, newTab = false, text, isSubmitButton = false, hoverColor }) => {
  return (
    <ButtonStyle
      href={href || ''}
      target={newTab ? '_blank' : '_self'}
      as={isSubmitButton ? 'button' : Link}
      type={isSubmitButton ? 'submit' : 'button'}
      hoverColor={hoverColor}
    >
      {text}
    </ButtonStyle>
  );
};

export default Button;
