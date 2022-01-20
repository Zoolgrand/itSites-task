import './CompareField.css';
import CompareItem from '../CompareItem/CompareItem';
import { useSelector } from 'react-redux';

const CompareField = () => {
  const compareItems = useSelector((state) => state.compare);

  return (
    <section className="compare">
      {compareItems.map((item) => (
        <CompareItem
          key={item.id}
          id={item.id}
          imageSrc={item.imageSrc}
          title={item.title}
          bladeLength={item.bladeLength}
          material={item.material}
          price={item.price}
        />
      ))}
    </section>
  );
};
export default CompareField;
