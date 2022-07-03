import Icon from './Icon.js';

const Current = (props) => {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();

  return (
    <div className='weather__card'>
      <div className='weather__card__title__container'>
        <h5 className='weather__card__title'>Current Weather</h5>
        <h6 className='weather__card__time'>
          {(hours > 12 ? hours - 12 : hours) ||
            (hours == 0 ? (hours = 12) : hours)}
          :{minutes < 10 ? '0' + minutes : minutes}
        </h6>
        <span>{hours >= 12 ? 'PM' : 'AM'}</span>
      </div>
      <div
        className={`weather__card__icon ${props.icon <= 32 ? 'day' : 'night'}`}
      >
        <Icon icon={props.icon} />
      </div>
      <div className='weather__card__temp__container'>
        <h3 className='weather__card__temp'>{props.temp}°</h3>
      </div>
      <p className='weather__card__condition'>{props.condition}</p>
    </div>
  );
};

export default Current;
