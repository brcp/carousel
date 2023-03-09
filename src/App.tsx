import CustomCarousel from './components/Carousel';
import CarouselItem from './components/CarouselItem';

export interface Item {
  name: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  job: string;
  income: number;
  currency: string;
  [key: string]: unknown;
}

const App = () => {
  const items: Item[] = [
    {
      name: 'Blanca Rosa',
      lastName: 'Cabrera Payán',
      phoneNumber: '7714-6400',
      address: 'Managua, Nicaragua',
      job: 'Mi lugar de trabajo inventado',
      income: 10000,
      currency: 'USD',
    },
    {
      name: 'Blanca Rosa Otro',
      lastName: 'Cabrera Payán',
      phoneNumber: '7714-6400',
      address: 'Managua, Nicaragua',
      job: 'Mi lugar de trabajo inventado',
      income: 10000,
      currency: 'USD',
    },
    {
      name: 'Blanca Rosa Otro Nuevo',
      lastName: 'Cabrera Payán',
      phoneNumber: '7714-6400',
      address: 'Managua, Nicaragua',
      job: 'Mi lugar de trabajo inventado',
      income: 10000,
      currency: 'USD',
    },
  ];

  const itemsElement = items.map((item, index) => (
    <CarouselItem key={index} item={item} />
  ));

  return (
    <>
      <h4>Oportunidades: </h4>
      <CustomCarousel items={itemsElement} />
    </>
  );
};

export default App;
