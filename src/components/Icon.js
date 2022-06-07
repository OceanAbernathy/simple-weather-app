import React from 'react';

import {
  WiDaySunny,
  WiDaySunnyOvercast,
  WiDayFog,
  WiFog,
  WiDayCloudyHigh,
  WiShowers,
  WiDayShowers,
  WiDayCloudy,
  WiCloudy,
  WiStormShowers,
  WiDayStormShowers,
  WiRain,
  WiSnow,
  WiDaySnow,
  WiSleet,
  WiRainMix,
  WiSnowflakeCold,
  WiWindy,
  WiNightClear,
  WiNightCloudy,
  WiNightFog,
  WiNightShowers,
  WiHot,
  WiNightCloudyHigh,
  WiNightStormShowers,
  WiNightSnow,
} from 'react-icons/wi';

export default function Icon(props) {
  let icon = '';
  switch (props.icon) {
    case 1:
      icon = <WiDaySunny />;
      break;
    case 2:
      icon = <WiDaySunnyOvercast />;
      break;
    case 3:
    case 4:
      icon = <WiDayCloudy />;
      break;
    case 5:
      icon = <WiDayFog />;
      break;
    case 6:
      icon = <WiDayCloudyHigh />;
      break;
    case 7:
    case 8:
      icon = <WiCloudy />;
      break;
    case 11:
      icon = <WiFog />;
      break;
    case 12:
      icon = <WiShowers />;
      break;
    case 13:
    case 14:
      icon = <WiDayShowers />;
      break;
    case 15:
      icon = <WiStormShowers />;
      break;
    case 16:
    case 17:
      icon = <WiDayStormShowers />;
      break;
    case 18:
      icon = <WiRain />;
      break;
    case 19:
    case 22:
      icon = <WiSnow />;
      break;
    case 20:
    case 21:
    case 23:
      icon = <WiDaySnow />;
      break;
    case 24:
      //TODO ice
      icon = <WiDaySnow />;
      break;
    case 25:
    case 26:
      icon = <WiSleet />;
      break;
    case 29:
      icon = <WiRainMix />;
      break;
    case 30:
      icon = <WiHot />;
      break;
    case 31:
      icon = <WiSnowflakeCold />;
      break;
    case 32:
      icon = <WiWindy />;
      break;
    case 33:
      icon = <WiNightClear />;
      break;
    case 34:
      icon = <WiNightCloudy />;
      break;
    case 35:
    case 36:
    case 38:
      icon = <WiNightCloudyHigh />;
      break;
    case 37:
      icon = <WiNightFog />;
      break;
    case 39:
    case 40:
      icon = <WiNightShowers />;
      break;
    case 41:
    case 42:
      icon = <WiNightStormShowers />;
      break;
    case 43:
    case 44:
      icon = <WiNightSnow />;
      break;
  }
  return <div>{icon}</div>;
}
