import { FC, useState } from 'react';
import Accordion from '../Accordion/Accordion';
import Typography from '../Typography/Typography';
import { GroupedLexikonData } from '@app/pages/lexikon';
import styled from 'styled-components';
import { flexColumn } from '@app/styles/mixins';
import { text } from '@app/styles/fonts';

const LexikonWrapper = styled.div`
  ${flexColumn};
  gap: 24px;
  padding: 12px 0;
`;
const LexikonEintrag = styled.div`
  ${flexColumn};
  gap: 8px;
`;

type Props = {
  lexikonGrouped: GroupedLexikonData;
};

const LexikonAccordion: FC<Props> = ({ lexikonGrouped }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Accordion
      header={
        <Typography as="h2" fontSize="20px">
          {lexikonGrouped.kategorie}
        </Typography>
      }
      hasChevron
      hasAnimation
      setOpen={setOpen}
      open={open}
    >
      <LexikonWrapper>
        {lexikonGrouped.elements.map((lexikonEintrag) => (
          <LexikonEintrag key={lexikonEintrag.titel}>
            <Typography fontSize="18px" as="h3">
              {lexikonEintrag.titel}
            </Typography>
            <Typography type={text.style.fontFamily} fontSize="14px" fontWeight={400}>
              {lexikonEintrag.beschreibung}
            </Typography>
          </LexikonEintrag>
        ))}
      </LexikonWrapper>
    </Accordion>
  );
};

export default LexikonAccordion;
