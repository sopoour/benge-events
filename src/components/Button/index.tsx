import { header } from '@app/styles/fonts';
import { fastTransition } from '@app/styles/mixins';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

const ButtonStyle = styled(Link)<{ hoverColor?: string; $width?: string }>`
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.bg.default};
  padding: 8px 16px;
  text-align: center;
  font-size: 16px;
  align-content: center;
  background-color: ${({ theme }) => theme.colors.accent.lightPink};
  color: white;
  font-weight: 700;
  ${fastTransition};
  font-family: ${header.style.fontFamily};

  &:hover {
    background-color: ${({ theme, hoverColor }) => hoverColor || '#c46ec7'};
    color: ${({ theme }) => theme.colors.fg.default};
  }
  ${({ theme, $width }) => theme.media('sm')`
    width: ${$width || '100%'};
    font-size: 20px;
  `}
`;

type Props = {
  href?: string;
  isSubmitButton?: boolean;
  newTab?: boolean;
  text?: string;
  hoverColor?: string;
  width?: string;
  className?: string;
};

const Button: FC<Props> = ({
  href,
  newTab = false,
  text = 'Ticket',
  isSubmitButton = false,
  hoverColor,
  width,
  className,
}) => {
  return (
    <ButtonStyle
      href={href || ''}
      target={newTab ? '_blank' : '_self'}
      as={isSubmitButton ? 'button' : Link}
      type={isSubmitButton ? 'submit' : 'button'}
      hoverColor={hoverColor}
      $width={width}
      className={className}
    >
      {text}
    </ButtonStyle>
  );
};

export default Button;
