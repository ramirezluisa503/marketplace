import Layout from '@/components/layout/layout';
import * as React from 'react';

interface IHomeProps{

}

const Home: React.FunctionComponent<IHomeProps> = (props) =>{
    return (
      <Layout>
        <div>Home</div>
      </Layout>

    );   
};

export default Home;