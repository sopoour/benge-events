import { FC } from 'react';
import {
  ColTitle,
  EventBoxContent,
  EventCol,
  EventTable,
  EventTitle,
  OverviewContainer,
  VenueBox,
} from '../styles';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import { header } from '@app/styles/fonts';

const SkeletonStyle = styled(Skeleton)`
  && {
    border-radius: 4px;
    opacity: 0.8;
  }
`;

const EventBoxSkeleton = styled(EventBoxContent)`
  ${EventTitle} {
    font-family: ${header.style.fontFamily} !important;
    font-weight: 700;
  }
  ${({ theme }) => theme.media('sm')`
   margin-top: 40px;
   width: 450px !important;
  `}
`;

const eventTitles = ['Workshop', 'Konzert', 'DJ'];

type Props = {
  hasSubTitle?: boolean;
};

const LoadingSkeleton: FC<Props> = ({ hasSubTitle }) => (
  <EventBoxSkeleton>
    <OverviewContainer>
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
              <SkeletonStyle height={15} width={80} />
            </EventTitle>
          </EventCol>
        ))}
      </EventTable>
      {/* <SkeletonStyle height={30} width={200} /> */}
    </OverviewContainer>
  </EventBoxSkeleton>
);

export default LoadingSkeleton;
