import Landing from '@app/components/Landing';
import SeoHead from '@app/components/SeoHead';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <SeoHead />
      <Landing />
    </>
  );
};

export default Home;
