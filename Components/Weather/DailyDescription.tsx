import React from 'react';
import { View, Text } from 'react-native';

interface DailyDescriptionProps {
  dayName: string;
  date: string;
  minTemperature: number;
  maxTemperature: number;
}

const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const DailyDescription: React.FC<DailyDescriptionProps> = ({
  dayName,
  date,
  minTemperature,
  maxTemperature,
}) => {
  const capitalizedDayName = capitalizeFirstLetter(dayName);

  return (
    <View style={{ margin: 10, padding: 10}}>
      <Text style={{ fontWeight: 'bold' }}>{capitalizedDayName}, {date}</Text>
      <Text>Min: {minTemperature.toFixed(2)} °C</Text>
      <Text>Max: {maxTemperature.toFixed(2)} °C</Text>
      
    </View>
  );
};

export default DailyDescription;
