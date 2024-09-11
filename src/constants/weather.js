import moon from '@assets/weather/moon.webp';
import moon_blizzard from '@assets/weather/moon_blizzard.webp';
import moon_clouds from '@assets/weather/moon_clouds.webp';
import moon_fog from '@assets/weather/moon_fog.webp';
import moon_lightning from '@assets/weather/moon_lightning.webp';
import moon_rain from '@assets/weather/moon_rain.webp';
import moon_rain_snow from '@assets/weather/moon_rain_snow.webp';
import NA_blizzard from '@assets/weather/NA_blizzard.webp';
import NA_clouds from '@assets/weather/NA_clouds.webp';
import NA_fog from '@assets/weather/NA_fog.webp';
import NA_lightning from '@assets/weather/NA_lightning.webp';
import NA_rain from '@assets/weather/NA_rain.webp';
import NA_rain_snow from '@assets/weather/NA_rain_snow.webp';
import sun from '@assets/weather/sun.webp';
import sun_blizzard from '@assets/weather/sun_blizzard.webp';
import sun_clouds from '@assets/weather/sun_clouds.webp';
import sun_fog from '@assets/weather/sun_fog.webp';
import sun_lightning from '@assets/weather/sun_lightning.webp';
import sun_rain from '@assets/weather/sun_rain.webp';
import sun_rain_snow from '@assets/weather/sun_rain_snow.webp';

const WEATHER_CODES = [
    {code: 0, description: 'Clear sky', icons: {day: sun, night: moon}},
    {code: 1, description: 'Mainly clear', icons: {day: sun, night: moon}},
    {code: 2, description: 'Partly cloudy', icons: {day: sun_clouds, night: moon_clouds}},
    {code: 3, description: 'Overcast', icons: {day: NA_clouds, night: NA_clouds}},
    {code: 45, description: 'Fog', icons: {day: sun_fog, night: moon_fog}},
    {code: 48, description: 'Rime', icons: {day: NA_fog, night: NA_fog}},
    {code: 51, description: 'Light drizzle', icons: {day: NA_fog, night: NA_fog}},
    {code: 53, description: 'Moderate drizzle', icons: {day: NA_fog, night: NA_fog}},
    {code: 55, description: 'Dense drizzle', icons: {day: NA_fog, night: NA_fog}},
    {code: 56, description: 'Freezing Drizzle: Light intensity'},
    {code: 57, description: 'Freezing Drizzle: Dense intensity'},
    {code: 61, description: 'Slight rain', icons: {day: sun_rain, night: moon_rain}},
    {code: 63, description: 'Moderate rain', icons: {day: sun_rain, night: moon_rain}},
    {code: 65, description: 'Heavy Rain', icons: {day: NA_rain, night: NA_rain}},
    {code: 66, description: 'Light freezing rain', icons: {day: sun_rain_snow, night: moon_rain_snow}},
    {code: 67, description: 'Heavy freezing rain', icons: {day: NA_rain_snow, night: NA_rain_snow}},
    {code: 71, description: 'Slight snow', icons: {day: sun_blizzard, night: moon_blizzard}},
    {code: 73, description: 'Moderate snow', icons: {day: sun_blizzard, night: moon_blizzard}},
    {code: 75, description: 'Heavy Snow', icons: {day: NA_blizzard, night: NA_blizzard}},
    {code: 77, description: 'Snow grains', icons: {day: NA_rain_snow, night: NA_rain_snow}},
    {code: 80, description: 'Slight rain', icons: {day: sun_rain, night: moon_rain}},
    {code: 81, description: 'Moderate rain', icons: {day: sun_rain, night: moon_rain}},
    {code: 82, description: 'Violent rain', icons: {day: NA_rain, night: NA_rain}},
    {code: 85, description: 'Slight snow showers', icons: {day: sun_rain_snow, night: moon_rain_snow}},
    {code: 86, description: 'Heavy snow showers', icons: {day: sun_rain_snow, night: moon_rain_snow}},
    {code: 95, description: 'Slight thunderstorm', icons: {day: sun_lightning, night: moon_lightning}},
    {code: 96, description: 'Moderate thunderstorm', icons: {day: sun_lightning, night: moon_lightning}},
    {code: 99, description: 'Thunderstorm with hail', icons: {day: NA_lightning, night: NA_lightning}},
]

export default WEATHER_CODES