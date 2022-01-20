import './CompareItem.css';

const CompareItem = ({ id, imageSrc, title, bladeLength, material, price }) => {
  return (
    <div className="compare-item">
      <div>
        <img className="compare-image" src={imageSrc}></img>
      </div>
      <div className="compare-info">
        <h2 className="compare-description">{title}</h2>
        <h2 className="compare-description">Blade Length: {bladeLength}</h2>
        <h2 className="compare-description">Material: {material}</h2>
        <h2 className="compare-description">{price} $</h2>
      </div>
    </div>
  );
};
export default CompareItem;
