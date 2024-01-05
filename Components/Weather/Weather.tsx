import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios';
import WeatherBody from './WeatherBody';
import LineChart from './LineChart';
import DailyDescription from './DailyDescription';


interface WeatherData {
  main: string;
  description: string;
  temperature: number;
  humidity: number;
  snow: number | null;
  rain: number | null;
  dateTime: Date;
  icon: any;
  windSpeed: number;
  windDirection: number;
  
}



const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [city, setCity] = useState<string>('Kranjska gora');
  const [groupedWeatherData, setGroupedWeatherData] = useState<WeatherData[][]>([]);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const fetchWeatherData = async (city: string): Promise<void> => {
    try {
      const apiKey = '922fbb456e56fa3fe8636718d1a67715';
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);

      if (response.status === 200) {
        const data = response.data.list;
        const weatherList = data.map((weather: any) => ({
          main: weather.weather[0].main,
          description: weather.weather[0].description,
          temperature: weather.main.temp - 273.15,
          humidity: weather.main.humidity,
          snow: weather.snow ? weather.snow['3h'] : null,
          rain: weather.rain ? weather.rain['3h'] : null,
          dateTime: new Date(weather.dt * 1000),
          windSpeed: weather.wind.speed,
          windDirection: weather.wind.deg,
          
        }));

        setWeatherData(weatherList);
        groupWeatherDataByDay(weatherList);
      } else {
        console.error('Failed to load weather data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const groupWeatherDataByDay = (data: WeatherData[]): void => {
    const groupedData: WeatherData[][] = [];
    const days: Set<string> = new Set();

    data.forEach((item) => {
      const dayKey = item.dateTime.toDateString();
      days.add(dayKey);
    });

    days.forEach((day) => {
      const dayData = data.filter((item) => item.dateTime.toDateString() === day);
      groupedData.push(dayData);
    });

    setGroupedWeatherData(groupedData);
    setSelectedDay(0);
  };

  const renderDayButton = (dayIndex: number) => {
    const dayData = groupedWeatherData[dayIndex];
    const day = dayData[0].dateTime;
    const dayName = day.toLocaleDateString(undefined, { weekday: 'long' });
  
    // Find temperature for 7:00 AM and 1:00 PM
    const temperature7AM = dayData.find(item => item.dateTime.getHours() === 7)?.temperature;
    const temperature1PM = dayData.find(item => item.dateTime.getHours() === 13)?.temperature;
  
    return (
      <View key={dayIndex} style={{ margin: 5, padding: 5 }}>
        <Button
          title={`${dayName}, ${day.toLocaleDateString()} `}
          onPress={() => setSelectedDay(dayIndex)}
        />
      </View>
    );
  };
  
  

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

 

  return (
    <View>
      <Text>vreme</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        value={city}
        onChangeText={(text) => setCity(text)}
        placeholder="Enter a city"
      />
      <Button title="Get Weather" onPress={() => fetchWeatherData(city)} />
      {selectedDay !== null && (
        <View style={{ padding: 10, margin: 10 }}>
           <DailyDescription
            dayName={groupedWeatherData[selectedDay][0].dateTime.toLocaleDateString(undefined, { weekday: 'long' })}
            date={groupedWeatherData[selectedDay][0].dateTime.toLocaleDateString()}
            minTemperature={Math.min(...groupedWeatherData[selectedDay].map(item => item.temperature))}
            maxTemperature={Math.max(...groupedWeatherData[selectedDay].map(item => item.temperature))}
          />
          {groupedWeatherData[selectedDay].map((item, index) => (
            <View key={index}>
             
              <WeatherBody item={item} />
            </View>
          ))}
        </View>
      )}

{groupedWeatherData.map((_, index) => renderDayButton(index))}
    </View>
  );
};

export default Weather;
