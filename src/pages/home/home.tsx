import Layout from '@/components/layout/layout';
import * as React from 'react';

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <Layout>
      <div className="h-screen w-screen bg-[linear-gradient(to_bottom,#031d42_0%,#2e6ec8_25%,#ffffff_75%,#235a7c_100%)] text-white">
        Home
      </div>
    </Layout>
  );
};

export default Home;
