import Icon from './Icon.js';

const Tonight = (props) => {
  let month = new Date().getMonth();
  let day = new Date().getDate();
  return (
    <div className='weather__card'>
      <div className='weather__card__title__container'>
        <h5 className='weather__card__title'>Tonight</h5>
        <h6 className='weather__card__time'>
          {month + 1}/{day}
        </h6>
      </div>
      <div
        className={`weather__card__icon ${props.icon <= 32 ? 'day' : 'night'}`}
      >
        <Icon icon={props.icon} />
      </div>
      <div className='weather__card__temp__container'>
        <h3 className='weather__card__temp'>{props.temp}°</h3>
        <p className='weather__card__state'>Lo</p>
      </div>
      <p className='weather__card__condition'>{props.condition}</p>
    </div>
  );
};

export default Tonight;
