import { flexRow } from '@app/styles/mixins';
import { FC, useMemo } from 'react';
import { css, styled } from 'styled-components';
import Link from 'next/link';
import { IconLink } from '@app/types';
import { FaEnvelope, FaInstagram, FaLink, FaRegEnvelope } from 'react-icons/fa';

type Size = 'small' | 'medium' | 'big';

export const linksDefault: IconLink[] = [{ type: 'instagram' }, { type: 'email' }];

const getSize = (size: Size) => {
  switch (size) {
    case 'small':
      return '16px';
    case 'medium':
      return '20px';
    case 'big':
      return '35px';
    default:
      return '20px';
  }
};

const Container = styled.span<{ hoverColour?: string; size: Size }>`
  ${flexRow};
  gap: 16px;
  svg {
    width: ${({ size }) => getSize(size)};
    height: ${({ size }) => getSize(size)};
    transition: all 0.3s ease-in-out;
    path {
      fill: ${({ theme }) => theme.colors.fg.default};
    }
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      path {
        fill: ${({ hoverColour, theme }) => hoverColour ?? theme.colors.fg.inactive};
      }
    }

    ${({ size }) =>
      size === 'small' &&
      css`
        margin-bottom: 3px;

        &:hover {
          path {
            fill: ${({ theme }) => theme.colors.fg.default};
            opacity: 1;
          }
        }
      `}
  }
`;

type Props = {
  iconLinks?: IconLink[];
  hoverColour?: string;
  size?: Size;
  ariaLabel?: string;
  className?: string;
};

const LinkContainer: FC<Props> = ({
  iconLinks = linksDefault,
  className,
  hoverColour,
  ariaLabel,
  size = 'medium',
}) => {
  const links = useMemo(
    () =>
      iconLinks.map((icon) => {
        switch (icon.type) {
          case 'email':
            return {
              id: 'email',
              icon: <FaRegEnvelope />,
              link: icon.link || 'mailto:susi.nguimba@gmail.com',
            };
          case 'instagram':
            return {
              id: 'instagram',
              icon: <FaInstagram />,
              link: 'https://www.instagram.com/benge_events/',
            };
          case 'link':
            return { id: icon.id ?? 'external link', icon: <FaLink />, link: icon.link };
          default:
            return { id: 'email', icon: <FaRegEnvelope />, link: 'mailto:contact@g-emma.com' };
        }
      }),
    [iconLinks],
  );

  return (
    <Container
      aria-label={ariaLabel ?? 'Social Media links'}
      className={className}
      hoverColour={hoverColour}
      size={size ?? 'big'}
      id="linkContainerLanding"
    >
      {links?.map(
        (item) =>
          item.link && (
            <Link
              href={item.link}
              key={item.id}
              target="_blank"
              aria-label={item.id}
              style={{ alignItems: 'center', display: 'flex' }}
            >
              {item.icon}
            </Link>
          ),
      )}
    </Container>
  );
};

export default LinkContainer;
