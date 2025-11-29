import { FC } from 'react';
import { Bubbles } from '.';
import { Bubble, BubbleWrapper } from './styles';
import Typography from '../Typography/Typography';

type Props = {
  slicedBubbles: Bubbles[];
};

const MobileBubbles: FC<Props> = ({ slicedBubbles }) => (
  <BubbleWrapper>
    {slicedBubbles.map((b, i) => (
      <Bubble
        key={i}
        href={b.href}
        className="bubble"
        style={{
          top: b.top,
          left: b.left,
          width: '80px',
          height: '80px',
        }}
      >
        <Typography fontSize="14px">{b.name}</Typography>
      </Bubble>
    ))}
  </BubbleWrapper>
);

export default MobileBubbles;
