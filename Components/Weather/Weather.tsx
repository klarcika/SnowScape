import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import axios from 'axios';

interface WeatherData {
  main: string;
  description: string;
  temperature: number;
  humidity: number;
  snow: number | null;
  rain: number | null;
  dateTime: Date;
}

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [city, setCity] = useState<string>('Kranjska gora');

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
        }));

        setWeatherData(weatherList);
      } else {
        console.error('Failed to load weather data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  return (
    <View>
      <Text>Vreme</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        value={city}
        onChangeText={(text) => setCity(text)}
        placeholder="Enter a city"
      />
      <Button title="Get Weather" onPress={() => fetchWeatherData(city)} />
      <FlatList
        data={weatherData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, margin: 10 }}>
            <Text>Main: {item.main}</Text>
            <Text>Date: {item.dateTime.toLocaleDateString()}</Text>
            <Text>Time: {item.dateTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Temperature: {item.temperature.toFixed(2)}°C</Text>
            <Text>Humidity: {item.humidity}%</Text>
            <Text>Snow: {item.snow !== null ? `${item.snow} mm` : 'N/A'}</Text>
            <Text>Rain: {item.rain !== null ? `${item.rain} mm` : 'N/A'}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Weather;
