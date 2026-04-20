import { FC, useState } from 'react';
import Accordion from '../Accordion/Accordion';
import Typography from '../Typography/Typography';
import styled from 'styled-components';
import MarkdownConfig from '../MarkdownConfig/MarkdownConfig';
import { Awareness } from '@app/services/graphql/types';

const Wrapper = styled.div`
  padding: 12px 0;
`;

const AdjMarkdownConfig = styled(MarkdownConfig)`
  h2 {
    font-size: 20px;
    margin: 12px 0 4px 0;
  }
  h3 {
    font-size: 18px;
    margin: 12px 0 4px 0;
  }
  p,
  a,
  li {
    text-align: start;
    font-size: 14px;
    font-weight: 400;
    margin: 0;
  }

  ul {
    margin: 0;
  }

  ${({ theme }) => theme.media('sm')`
    h2 {
    font-size: 28px;
    margin: 12px 0 4px 0;
  }
  h3 {
    font-size: 24px;
    margin: 12px 0 4px 0;
  }
    p,
  a,
  li {
    text-align: start;
    font-size: 16px;
    font-weight: 400;
    margin: 0;
  }
  `}
`;

type Props = {
  awarenessItem: Awareness;
};

const AwarenessAccordion: FC<Props> = ({ awarenessItem }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Accordion
      header={
        <Typography as="h2" fontSize="20px" fontSizeSm="28px">
          {awarenessItem.titel}
        </Typography>
      }
      hasChevron
      hasAnimation
      setOpen={setOpen}
      open={open}
    >
      <Wrapper>
        <AdjMarkdownConfig content={awarenessItem.beschreibung as string} />
      </Wrapper>
    </Accordion>
  );
};

export default AwarenessAccordion;
