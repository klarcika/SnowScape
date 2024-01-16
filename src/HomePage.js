// HomePage.js
import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const skiResorts  =  [{
  name: 'Vogel',
  height: '1925 m',
  length: '22 km',
  difficulty: 'Intermediate',
  location: 'Bohinj, Slovenia',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Vogel6.jpg', // Replace with actual image URL
},
{
  name: 'Mariborsko Pohorje',
  height: '325-1327 m',
  length: '41.5 km',
  difficulty: 'Beginner to Advanced',
  location: 'Maribor, Slovenia',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Pohorje_zima1.jpg',
},
{
  name: 'Kranjska Gora',
  height: '810-1295 m',
  length: '20 km',
  difficulty: 'Intermediate to Advanced',
  location: 'Kranjska Gora, Slovenia',
  imageUrl: 'https://th.bing.com/th/id/R.cc6ffdd87a1907ac1a41438d7c529845?rik=HLWoJZBpjft60w&riu=http%3a%2f%2fwww.sloveniaholidays.com%2fimg%2fgallery%2f42140415.jpg&ehk=AM4pVxM4rXqiai11OUOIZ4KMdU2zlrLT2nUlRZzAdrM%3d&risl=&pid=ImgRaw&r=0',
},
{
  name: 'Kope',
  height: '1010-1542 m',
  length: '8 km',
  difficulty: 'Intermediate to Advanced',
  location: 'Mislinija, Slovenia',
  imageUrl: 'https://th.bing.com/th/id/R.8fc929971e03ed2f1812cc03609e1bd4?rik=0%2fPW1gN%2fPRRbeg&pid=ImgRaw&r=0',
},{
  name: 'Golte',
  height: '1407-1573 m',
  length: '12.8 km',
  difficulty: 'Intermediate',
  location: 'Rečica ob Savinji, Slovenia',
  imageUrl: 'https://th.bing.com/th/id/R.8fcadc2c0255b52c6f80ebcec7e58f73?rik=vjNmvLuenkA7Gg&riu=http%3a%2f%2fi.imgur.com%2fLe7JkMb.jpg&ehk=FAWYBDy9MnO2s8HnYK6vYJLLxzW5HlzKNKane4NvE4k%3d&risl=&pid=ImgRaw&r=0',
},{
  name: 'Rogla',
  height: '1010-1542 m',
  length: '8 km',
  difficulty: 'Intermediate',
  location: 'Rogla, Slovenia',
  imageUrl: 'https://th.bing.com/th/id/R.9711bf758254f067453f335c756439b8?rik=4Bqd0AH44YV5Qw&pid=ImgRaw&r=0',
}];

const HomePage = () => (
  <ScrollView
    contentContainerStyle={styles.scrollViewContent}
    showsVerticalScrollIndicator={false}
  >
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Smučišča</Text>
    </View>
    {skiResorts.map((resort, index) => (
      <View key={index} style={styles.resortContainer}>
        <Image source={{ uri: resort.imageUrl }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.resortName}>{resort.name}</Text>
          <Text>{`Height: ${resort.height}`}</Text>
          <Text>{`Length: ${resort.length}`}</Text>
          <Text>{`Difficulty: ${resort.difficulty}`}</Text>
          <Text>{`Location: ${resort.location}`}</Text>
          {resort.coordinates && (
            <TouchableHighlight
              onPress={() => {
                const coordinates = resort.coordinates.split(',');
                const latitude = coordinates[0];
                const longitude = coordinates[1];
                const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
                Linking.openURL(url);
              }}
            >
              <Text style={styles.googleMapsLink}>Open in Google Maps</Text>
            </TouchableHighlight>
          )}
        </View>
      </View>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollViewContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    backgroundColor: '#3498db',
    padding: 15,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  resortContainer: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: 'center',
  },
  resortName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  googleMapsLink: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
});
export default HomePage;