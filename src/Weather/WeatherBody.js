import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const formatTimeToEuropean = (dateTime) => {
  const options = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Europe/Ljubljana',
  };
  return dateTime.toLocaleString('en-GB', options);
};

const getOpenWeatherMapIconUrl = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

const renderWeatherIcon = (iconCode) => (
  <Image source={{ uri: getOpenWeatherMapIconUrl(renderIcon(iconCode)) }} style={styles.icon} />
);

const renderIcon = (weatherCond) => {
  const weatherMapping = {
    "clear": "01d",
    "few clouds": "02d",
    "scattered clouds": "03d",
    "broken clouds": "04d",
    "clouds": "04d",
    "shower rain": "10d",
    "rain": "09d",
    "thunderstorm": "11d",
    "snow": "13d",
    "mist": "50d",
  };

  const weatherConditionLower = weatherCond.toLowerCase();
  return weatherMapping[weatherConditionLower];
};

const WeatherBody = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity onPress={toggleExpansion} style={styles.container}>
      <View style={styles.header}>
        {renderWeatherIcon(item.main)}
        <Text style={styles.main}>{item.main}</Text>
        <Text style={styles.time}>{formatTimeToEuropean(item.dateTime)}</Text>
      </View>

      {expanded && (
        <>
          <View style={styles.separator} />
          <Text style={styles.description}> {item.description}</Text>
          <Text style={styles.temperature}>Temperature: {item.temperature.toFixed(2)}°C</Text>
          <Text style={styles.humidity}>Humidity: {item.humidity}%</Text>
          <Text style={styles.humidity}>Wind Speed: {item.windSpeed} m/s</Text>
          <Text style={styles.humidity}>Wind Direction: {item.windDirection}°</Text>
          {item.snow !== null && <Text style={styles.snow}>Snow: {`${item.snow} mm`}</Text>}
          {item.rain !== null && <Text style={styles.rain}>Rain: {`${item.rain} mm`}</Text>}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
  main: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  time: {
    marginLeft: 'auto',
    fontSize: 16,
  },
  separator: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',

  },
  temperature: {
    fontSize: 16,
  },
  humidity: {
    fontSize: 16,
  },
  snow: {
    fontSize: 16,
  },
  rain: {
    fontSize: 16,
  },
});

export default WeatherBody;
