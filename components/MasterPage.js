import Head from 'next/head';
import Navbar from './Navbar';

const MasterPage = props => (
    <React.Fragment>
        <Head>
            <title>Bitcoins App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://bootswatch.com/4/solar/bootstrap.min.css" />
        </Head>

        <Navbar />
        <div className='container'>
            {props.children}
        </div>
    </React.Fragment>
)

export default MasterPage;