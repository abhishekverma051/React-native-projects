import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image , ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function App() {
  const initialData = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1598935898639-81586f7d2129?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1581519888293-8d0e2d0304ca?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1621315892013-f32af7358947?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1687423394885-01504949c37c?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 5,
       
      imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2694&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 6,
       
      imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 7,
       
      imageUrl: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 8,
       
      imageUrl: 'https://images.unsplash.com/photo-1618726413100-a842cc62e332?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 9,
       
      imageUrl: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 10,
       
      imageUrl: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 11,
       
      imageUrl: 'https://images.unsplash.com/photo-1627464104044-a285b99d7cd6?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 12,
       
      imageUrl: 'https://images.unsplash.com/photo-1553547274-0df401ae03c9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 13,
       
      imageUrl: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 14,
       
      imageUrl: 'https://images.unsplash.com/photo-1572782252655-9c8771392601?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 15,
       
      imageUrl: 'https://images.unsplash.com/photo-1698574996391-73f103113f60?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 16,
       
      imageUrl: 'https://images.unsplash.com/photo-1583134993393-07aa230888f9?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ];

  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState('');

  const dataLeft = data.slice(0, Math.ceil(data.length / 2));
  const dataRight = data.slice(Math.ceil(data.length / 2));

  const renderItem = ({ item }) => (
    <View style={styles.placeCard}>
      <Image source={{ uri: item.imageUrl }} style={styles.placeImage} />
    </View>
  );

  return (
    <View style={styles.mainContainer}>
    <Searchbar
        style={styles.searchContainer}
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <ScrollView>
      <View style={styles.listContainer}>
      
      
        <FlatList
          data={dataLeft}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.flatlistContainer}
        />
         
        <FlatList
          data={dataRight}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.flatlistContainer}
        />
        
        <View style={styles.lastContainer}>
        <FlatList
          data={dataRight}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.flatlistContainer}
        />
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 5,
  },
  listContainer: {
    flexDirection: 'row', 
    flex: 1,  
  },
  flatlistContainer: {
    paddingTop: 5,
    paddingHorizontal: 0,
  },
  placeCard: {
    marginRight: 0,
    backgroundColor: '',
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  searchContainer: {
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  placeImage: {
    width: '100%',
    height: '100%',
     
  },
  lastContainer:{
    flexDirection:'column'
  }
});
