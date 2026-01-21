import { FC } from 'react';
import { Bubbles } from '.';
import { Bubble, BubbleWrapper } from './styles';
import Typography from '../Typography/Typography';

type Props = {
  slicedBubbles: Bubbles[];
  lang: string;
};

const MobileBubbles: FC<Props> = ({ slicedBubbles, lang }) => (
  <BubbleWrapper>
    {slicedBubbles.map((b, i) => (
      <Bubble
        key={i}
        href={b.href}
        className="bubble"
        style={{
          top: b.top,
          left: b.left,
          width: '85px',
          height: '85px',
        }}
      >
        <Typography fontSize="14px">{lang === 'en' ? b.nameEn : b.name}</Typography>
      </Bubble>
    ))}
  </BubbleWrapper>
);

export default MobileBubbles;
