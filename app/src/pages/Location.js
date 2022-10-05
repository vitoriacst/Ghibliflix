import CardSearch from '../components/CardsSearch';
import Header from '../components/Header';

const Location = () => {
  return (
    <>
      <Header />
      <div>
        <div className="flex flex-wrap gap-6 p-6 justify-center">
          <CardSearch url="locations" />
        </div>
      </div>
    </>
  );
};

export default Location;
