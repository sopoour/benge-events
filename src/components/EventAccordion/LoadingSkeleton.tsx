import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import Accordion from '../Accordion/Accordion';
import { Header } from './index';

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

const LoadingSkeleton: FC<Props> = ({ hasSubTitle = true }) => (
  <Accordion
    open={false}
    header={
      <Header>
        <SkeletonStyle height={30} width={200} />
        {hasSubTitle && <SkeletonStyle height={30} width={100} />}
      </Header>
    }
  >
    <></>
  </Accordion>
);

export default LoadingSkeleton;
