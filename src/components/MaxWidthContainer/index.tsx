import styled from 'styled-components';

export const maxContainerPadding = { mobile: 20, desktop: 24 };

type Props = {
  $maxwidth?: number;
};
const MaxWidthContainer = styled.div<Props>`
  padding: 32px ${maxContainerPadding.mobile}px;
  margin: 0 auto;
  max-width: ${({ $maxwidth }) => $maxwidth || 1000}px;
  box-sizing: content-box;

  ${(props) => props.theme.media('sm')`
     padding: 40px ${maxContainerPadding.desktop}px;
  `}

  > * {
    box-sizing: border-box;
  }
`;

MaxWidthContainer.defaultProps = {
  $maxwidth: 1000,
};

export default MaxWidthContainer;
