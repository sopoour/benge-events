import { FC } from 'react';
import { ColTitle, EventBoxContent, EventCol, EventTable, EventTitle, VenueBox } from './styles';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';

const SkeletonStyle = styled(Skeleton)`
  && {
    border-radius: 4px;
    opacity: 0.8;
  }
`;

const eventTitles = ['Workshop', 'Konzert', 'DJ'];

type Props = {
  hasSubTitle?: boolean;
};

const LoadingSkeleton: FC<Props> = ({ hasSubTitle }) => (
  <EventBoxContent>
    {hasSubTitle && <SkeletonStyle height={15} width={150} />}
    <SkeletonStyle height={30} width={300} />
    <VenueBox style={{ gap: '8px' }}>
      <SkeletonStyle height={15} width="60%" />
      <SkeletonStyle height={15} width="30%" />
      <SkeletonStyle height={40} width="90%" />
      <SkeletonStyle height={15} width="60%" />
    </VenueBox>
    <EventTable>
      {eventTitles.map((eventTitle) => (
        <EventCol key={eventTitle + 'skeleton'}>
          <ColTitle>{eventTitle}</ColTitle>
          <EventTitle>
            <SkeletonStyle height={15} width={80} />
          </EventTitle>
        </EventCol>
      ))}
    </EventTable>
  </EventBoxContent>
);

export default LoadingSkeleton;
