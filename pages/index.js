import MasterPage from '../components/MasterPage';
import fetch from 'isomorphic-unfetch';
import Price from '../components/Price';
import News from '../components/News';

const Index = props => (
    <MasterPage>
        <div className='row'>
            <div className='col-12'>
                <Price
                price={props.priceBitcoin}
                />
            </div>
            <div className='col-md-12'>
                <News 
                news={props.newsBitcoin}
                />
            </div>
        </div>
    </MasterPage>
);

Index.getInitialProps = async () => {
    const price = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BIT&CMC_PRO_API_KEY=959f5f4f-cf55-4666-95c7-48778c878863');
    const news = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-11-26&sortBy=publishedAt&lang=en&apiKey=39a9575bf2c8463a9a139fd02e495797');

    const respPrice= await price.json();
    const respNews = await news.json();

    return {
        priceBitcoin: respPrice.data.BIT.quote.USD,
        newsBitcoin: respNews.articles
    }
}

export default Index;
