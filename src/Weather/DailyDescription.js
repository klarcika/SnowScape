import React from 'react';
import { View, Text } from 'react-native';

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const DailyDescription = ({
  dayName,
  date,
  minTemperature,
  maxTemperature,
}) => {
  const capitalizedDayName = capitalizeFirstLetter(dayName);

  return (
    <View style={{ margin: 10, padding: 10 }}>
      <Text style={{ fontWeight: 'bold' }}>{capitalizedDayName}, {date}</Text>
      <Text>Min: {minTemperature.toFixed(2)} °C</Text>
      <Text>Max: {maxTemperature.toFixed(2)} °C</Text>
    </View>
  );
};

export default DailyDescription;
