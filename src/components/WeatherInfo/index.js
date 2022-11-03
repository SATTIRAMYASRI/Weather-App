import {Component} from 'react'
import ResultCard from '../ResultCard'
import ResultHourlyCard from '../ResultHoutlyCard'
import './index.css'

const WhetherData = [
  {
    bangalore: {
      hourly: [
        {
          DateTime: '2022-10-28T21:00:00+05:30',
          EpochDateTime: 1666971000,
          WeatherIcon: 35,
          IconPhrase: 'Partly cloudy',
          HasPrecipitation: false,
          IsDaylight: false,
          Temperature: {
            Value: 21.8,
            Unit: 'C',
            UnitType: 17,
          },
        },
        {
          DateTime: '2022-10-28T22:00:00+05:30',
          EpochDateTime: 1666974600,
          WeatherIcon: 35,
          IconPhrase: 'Partly cloudy',
          HasPrecipitation: false,
          IsDaylight: false,
          Temperature: {
            Value: 21.2,
            Unit: 'C',
            UnitType: 17,
          },
        },
        {
          DateTime: '2022-10-28T23:00:00+05:30',
          EpochDateTime: 1666978200,
          WeatherIcon: 35,
          IconPhrase: 'Partly cloudy',
          HasPrecipitation: false,
          IsDaylight: false,
          Temperature: {
            Value: 20.7,
            Unit: 'C',
            UnitType: 17,
          },
        },
        {
          DateTime: '2022-10-29T00:00:00+05:30',
          EpochDateTime: 1666981800,
          WeatherIcon: 35,
          IconPhrase: 'Partly cloudy',
          HasPrecipitation: false,
          IsDaylight: false,
          Temperature: {
            Value: 20.3,
            Unit: 'C',
            UnitType: 17,
          },
        },
        {
          DateTime: '2022-10-29T01:00:00+05:30',
          EpochDateTime: 1666985400,
          WeatherIcon: 36,
          IconPhrase: 'Intermittent clouds',
          HasPrecipitation: false,
          IsDaylight: false,
          Temperature: {
            Value: 20.1,
            Unit: 'C',
            UnitType: 17,
          },
        },
      ],
      days: [
        {
          Date: '2022-10-28T07:00:00+05:30',
          EpochDate: 1666920600,
          Sun: {
            Rise: '2022-10-28T06:12:00+05:30',
            EpochRise: 1666917720,
            Set: '2022-10-28T17:55:00+05:30',
            EpochSet: 1666959900,
          },
          Moon: {
            Rise: '2022-10-28T08:49:00+05:30',
            EpochRise: 1666927140,
            Set: '2022-10-28T20:26:00+05:30',
            EpochSet: 1666968960,
            Phase: 'WaxingCrescent',
            Age: 3,
          },
          Temperature: {
            Minimum: {
              Value: 18.7,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 28.2,
              Unit: 'C',
              UnitType: 17,
            },
          },
        },
        {
          Date: '2022-10-29T07:00:00+05:30',
          EpochDate: 1667007000,
          Sun: {
            Rise: '2022-10-29T06:12:00+05:30',
            EpochRise: 1667004120,
            Set: '2022-10-29T17:54:00+05:30',
            EpochSet: 1667046240,
          },
          Moon: {
            Rise: '2022-10-29T09:54:00+05:30',
            EpochRise: 1667017440,
            Set: '2022-10-29T21:27:00+05:30',
            EpochSet: 1667059020,
            Phase: 'WaxingCrescent',
            Age: 4,
          },
          Temperature: {
            Minimum: {
              Value: 18.9,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 27.1,
              Unit: 'C',
              UnitType: 17,
            },
          },
        },
        {
          Date: '2022-10-30T07:00:00+05:30',
          EpochDate: 1667093400,
          Sun: {
            Rise: '2022-10-30T06:13:00+05:30',
            EpochRise: 1667090580,
            Set: '2022-10-30T17:54:00+05:30',
            EpochSet: 1667132640,
          },
          Moon: {
            Rise: '2022-10-30T10:57:00+05:30',
            EpochRise: 1667107620,
            Set: '2022-10-30T22:30:00+05:30',
            EpochSet: 1667149200,
            Phase: 'WaxingCrescent',
            Age: 5,
          },
          Temperature: {
            Minimum: {
              Value: 18.4,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 27.7,
              Unit: 'C',
              UnitType: 17,
            },
          },
        },
        {
          Date: '2022-10-31T07:00:00+05:30',
          EpochDate: 1667179800,
          Sun: {
            Rise: '2022-10-31T06:13:00+05:30',
            EpochRise: 1667176980,
            Set: '2022-10-31T17:54:00+05:30',
            EpochSet: 1667219040,
          },
          Moon: {
            Rise: '2022-10-31T11:58:00+05:30',
            EpochRise: 1667197680,
            Set: '2022-10-31T23:34:00+05:30',
            EpochSet: 1667239440,
            Phase: 'WaxingCrescent',
            Age: 6,
          },
          Temperature: {
            Minimum: {
              Value: 18.8,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 28.5,
              Unit: 'C',
              UnitType: 17,
            },
          },
        },
        {
          Date: '2022-11-01T07:00:00+05:30',
          EpochDate: 1667266200,
          Sun: {
            Rise: '2022-11-01T06:13:00+05:30',
            EpochRise: 1667263380,
            Set: '2022-11-01T17:53:00+05:30',
            EpochSet: 1667305380,
          },
          Moon: {
            Rise: '2022-11-01T12:53:00+05:30',
            EpochRise: 1667287380,
            Set: '2022-11-02T00:36:00+05:30',
            EpochSet: 1667329560,
            Phase: 'First',
            Age: 7,
          },
          Temperature: {
            Minimum: {
              Value: 19.7,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 27.5,
              Unit: 'C',
              UnitType: 17,
            },
          },
        },
      ],
    },
  },
  {
    chennai: {
      hourly: [
        {
          DateTime: '2022-10-28T21:00:00+05:30',
          EpochDateTime: 1666971000,
          WeatherIcon: 18,
          IconPhrase: 'Rain',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light',
          IsDaylight: false,
          Temperature: {
            Value: 27.4,
            Unit: 'C',
            UnitType: 17,
          },
          RealFeelTemperature: {
            Value: 28.8,
            Unit: 'C',
            UnitType: 17,
            Phrase: 'Very Warm',
          },
          RealFeelTemperatureShade: {
            Value: 28.8,
            Unit: 'C',
            UnitType: 17,
            Phrase: 'Very Warm',
          },
          WetBulbTemperature: {
            Value: 24.0,
            Unit: 'C',
            UnitType: 17,
          },
          DewPoint: {
            Value: 22.4,
            Unit: 'C',
            UnitType: 17,
          },
          Wind: {
            Speed: {
              Value: 11.1,
              Unit: 'km/h',
              UnitType: 7,
            },
            Direction: {
              Degrees: 33,
              Localized: 'NNE',
              English: 'NNE',
            },
          },
          WindGust: {
            Speed: {
              Value: 22.2,
              Unit: 'km/h',
              UnitType: 7,
            },
          },
          RelativeHumidity: 74,
          IndoorRelativeHumidity: 74,
          Visibility: {
            Value: 11.3,
            Unit: 'km',
            UnitType: 6,
          },
          Ceiling: {
            Value: 549.0,
            Unit: 'm',
            UnitType: 5,
          },
          UVIndex: 0,
          UVIndexText: 'Low',
          PrecipitationProbability: 52,
          ThunderstormProbability: 6,
          RainProbability: 52,
          SnowProbability: 0,
          IceProbability: 0,
          TotalLiquid: {
            Value: 0.4,
            Unit: 'mm',
            UnitType: 3,
          },
          Rain: {
            Value: 0.4,
            Unit: 'mm',
            UnitType: 3,
          },
          Snow: {
            Value: 0.0,
            Unit: 'cm',
            UnitType: 4,
          },
          Ice: {
            Value: 0.0,
            Unit: 'mm',
            UnitType: 3,
          },
          CloudCover: 76,
          Evapotranspiration: {
            Value: 0.0,
            Unit: 'mm',
            UnitType: 3,
          },
          SolarIrradiance: {
            Value: 0.0,
            Unit: 'W/m²',
            UnitType: 33,
          },
          MobileLink:
            'http://www.accuweather.com/en/in/chennai/206671/hourly-weather-forecast/206671?day=1&hbhhour=21&unit=c&lang=en-us',
          Link:
            'http://www.accuweather.com/en/in/chennai/206671/hourly-weather-forecast/206671?day=1&hbhhour=21&unit=c&lang=en-us',
        },
        {
          DateTime: '2022-10-28T22:00:00+05:30',
          EpochDateTime: 1666974600,
          WeatherIcon: 18,
          IconPhrase: 'Rain',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light',
          IsDaylight: false,
          Temperature: {
            Value: 26.9,
            Unit: 'C',
            UnitType: 17,
          },
          RealFeelTemperature: {
            Value: 28.5,
            Unit: 'C',
            UnitType: 17,
            Phrase: 'Very Warm',
          },
          RealFeelTemperatureShade: {
            Value: 28.5,
            Unit: 'C',
            UnitType: 17,
            Phrase: 'Very Warm',
          },
          WetBulbTemperature: {
            Value: 23.9,
            Unit: 'C',
            UnitType: 17,
          },
          DewPoint: {
            Value: 22.5,
            Unit: 'C',
            UnitType: 17,
          },
          Wind: {
            Speed: {
              Value: 11.1,
              Unit: 'km/h',
              UnitType: 7,
            },
            Direction: {
              Degrees: 33,
              Localized: 'NNE',
              English: 'NNE',
            },
          },
          WindGust: {
            Speed: {
              Value: 22.2,
              Unit: 'km/h',
              UnitType: 7,
            },
          },
          RelativeHumidity: 76,
          IndoorRelativeHumidity: 76,
          Visibility: {
            Value: 11.3,
            Unit: 'km',
            UnitType: 6,
          },
          Ceiling: {
            Value: 549.0,
            Unit: 'm',
            UnitType: 5,
          },
          UVIndex: 0,
          UVIndexText: 'Low',
          PrecipitationProbability: 55,
          ThunderstormProbability: 6,
          RainProbability: 55,
          SnowProbability: 0,
          IceProbability: 0,
          TotalLiquid: {
            Value: 0.4,
            Unit: 'mm',
            UnitType: 3,
          },
          Rain: {
            Value: 0.4,
            Unit: 'mm',
            UnitType: 3,
          },
          Snow: {
            Value: 0.0,
            Unit: 'cm',
            UnitType: 4,
          },
          Ice: {
            Value: 0.0,
            Unit: 'mm',
            UnitType: 3,
          },
          CloudCover: 82,
          Evapotranspiration: {
            Value: 0.0,
            Unit: 'mm',
            UnitType: 3,
          },
          SolarIrradiance: {
            Value: 0.0,
            Unit: 'W/m²',
            UnitType: 33,
          },
          MobileLink:
            'http://www.accuweather.com/en/in/chennai/206671/hourly-weather-forecast/206671?day=1&hbhhour=22&unit=c&lang=en-us',
          Link:
            'http://www.accuweather.com/en/in/chennai/206671/hourly-weather-forecast/206671?day=1&hbhhour=22&unit=c&lang=en-us',
        },
        {
          DateTime: '2022-10-28T23:00:00+05:30',
          EpochDateTime: 1666978200,
          WeatherIcon: 18,
          IconPhrase: 'Rain',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light',
          IsDaylight: false,
          Temperature: {
            Value: 26.5,
            Unit: 'C',
            UnitType: 17,
          },
          RealFeelTemperature: {
            Value: 28.3,
            Unit: 'C',
            UnitType: 17,
            Phrase: 'Very Warm',
          },
          RealFeelTemperatureShade: {
            Value: 28.3,
            Unit: 'C',
            UnitType: 17,
            Phrase: 'Very Warm',
          },
          WetBulbTemperature: {
            Value: 23.9,
            Unit: 'C',
            UnitType: 17,
          },
          DewPoint: {
            Value: 22.6,
            Unit: 'C',
            UnitType: 17,
          },
          Wind: {
            Speed: {
              Value: 9.3,
              Unit: 'km/h',
              UnitType: 7,
            },
            Direction: {
              Degrees: 32,
              Localized: 'NNE',
              English: 'NNE',
            },
          },
          WindGust: {
            Speed: {
              Value: 22.2,
              Unit: 'km/h',
              UnitType: 7,
            },
          },
          RelativeHumidity: 79,
          IndoorRelativeHumidity: 79,
          Visibility: {
            Value: 9.7,
            Unit: 'km',
            UnitType: 6,
          },
          Ceiling: {
            Value: 549.0,
            Unit: 'm',
            UnitType: 5,
          },
          UVIndex: 0,
          UVIndexText: 'Low',
          PrecipitationProbability: 55,
          ThunderstormProbability: 6,
          RainProbability: 55,
          SnowProbability: 0,
          IceProbability: 0,
          TotalLiquid: {
            Value: 0.4,
            Unit: 'mm',
            UnitType: 3,
          },
          Rain: {
            Value: 0.4,
            Unit: 'mm',
            UnitType: 3,
          },
          Snow: {
            Value: 0.0,
            Unit: 'cm',
            UnitType: 4,
          },
          Ice: {
            Value: 0.0,
            Unit: 'mm',
            UnitType: 3,
          },
          CloudCover: 88,
          Evapotranspiration: {
            Value: 0.0,
            Unit: 'mm',
            UnitType: 3,
          },
          SolarIrradiance: {
            Value: 0.0,
            Unit: 'W/m²',
            UnitType: 33,
          },
          MobileLink:
            'http://www.accuweather.com/en/in/chennai/206671/hourly-weather-forecast/206671?day=1&hbhhour=23&unit=c&lang=en-us',
          Link:
            'http://www.accuweather.com/en/in/chennai/206671/hourly-weather-forecast/206671?day=1&hbhhour=23&unit=c&lang=en-us',
        },
        {
          DateTime: '2022-10-29T00:00:00+05:30',
          EpochDateTime: 1666981800,
          WeatherIcon: 18,
          IconPhrase: 'Rain',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light',
          IsDaylight: false,
          Temperature: {
            Value: 26.1,
            Unit: 'C',
            UnitType: 17,
          },
          RealFeelTemperature: {
            Value: 27.9,
            Unit: 'C',
            UnitType: 17,
            Phrase: 'Very Warm',
          },
          RealFeelTemperatureShade: {
            Value: 27.9,
            Unit: 'C',
            UnitType: 17,
            Phrase: 'Very Warm',
          },
          WetBulbTemperature: {
            Value: 23.8,
            Unit: 'C',
            UnitType: 17,
          },
          DewPoint: {
            Value: 22.5,
            Unit: 'C',
            UnitType: 17,
          },
          Wind: {
            Speed: {
              Value: 9.3,
              Unit: 'km/h',
              UnitType: 7,
            },
            Direction: {
              Degrees: 33,
              Localized: 'NNE',
              English: 'NNE',
            },
          },
          WindGust: {
            Speed: {
              Value: 22.2,
              Unit: 'km/h',
              UnitType: 7,
            },
          },
          RelativeHumidity: 81,
          IndoorRelativeHumidity: 81,
          Visibility: {
            Value: 9.7,
            Unit: 'km',
            UnitType: 6,
          },
          Ceiling: {
            Value: 549.0,
            Unit: 'm',
            UnitType: 5,
          },
          UVIndex: 0,
          UVIndexText: 'Low',
          PrecipitationProbability: 55,
          ThunderstormProbability: 6,
          RainProbability: 55,
          SnowProbability: 0,
          IceProbability: 0,
          TotalLiquid: {
            Value: 0.4,
            Unit: 'mm',
            UnitType: 3,
          },
          Rain: {
            Value: 0.4,
            Unit: 'mm',
            UnitType: 3,
          },
          Snow: {
            Value: 0.0,
            Unit: 'cm',
            UnitType: 4,
          },
          Ice: {
            Value: 0.0,
            Unit: 'mm',
            UnitType: 3,
          },
          CloudCover: 94,
          Evapotranspiration: {
            Value: 0.0,
            Unit: 'mm',
            UnitType: 3,
          },
          SolarIrradiance: {
            Value: 0.0,
            Unit: 'W/m²',
            UnitType: 33,
          },
          MobileLink:
            'http://www.accuweather.com/en/in/chennai/206671/hourly-weather-forecast/206671?day=2&hbhhour=0&unit=c&lang=en-us',
          Link:
            'http://www.accuweather.com/en/in/chennai/206671/hourly-weather-forecast/206671?day=2&hbhhour=0&unit=c&lang=en-us',
        },
        {
          DateTime: '2022-10-29T01:00:00+05:30',
          EpochDateTime: 1666985400,
          WeatherIcon: 12,
          IconPhrase: 'Showers',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light',
          IsDaylight: false,
          Temperature: {
            Value: 26.0,
            Unit: 'C',
            UnitType: 17,
          },
          RealFeelTemperature: {
            Value: 27.4,
            Unit: 'C',
            UnitType: 17,
            Phrase: 'Very Warm',
          },
          RealFeelTemperatureShade: {
            Value: 27.4,
            Unit: 'C',
            UnitType: 17,
            Phrase: 'Very Warm',
          },
          WetBulbTemperature: {
            Value: 23.9,
            Unit: 'C',
            UnitType: 17,
          },
          DewPoint: {
            Value: 22.7,
            Unit: 'C',
            UnitType: 17,
          },
          Wind: {
            Speed: {
              Value: 9.3,
              Unit: 'km/h',
              UnitType: 7,
            },
            Direction: {
              Degrees: 36,
              Localized: 'NE',
              English: 'NE',
            },
          },
          WindGust: {
            Speed: {
              Value: 20.4,
              Unit: 'km/h',
              UnitType: 7,
            },
          },
          RelativeHumidity: 82,
          IndoorRelativeHumidity: 82,
          Visibility: {
            Value: 9.7,
            Unit: 'km',
            UnitType: 6,
          },
          Ceiling: {
            Value: 2012.0,
            Unit: 'm',
            UnitType: 5,
          },
          UVIndex: 0,
          UVIndexText: 'Low',
          PrecipitationProbability: 60,
          ThunderstormProbability: 12,
          RainProbability: 60,
          SnowProbability: 0,
          IceProbability: 0,
          TotalLiquid: {
            Value: 0.9,
            Unit: 'mm',
            UnitType: 3,
          },
          Rain: {
            Value: 0.9,
            Unit: 'mm',
            UnitType: 3,
          },
          Snow: {
            Value: 0.0,
            Unit: 'cm',
            UnitType: 4,
          },
          Ice: {
            Value: 0.0,
            Unit: 'mm',
            UnitType: 3,
          },
          CloudCover: 95,
          Evapotranspiration: {
            Value: 0.0,
            Unit: 'mm',
            UnitType: 3,
          },
          SolarIrradiance: {
            Value: 0.0,
            Unit: 'W/m²',
            UnitType: 33,
          },
          MobileLink:
            'http://www.accuweather.com/en/in/chennai/206671/hourly-weather-forecast/206671?day=2&hbhhour=1&unit=c&lang=en-us',
          Link:
            'http://www.accuweather.com/en/in/chennai/206671/hourly-weather-forecast/206671?day=2&hbhhour=1&unit=c&lang=en-us',
        },
      ],
      days: [
        {
          Date: '2022-10-28T07:00:00+05:30',
          EpochDate: 1666920600,
          Sun: {
            Rise: '2022-10-28T06:02:00+05:30',
            EpochRise: 1666917120,
            Set: '2022-10-28T17:44:00+05:30',
            EpochSet: 1666959240,
          },
          Moon: {
            Rise: '2022-10-28T08:38:00+05:30',
            EpochRise: 1666926480,
            Set: '2022-10-28T20:15:00+05:30',
            EpochSet: 1666968300,
            Phase: 'WaxingCrescent',
            Age: 3,
          },
          Temperature: {
            Minimum: {
              Value: 24.9,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 30.1,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 26.8,
              Unit: 'C',
              UnitType: 17,
              Phrase: 'Very Warm',
            },
            Maximum: {
              Value: 34.5,
              Unit: 'C',
              UnitType: 17,
              Phrase: 'Hot',
            },
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 26.8,
              Unit: 'C',
              UnitType: 17,
              Phrase: 'Very Warm',
            },
            Maximum: {
              Value: 32.7,
              Unit: 'C',
              UnitType: 17,
              Phrase: 'Hot',
            },
          },
          HoursOfSun: 5.7,
          DegreeDaySummary: {
            Heating: {
              Value: 0.0,
              Unit: 'C',
              UnitType: 17,
            },
            Cooling: {
              Value: 9.0,
              Unit: 'C',
              UnitType: 17,
            },
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 0,
              Category: 'Good',
              CategoryValue: 1,
              Type: 'Ozone',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1,
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1,
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1,
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1,
            },
            {
              Name: 'UVIndex',
              Value: 7,
              Category: 'High',
              CategoryValue: 3,
            },
          ],
          Day: {
            Icon: 14,
            IconPhrase: 'Partly sunny w/ showers',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Light',
            ShortPhrase: 'Showers late this morning',
            LongPhrase:
              'A couple of showers late this morning; times of clouds and sun',
            PrecipitationProbability: 69,
            ThunderstormProbability: 14,
            RainProbability: 69,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 14.8,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 32,
                Localized: 'NNE',
                English: 'NNE',
              },
            },
            WindGust: {
              Speed: {
                Value: 35.2,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 360,
                Localized: 'N',
                English: 'N',
              },
            },
            TotalLiquid: {
              Value: 2.2,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 2.2,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 1.0,
            HoursOfRain: 1.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 56,
            Evapotranspiration: {
              Value: 3.3,
              Unit: 'mm',
              UnitType: 3,
            },
            SolarIrradiance: {
              Value: 4001.7,
              Unit: 'W/m²',
              UnitType: 33,
            },
          },
          Night: {
            Icon: 18,
            IconPhrase: 'Rain',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Light',
            ShortPhrase: 'Occasional rain, mainly early',
            LongPhrase:
              'Mostly cloudy with occasional rain and drizzle, mainly early',
            PrecipitationProbability: 84,
            ThunderstormProbability: 17,
            RainProbability: 84,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 9.3,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 37,
                Localized: 'NE',
                English: 'NE',
              },
            },
            WindGust: {
              Speed: {
                Value: 25.9,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 29,
                Localized: 'NNE',
                English: 'NNE',
              },
            },
            TotalLiquid: {
              Value: 3.6,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 3.6,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 3.0,
            HoursOfRain: 3.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 88,
            Evapotranspiration: {
              Value: 0.3,
              Unit: 'mm',
              UnitType: 3,
            },
            SolarIrradiance: {
              Value: 10.9,
              Unit: 'W/m²',
              UnitType: 33,
            },
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://www.accuweather.com/en/in/chennai/206671/daily-weather-forecast/206671?day=1&unit=c&lang=en-us',
          Link:
            'http://www.accuweather.com/en/in/chennai/206671/daily-weather-forecast/206671?day=1&unit=c&lang=en-us',
        },
        {
          Date: '2022-10-29T07:00:00+05:30',
          EpochDate: 1667007000,
          Sun: {
            Rise: '2022-10-29T06:02:00+05:30',
            EpochRise: 1667003520,
            Set: '2022-10-29T17:44:00+05:30',
            EpochSet: 1667045640,
          },
          Moon: {
            Rise: '2022-10-29T09:43:00+05:30',
            EpochRise: 1667016780,
            Set: '2022-10-29T21:16:00+05:30',
            EpochSet: 1667058360,
            Phase: 'WaxingCrescent',
            Age: 4,
          },
          Temperature: {
            Minimum: {
              Value: 24.5,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 30.0,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 25.2,
              Unit: 'C',
              UnitType: 17,
              Phrase: 'Pleasant',
            },
            Maximum: {
              Value: 32.5,
              Unit: 'C',
              UnitType: 17,
              Phrase: 'Hot',
            },
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 25.2,
              Unit: 'C',
              UnitType: 17,
              Phrase: 'Pleasant',
            },
            Maximum: {
              Value: 30.8,
              Unit: 'C',
              UnitType: 17,
              Phrase: 'Very Warm',
            },
          },
          HoursOfSun: 1.3,
          DegreeDaySummary: {
            Heating: {
              Value: 0.0,
              Unit: 'C',
              UnitType: 17,
            },
            Cooling: {
              Value: 9.0,
              Unit: 'C',
              UnitType: 17,
            },
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 0,
              Category: 'Good',
              CategoryValue: 1,
              Type: 'Ozone',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1,
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1,
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1,
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1,
            },
            {
              Name: 'UVIndex',
              Value: 4,
              Category: 'Moderate',
              CategoryValue: 2,
            },
          ],
          Day: {
            Icon: 15,
            IconPhrase: 'Thunderstorms',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Moderate',
            ShortPhrase: 'A morning t-storm in the area',
            LongPhrase:
              'A thunderstorm in parts of the area in the morning; otherwise, mostly cloudy',
            PrecipitationProbability: 43,
            ThunderstormProbability: 26,
            RainProbability: 43,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 13.0,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 52,
                Localized: 'NE',
                English: 'NE',
              },
            },
            WindGust: {
              Speed: {
                Value: 37.0,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 59,
                Localized: 'ENE',
                English: 'ENE',
              },
            },
            TotalLiquid: {
              Value: 2.5,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 2.5,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 1.0,
            HoursOfRain: 1.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 93,
            Evapotranspiration: {
              Value: 2.5,
              Unit: 'mm',
              UnitType: 3,
            },
            SolarIrradiance: {
              Value: 2279.5,
              Unit: 'W/m²',
              UnitType: 33,
            },
          },
          Night: {
            Icon: 34,
            IconPhrase: 'Mostly clear',
            HasPrecipitation: false,
            ShortPhrase: 'Mainly clear',
            LongPhrase: 'Mainly clear',
            PrecipitationProbability: 18,
            ThunderstormProbability: 0,
            RainProbability: 18,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 9.3,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 43,
                Localized: 'NE',
                English: 'NE',
              },
            },
            WindGust: {
              Speed: {
                Value: 29.6,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 50,
                Localized: 'NE',
                English: 'NE',
              },
            },
            TotalLiquid: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 21,
            Evapotranspiration: {
              Value: 0.5,
              Unit: 'mm',
              UnitType: 3,
            },
            SolarIrradiance: {
              Value: 32.1,
              Unit: 'W/m²',
              UnitType: 33,
            },
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://www.accuweather.com/en/in/chennai/206671/daily-weather-forecast/206671?day=2&unit=c&lang=en-us',
          Link:
            'http://www.accuweather.com/en/in/chennai/206671/daily-weather-forecast/206671?day=2&unit=c&lang=en-us',
        },
        {
          Date: '2022-10-30T07:00:00+05:30',
          EpochDate: 1667093400,
          Sun: {
            Rise: '2022-10-30T06:02:00+05:30',
            EpochRise: 1667089920,
            Set: '2022-10-30T17:43:00+05:30',
            EpochSet: 1667131980,
          },
          Moon: {
            Rise: '2022-10-30T10:46:00+05:30',
            EpochRise: 1667106960,
            Set: '2022-10-30T22:19:00+05:30',
            EpochSet: 1667148540,
            Phase: 'WaxingCrescent',
            Age: 5,
          },
          Temperature: {
            Minimum: {
              Value: 24.7,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 30.7,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 27.2,
              Unit: 'C',
              UnitType: 17,
              Phrase: 'Very Warm',
            },
            Maximum: {
              Value: 32.6,
              Unit: 'C',
              UnitType: 17,
              Phrase: 'Hot',
            },
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 27.2,
              Unit: 'C',
              UnitType: 17,
              Phrase: 'Very Warm',
            },
            Maximum: {
              Value: 31.7,
              Unit: 'C',
              UnitType: 17,
              Phrase: 'Hot',
            },
          },
          HoursOfSun: 4.2,
          DegreeDaySummary: {
            Heating: {
              Value: 0.0,
              Unit: 'C',
              UnitType: 17,
            },
            Cooling: {
              Value: 10.0,
              Unit: 'C',
              UnitType: 17,
            },
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 0,
              Category: 'Good',
              CategoryValue: 1,
              Type: 'Ozone',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1,
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1,
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1,
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1,
            },
            {
              Name: 'UVIndex',
              Value: 8,
              Category: 'Very High',
              CategoryValue: 4,
            },
          ],
          Day: {
            Icon: 4,
            IconPhrase: 'Intermittent clouds',
            HasPrecipitation: false,
            ShortPhrase: 'Pleasant with clouds and sun',
            LongPhrase: 'Pleasant with times of clouds and sun',
            PrecipitationProbability: 12,
            ThunderstormProbability: 0,
            RainProbability: 12,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 16.7,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 35,
                Localized: 'NE',
                English: 'NE',
              },
            },
            WindGust: {
              Speed: {
                Value: 44.4,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 34,
                Localized: 'NE',
                English: 'NE',
              },
            },
            TotalLiquid: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 71,
            Evapotranspiration: {
              Value: 3.6,
              Unit: 'mm',
              UnitType: 3,
            },
            SolarIrradiance: {
              Value: 3637.1,
              Unit: 'W/m²',
              UnitType: 33,
            },
          },
          Night: {
            Icon: 38,
            IconPhrase: 'Mostly cloudy',
            HasPrecipitation: false,
            ShortPhrase: 'Increasing clouds',
            LongPhrase: 'Increasing clouds',
            PrecipitationProbability: 25,
            ThunderstormProbability: 0,
            RainProbability: 25,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 11.1,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 16,
                Localized: 'NNE',
                English: 'NNE',
              },
            },
            WindGust: {
              Speed: {
                Value: 33.3,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 29,
                Localized: 'NNE',
                English: 'NNE',
              },
            },
            TotalLiquid: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 98,
            Evapotranspiration: {
              Value: 0.5,
              Unit: 'mm',
              UnitType: 3,
            },
            SolarIrradiance: {
              Value: 9.2,
              Unit: 'W/m²',
              UnitType: 33,
            },
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://www.accuweather.com/en/in/chennai/206671/daily-weather-forecast/206671?day=3&unit=c&lang=en-us',
          Link:
            'http://www.accuweather.com/en/in/chennai/206671/daily-weather-forecast/206671?day=3&unit=c&lang=en-us',
        },
        {
          Date: '2022-10-31T07:00:00+05:30',
          EpochDate: 1667179800,
          Sun: {
            Rise: '2022-10-31T06:02:00+05:30',
            EpochRise: 1667176320,
            Set: '2022-10-31T17:43:00+05:30',
            EpochSet: 1667218380,
          },
          Moon: {
            Rise: '2022-10-31T11:47:00+05:30',
            EpochRise: 1667197020,
            Set: '2022-10-31T23:23:00+05:30',
            EpochSet: 1667238780,
            Phase: 'WaxingCrescent',
            Age: 6,
          },
          Temperature: {
            Minimum: {
              Value: 25.0,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 28.5,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 24.6,
              Unit: 'C',
              UnitType: 17,
              Phrase: 'Pleasant',
            },
            Maximum: {
              Value: 32.4,
              Unit: 'C',
              UnitType: 17,
              Phrase: 'Hot',
            },
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 24.6,
              Unit: 'C',
              UnitType: 17,
              Phrase: 'Pleasant',
            },
            Maximum: {
              Value: 31.6,
              Unit: 'C',
              UnitType: 17,
              Phrase: 'Hot',
            },
          },
          HoursOfSun: 0.7,
          DegreeDaySummary: {
            Heating: {
              Value: 0.0,
              Unit: 'C',
              UnitType: 17,
            },
            Cooling: {
              Value: 9.0,
              Unit: 'C',
              UnitType: 17,
            },
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 0,
              Category: 'Good',
              CategoryValue: 1,
              Type: 'Ozone',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1,
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1,
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1,
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1,
            },
            {
              Name: 'UVIndex',
              Value: 2,
              Category: 'Low',
              CategoryValue: 1,
            },
          ],
          Day: {
            Icon: 12,
            IconPhrase: 'Showers',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Heavy',
            ShortPhrase: 'Cloudy with heavy showers',
            LongPhrase: 'Cloudy with heavy showers',
            PrecipitationProbability: 97,
            ThunderstormProbability: 28,
            RainProbability: 97,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 16.7,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 354,
                Localized: 'N',
                English: 'N',
              },
            },
            WindGust: {
              Speed: {
                Value: 38.9,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 4,
                Localized: 'N',
                English: 'N',
              },
            },
            TotalLiquid: {
              Value: 20.3,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 20.3,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 6.0,
            HoursOfRain: 6.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 100,
            Evapotranspiration: {
              Value: 2.0,
              Unit: 'mm',
              UnitType: 3,
            },
            SolarIrradiance: {
              Value: 2073.0,
              Unit: 'W/m²',
              UnitType: 33,
            },
          },
          Night: {
            Icon: 15,
            IconPhrase: 'Thunderstorms',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Heavy',
            ShortPhrase: 'A couple of t-showers late',
            LongPhrase:
              'Cloudy; a heavy evening shower followed by a couple of thundershowers late',
            PrecipitationProbability: 92,
            ThunderstormProbability: 36,
            RainProbability: 92,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 11.1,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 340,
                Localized: 'NNW',
                English: 'NNW',
              },
            },
            WindGust: {
              Speed: {
                Value: 35.2,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 3,
                Localized: 'N',
                English: 'N',
              },
            },
            TotalLiquid: {
              Value: 13.2,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 13.2,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 3.0,
            HoursOfRain: 3.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 100,
            Evapotranspiration: {
              Value: 0.3,
              Unit: 'mm',
              UnitType: 3,
            },
            SolarIrradiance: {
              Value: 9.2,
              Unit: 'W/m²',
              UnitType: 33,
            },
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://www.accuweather.com/en/in/chennai/206671/daily-weather-forecast/206671?day=4&unit=c&lang=en-us',
          Link:
            'http://www.accuweather.com/en/in/chennai/206671/daily-weather-forecast/206671?day=4&unit=c&lang=en-us',
        },
        {
          Date: '2022-11-01T07:00:00+05:30',
          EpochDate: 1667266200,
          Sun: {
            Rise: '2022-11-01T06:03:00+05:30',
            EpochRise: 1667262780,
            Set: '2022-11-01T17:43:00+05:30',
            EpochSet: 1667304780,
          },
          Moon: {
            Rise: '2022-11-01T12:42:00+05:30',
            EpochRise: 1667286720,
            Set: '2022-11-02T00:24:00+05:30',
            EpochSet: 1667328840,
            Phase: 'First',
            Age: 7,
          },
          Temperature: {
            Minimum: {
              Value: 25.0,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 28.5,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 27.2,
              Unit: 'C',
              UnitType: 17,
              Phrase: 'Very Warm',
            },
            Maximum: {
              Value: 32.1,
              Unit: 'C',
              UnitType: 17,
              Phrase: 'Hot',
            },
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 27.2,
              Unit: 'C',
              UnitType: 17,
              Phrase: 'Very Warm',
            },
            Maximum: {
              Value: 30.9,
              Unit: 'C',
              UnitType: 17,
              Phrase: 'Very Warm',
            },
          },
          HoursOfSun: 1.3,
          DegreeDaySummary: {
            Heating: {
              Value: 0.0,
              Unit: 'C',
              UnitType: 17,
            },
            Cooling: {
              Value: 9.0,
              Unit: 'C',
              UnitType: 17,
            },
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 0,
              Category: 'Good',
              CategoryValue: 1,
              Type: 'Ozone',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1,
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1,
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1,
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Low',
              CategoryValue: 1,
            },
            {
              Name: 'UVIndex',
              Value: 2,
              Category: 'Low',
              CategoryValue: 1,
            },
          ],
          Day: {
            Icon: 6,
            IconPhrase: 'Mostly cloudy',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Heavy',
            ShortPhrase: 'Mostly cloudy with a t-storm',
            LongPhrase: 'Mostly cloudy with a thunderstorm in the area',
            PrecipitationProbability: 80,
            ThunderstormProbability: 48,
            RainProbability: 80,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 13.0,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 345,
                Localized: 'NNW',
                English: 'NNW',
              },
            },
            WindGust: {
              Speed: {
                Value: 27.8,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 338,
                Localized: 'NNW',
                English: 'NNW',
              },
            },
            TotalLiquid: {
              Value: 13.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 13.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 2.0,
            HoursOfRain: 2.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 94,
            Evapotranspiration: {
              Value: 2.0,
              Unit: 'mm',
              UnitType: 3,
            },
            SolarIrradiance: {
              Value: 2346.6,
              Unit: 'W/m²',
              UnitType: 33,
            },
          },
          Night: {
            Icon: 12,
            IconPhrase: 'Showers',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Moderate',
            ShortPhrase: 'A couple of showers late',
            LongPhrase:
              'Cloudy; a thunderstorm in parts of the area in the evening followed by a couple of showers late',
            PrecipitationProbability: 71,
            ThunderstormProbability: 43,
            RainProbability: 71,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 9.3,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 345,
                Localized: 'NNW',
                English: 'NNW',
              },
            },
            WindGust: {
              Speed: {
                Value: 20.4,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 342,
                Localized: 'NNW',
                English: 'NNW',
              },
            },
            TotalLiquid: {
              Value: 5.4,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 5.4,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 3.0,
            HoursOfRain: 3.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 99,
            Evapotranspiration: {
              Value: 0.3,
              Unit: 'mm',
              UnitType: 3,
            },
            SolarIrradiance: {
              Value: 9.4,
              Unit: 'W/m²',
              UnitType: 33,
            },
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://www.accuweather.com/en/in/chennai/206671/daily-weather-forecast/206671?day=5&unit=c&lang=en-us',
          Link:
            'http://www.accuweather.com/en/in/chennai/206671/daily-weather-forecast/206671?day=5&unit=c&lang=en-us',
        },
      ],
    },
  },
  {
    delhi: {
      hourly: [
        {
          DateTime: '2022-10-28T22:00:00+05:30',
          EpochDateTime: 1666974600,
          WeatherIcon: 33,
          IconPhrase: 'Clear',
          HasPrecipitation: false,
          IsDaylight: false,
          Temperature: {
            Value: 25.5,
            Unit: 'C',
            UnitType: 17,
          },
        },
        {
          DateTime: '2022-10-28T23:00:00+05:30',
          EpochDateTime: 1666978200,
          WeatherIcon: 33,
          IconPhrase: 'Clear',
          HasPrecipitation: false,
          IsDaylight: false,
          Temperature: {
            Value: 24.4,
            Unit: 'C',
            UnitType: 17,
          },
        },
        {
          DateTime: '2022-10-29T00:00:00+05:30',
          EpochDateTime: 1666981800,
          WeatherIcon: 33,
          IconPhrase: 'Clear',
          HasPrecipitation: false,
          IsDaylight: false,
          Temperature: {
            Value: 23.3,
            Unit: 'C',
            UnitType: 17,
          },
        },
        {
          DateTime: '2022-10-29T01:00:00+05:30',
          EpochDateTime: 1666985400,
          WeatherIcon: 33,
          IconPhrase: 'Clear',
          HasPrecipitation: false,
          IsDaylight: false,
          Temperature: {
            Value: 22.3,
            Unit: 'C',
            UnitType: 17,
          },
        },
        {
          DateTime: '2022-10-29T02:00:00+05:30',
          EpochDateTime: 1666989000,
          WeatherIcon: 33,
          IconPhrase: 'Clear',
          HasPrecipitation: false,
          IsDaylight: false,
          Temperature: {
            Value: 21.4,
            Unit: 'C',
            UnitType: 17,
          },
        },
      ],
      days: [
        {
          Date: '2022-10-28T07:00:00+05:30',
          EpochDate: 1666920600,
          Sun: {
            Rise: '2022-10-28T06:30:00+05:30',
            EpochRise: 1666918800,
            Set: '2022-10-28T17:40:00+05:30',
            EpochSet: 1666959000,
          },
          Moon: {
            Rise: '2022-10-28T09:26:00+05:30',
            EpochRise: 1666929360,
            Set: '2022-10-28T19:52:00+05:30',
            EpochSet: 1666966920,
            Phase: 'WaxingCrescent',
            Age: 3,
          },
          Temperature: {
            Minimum: {
              Value: 18.6,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 34.3,
              Unit: 'C',
              UnitType: 17,
            },
          },
        },
        {
          Date: '2022-10-29T07:00:00+05:30',
          EpochDate: 1667007000,
          Sun: {
            Rise: '2022-10-29T06:31:00+05:30',
            EpochRise: 1667005260,
            Set: '2022-10-29T17:39:00+05:30',
            EpochSet: 1667045340,
          },
          Moon: {
            Rise: '2022-10-29T10:34:00+05:30',
            EpochRise: 1667019840,
            Set: '2022-10-29T20:49:00+05:30',
            EpochSet: 1667056740,
            Phase: 'WaxingCrescent',
            Age: 4,
          },
          Temperature: {
            Minimum: {
              Value: 17.6,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 32.3,
              Unit: 'C',
              UnitType: 17,
            },
          },
        },
        {
          Date: '2022-10-30T07:00:00+05:30',
          EpochDate: 1667093400,
          Sun: {
            Rise: '2022-10-30T06:32:00+05:30',
            EpochRise: 1667091720,
            Set: '2022-10-30T17:38:00+05:30',
            EpochSet: 1667131680,
          },
          Moon: {
            Rise: '2022-10-30T11:40:00+05:30',
            EpochRise: 1667110200,
            Set: '2022-10-30T21:53:00+05:30',
            EpochSet: 1667146980,
            Phase: 'WaxingCrescent',
            Age: 5,
          },
          Temperature: {
            Minimum: {
              Value: 18.4,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 32.7,
              Unit: 'C',
              UnitType: 17,
            },
          },
        },
        {
          Date: '2022-10-31T07:00:00+05:30',
          EpochDate: 1667179800,
          Sun: {
            Rise: '2022-10-31T06:32:00+05:30',
            EpochRise: 1667178120,
            Set: '2022-10-31T17:38:00+05:30',
            EpochSet: 1667218080,
          },
          Moon: {
            Rise: '2022-10-31T12:37:00+05:30',
            EpochRise: 1667200020,
            Set: '2022-10-31T23:00:00+05:30',
            EpochSet: 1667237400,
            Phase: 'WaxingCrescent',
            Age: 6,
          },
          Temperature: {
            Minimum: {
              Value: 18.7,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 32.8,
              Unit: 'C',
              UnitType: 17,
            },
          },
        },
        {
          Date: '2022-11-01T07:00:00+05:30',
          EpochDate: 1667266200,
          Sun: {
            Rise: '2022-11-01T06:33:00+05:30',
            EpochRise: 1667264580,
            Set: '2022-11-01T17:37:00+05:30',
            EpochSet: 1667304420,
          },
          Moon: {
            Rise: '2022-11-01T13:28:00+05:30',
            EpochRise: 1667289480,
            Set: '2022-11-02T00:08:00+05:30',
            EpochSet: 1667327880,
            Phase: 'First',
            Age: 7,
          },
          Temperature: {
            Minimum: {
              Value: 18.8,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 32.7,
              Unit: 'C',
              UnitType: 17,
            },
          },
        },
      ],
    },
  },
  {
    hyderabad: {
      hourly: [
        {
          DateTime: '2022-10-28T20:00:00+05:00',
          EpochDateTime: 1666969200,
          WeatherIcon: 33,
          IconPhrase: 'Clear',
          HasPrecipitation: false,
          IsDaylight: false,
          Temperature: {
            Value: 29.4,
            Unit: 'C',
            UnitType: 17,
          },
        },
        {
          DateTime: '2022-10-28T21:00:00+05:00',
          EpochDateTime: 1666972800,
          WeatherIcon: 33,
          IconPhrase: 'Clear',
          HasPrecipitation: false,
          IsDaylight: false,
          Temperature: {
            Value: 28.2,
            Unit: 'C',
            UnitType: 17,
          },
        },
        {
          DateTime: '2022-10-28T22:00:00+05:00',
          EpochDateTime: 1666976400,
          WeatherIcon: 33,
          IconPhrase: 'Clear',
          HasPrecipitation: false,
          IsDaylight: false,
          Temperature: {
            Value: 26.8,
            Unit: 'C',
            UnitType: 17,
          },
        },
        {
          DateTime: '2022-10-28T23:00:00+05:00',
          EpochDateTime: 1666980000,
          WeatherIcon: 34,
          IconPhrase: 'Mostly clear',
          HasPrecipitation: false,
          IsDaylight: false,
          Temperature: {
            Value: 25.7,
            Unit: 'C',
            UnitType: 17,
          },
        },
        {
          DateTime: '2022-10-29T00:00:00+05:00',
          EpochDateTime: 1666983600,
          WeatherIcon: 33,
          IconPhrase: 'Clear',
          HasPrecipitation: false,
          IsDaylight: false,
          Temperature: {
            Value: 24.8,
            Unit: 'C',
            UnitType: 17,
          },
        },
      ],
      days: [
        {
          Date: '2022-10-28T07:00:00+05:00',
          EpochDate: 1666922400,
          Sun: {
            Rise: '2022-10-28T06:32:00+05:00',
            EpochRise: 1666920720,
            Set: '2022-10-28T17:49:00+05:00',
            EpochSet: 1666961340,
          },
          Moon: {
            Rise: '2022-10-28T09:25:00+05:00',
            EpochRise: 1666931100,
            Set: '2022-10-28T20:06:00+05:00',
            EpochSet: 1666969560,
            Phase: 'WaxingCrescent',
            Age: 3,
          },
          Temperature: {
            Minimum: {
              Value: 21.5,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 38.8,
              Unit: 'C',
              UnitType: 17,
            },
          },
        },
        {
          Date: '2022-10-29T07:00:00+05:00',
          EpochDate: 1667008800,
          Sun: {
            Rise: '2022-10-29T06:32:00+05:00',
            EpochRise: 1667007120,
            Set: '2022-10-29T17:48:00+05:00',
            EpochSet: 1667047680,
          },
          Moon: {
            Rise: '2022-10-29T10:32:00+05:00',
            EpochRise: 1667021520,
            Set: '2022-10-29T21:05:00+05:00',
            EpochSet: 1667059500,
            Phase: 'WaxingCrescent',
            Age: 4,
          },
          Temperature: {
            Minimum: {
              Value: 22.0,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 37.7,
              Unit: 'C',
              UnitType: 17,
            },
          },
        },
        {
          Date: '2022-10-30T07:00:00+05:00',
          EpochDate: 1667095200,
          Sun: {
            Rise: '2022-10-30T06:33:00+05:00',
            EpochRise: 1667093580,
            Set: '2022-10-30T17:47:00+05:00',
            EpochSet: 1667134020,
          },
          Moon: {
            Rise: '2022-10-30T11:37:00+05:00',
            EpochRise: 1667111820,
            Set: '2022-10-30T22:08:00+05:00',
            EpochSet: 1667149680,
            Phase: 'WaxingCrescent',
            Age: 5,
          },
          Temperature: {
            Minimum: {
              Value: 22.0,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 38.2,
              Unit: 'C',
              UnitType: 17,
            },
          },
        },
        {
          Date: '2022-10-31T07:00:00+05:00',
          EpochDate: 1667181600,
          Sun: {
            Rise: '2022-10-31T06:33:00+05:00',
            EpochRise: 1667179980,
            Set: '2022-10-31T17:47:00+05:00',
            EpochSet: 1667220420,
          },
          Moon: {
            Rise: '2022-10-31T12:35:00+05:00',
            EpochRise: 1667201700,
            Set: '2022-10-31T23:15:00+05:00',
            EpochSet: 1667240100,
            Phase: 'WaxingCrescent',
            Age: 6,
          },
          Temperature: {
            Minimum: {
              Value: 21.8,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 38.9,
              Unit: 'C',
              UnitType: 17,
            },
          },
        },
        {
          Date: '2022-11-01T07:00:00+05:00',
          EpochDate: 1667268000,
          Sun: {
            Rise: '2022-11-01T06:34:00+05:00',
            EpochRise: 1667266440,
            Set: '2022-11-01T17:46:00+05:00',
            EpochSet: 1667306760,
          },
          Moon: {
            Rise: '2022-11-01T13:27:00+05:00',
            EpochRise: 1667291220,
            Set: '2022-11-02T00:21:00+05:00',
            EpochSet: 1667330460,
            Phase: 'First',
            Age: 7,
          },
          Temperature: {
            Minimum: {
              Value: 21.9,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 38.6,
              Unit: 'C',
              UnitType: 17,
            },
          },
        },
      ],
    },
  },
  {
    mumbai: {
      hourly: [
        {
          DateTime: '2022-10-28T21:00:00+05:30',
          EpochDateTime: 1666971000,
          WeatherIcon: 34,
          IconPhrase: 'Mostly clear',
          HasPrecipitation: false,
          IsDaylight: false,
          Temperature: {
            Value: 28.3,
            Unit: 'C',
            UnitType: 17,
          },
        },
        {
          DateTime: '2022-10-28T22:00:00+05:30',
          EpochDateTime: 1666974600,
          WeatherIcon: 34,
          IconPhrase: 'Mostly clear',
          HasPrecipitation: false,
          IsDaylight: false,
          Temperature: {
            Value: 27.8,
            Unit: 'C',
            UnitType: 17,
          },
        },
        {
          DateTime: '2022-10-28T23:00:00+05:30',
          EpochDateTime: 1666978200,
          WeatherIcon: 33,
          IconPhrase: 'Clear',
          HasPrecipitation: false,
          IsDaylight: false,
          Temperature: {
            Value: 27.1,
            Unit: 'C',
            UnitType: 17,
          },
        },
        {
          DateTime: '2022-10-29T00:00:00+05:30',
          EpochDateTime: 1666981800,
          WeatherIcon: 33,
          IconPhrase: 'Clear',
          HasPrecipitation: false,
          IsDaylight: false,
          Temperature: {
            Value: 26.2,
            Unit: 'C',
            UnitType: 17,
          },
        },
        {
          DateTime: '2022-10-29T01:00:00+05:30',
          EpochDateTime: 1666985400,
          WeatherIcon: 33,
          IconPhrase: 'Clear',
          HasPrecipitation: false,
          IsDaylight: false,
          Temperature: {
            Value: 25.6,
            Unit: 'C',
            UnitType: 17,
          },
        },
      ],
      days: [
        {
          Date: '2022-10-28T07:00:00+05:30',
          EpochDate: 1666920600,
          Sun: {
            Rise: '2022-10-28T06:37:00+05:30',
            EpochRise: 1666919220,
            Set: '2022-10-28T18:07:00+05:30',
            EpochSet: 1666960620,
          },
          Moon: {
            Rise: '2022-10-28T09:22:00+05:30',
            EpochRise: 1666929120,
            Set: '2022-10-28T20:32:00+05:30',
            EpochSet: 1666969320,
            Phase: 'WaxingCrescent',
            Age: 3,
          },
          Temperature: {
            Minimum: {
              Value: 22.7,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 32.8,
              Unit: 'C',
              UnitType: 17,
            },
          },
        },
        {
          Date: '2022-10-29T07:00:00+05:30',
          EpochDate: 1667007000,
          Sun: {
            Rise: '2022-10-29T06:37:00+05:30',
            EpochRise: 1667005620,
            Set: '2022-10-29T18:07:00+05:30',
            EpochSet: 1667047020,
          },
          Moon: {
            Rise: '2022-10-29T10:27:00+05:30',
            EpochRise: 1667019420,
            Set: '2022-10-29T21:32:00+05:30',
            EpochSet: 1667059320,
            Phase: 'WaxingCrescent',
            Age: 4,
          },
          Temperature: {
            Minimum: {
              Value: 22.7,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 34.5,
              Unit: 'C',
              UnitType: 17,
            },
          },
        },
        {
          Date: '2022-10-30T07:00:00+05:30',
          EpochDate: 1667093400,
          Sun: {
            Rise: '2022-10-30T06:38:00+05:30',
            EpochRise: 1667092080,
            Set: '2022-10-30T18:06:00+05:30',
            EpochSet: 1667133360,
          },
          Moon: {
            Rise: '2022-10-30T11:32:00+05:30',
            EpochRise: 1667109720,
            Set: '2022-10-30T22:35:00+05:30',
            EpochSet: 1667149500,
            Phase: 'WaxingCrescent',
            Age: 5,
          },
          Temperature: {
            Minimum: {
              Value: 22.5,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 34.7,
              Unit: 'C',
              UnitType: 17,
            },
          },
        },
        {
          Date: '2022-10-31T07:00:00+05:30',
          EpochDate: 1667179800,
          Sun: {
            Rise: '2022-10-31T06:38:00+05:30',
            EpochRise: 1667178480,
            Set: '2022-10-31T18:06:00+05:30',
            EpochSet: 1667219760,
          },
          Moon: {
            Rise: '2022-10-31T12:31:00+05:30',
            EpochRise: 1667199660,
            Set: '2022-10-31T23:41:00+05:30',
            EpochSet: 1667239860,
            Phase: 'WaxingCrescent',
            Age: 6,
          },
          Temperature: {
            Minimum: {
              Value: 22.4,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 34.0,
              Unit: 'C',
              UnitType: 17,
            },
          },
        },
        {
          Date: '2022-11-01T07:00:00+05:30',
          EpochDate: 1667266200,
          Sun: {
            Rise: '2022-11-01T06:39:00+05:30',
            EpochRise: 1667264940,
            Set: '2022-11-01T18:05:00+05:30',
            EpochSet: 1667306100,
          },
          Moon: {
            Rise: '2022-11-01T13:25:00+05:30',
            EpochRise: 1667289300,
            Set: '2022-11-02T00:44:00+05:30',
            EpochSet: 1667330040,
            Phase: 'First',
            Age: 7,
          },
          Temperature: {
            Minimum: {
              Value: 22.5,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 33.9,
              Unit: 'C',
              UnitType: 17,
            },
          },
        },
      ],
    },
  },
]

const bangaloreData = WhetherData[0].bangalore
const chennaiData = WhetherData[1].chennai
const delhiData = WhetherData[2].delhi
const hyderabadData = WhetherData[3].hyderabad
const mumbaiData = WhetherData[4].mumbai

class WeatherInfo extends Component {
  state = {
    city: 'bangalore',
    temperatureMeasurement: 'hourly',
    daysResData: bangaloreData.days,
    hoursResData: bangaloreData.hourly,
  }

  onChangeCity = event => {
    this.setState({city: event.target.value})
  }

  onChangeTemperatureMeasurement = event => {
    this.setState({temperatureMeasurement: event.target.value})
  }

  onGetTempOfCity = event => {
    event.preventDefault()
    const {city, temperatureMeasurement} = this.state
    if (city === 'bangalore') {
      if (temperatureMeasurement === 'days') {
        this.setState({daysResData: bangaloreData.days})
      } else if (temperatureMeasurement === 'hourly') {
        this.setState({hoursResData: bangaloreData.hourly})
      }
    } else if (city === 'chennai') {
      if (temperatureMeasurement === 'days') {
        this.setState({daysResData: chennaiData.days})
      } else if (temperatureMeasurement === 'hourly') {
        this.setState({hoursResData: chennaiData.hourly})
      }
    } else if (city === 'delhi') {
      if (temperatureMeasurement === 'days') {
        this.setState({daysResData: delhiData.days})
      } else if (temperatureMeasurement === 'hourly') {
        this.setState({hoursResData: delhiData.hourly})
      }
    } else if (city === 'hyderabad') {
      if (temperatureMeasurement === 'days') {
        this.setState({daysResData: hyderabadData.days})
      } else if (temperatureMeasurement === 'hourly') {
        this.setState({hoursResData: hyderabadData.hourly})
      }
    } else if (city === 'mumbai') {
      if (temperatureMeasurement === 'days') {
        this.setState({daysResData: mumbaiData.days})
      } else if (temperatureMeasurement === 'hourly') {
        this.setState({hoursResData: mumbaiData.hourly})
      }
    }
  }

  render() {
    const {city, temperatureMeasurement, daysResData, hoursResData} = this.state
    const hoursData = hoursResData
    return (
      <>
        <div className="weather-app-container">
          <form onSubmit={this.onGetTempOfCity}>
            <p className="weather-app-heading">Select Location</p>
            <select
              name="city"
              id="city"
              className="CitySelect"
              onChange={this.onChangeCity}
            >
              <option value="bangalore" selected>
                Bangalore
              </option>
              <option value="chennai">Chennai</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
            </select>
            <br />
            <p className="weather-app-heading">Select Type Of Forecast</p>
            <select
              name="temperatureMeasurement"
              id="temperatureMeasurement"
              className="CitySelect"
              onChange={this.onChangeTemperatureMeasurement}
            >
              <option value="days" selected>
                5-day
              </option>
              <option value="hourly">Hourly</option>
            </select>
            <br />
            <input
              type="submit"
              value="Get Temperature"
              className="GetTempBtn"
            />
          </form>
        </div>
        {temperatureMeasurement === 'days' ? (
          <ResultCard
            temperatureMeasurement={temperatureMeasurement}
            daysResData={daysResData}
            city={city}
          />
        ) : (
          <ResultHourlyCard
            temperatureMeasurement={temperatureMeasurement}
            hoursData={hoursData}
            city={city}
          />
        )}
      </>
    )
  }
}
export default WeatherInfo
