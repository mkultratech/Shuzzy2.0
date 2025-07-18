import PageTitle from '../components/PageTitle';
import LoggedInName from '../components/LoggedInName';
import CardUI from '../components/CardUI';

const CardPage = () =>
{
    return(
        <div>
            <PageTitle title="Dashboard" />
            <CardUI />
            <LoggedInName />
        </div>
    );
}

export default CardPage;
