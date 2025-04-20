import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const trips = [
  {
    id: 1,
    title: "Bali'de Yaz",
    location: 'Bali, Endonezya',
    date: '2023-07-15',
    comments: 2,
    tag: 'Beach',
  },
  {
    id: 2,
    title: "New York'ta Hafta Sonu",
    location: 'New York City, ABD',
    date: '2023-09-22',
    comments: 1,
    tag: 'City',
  },
  {
    id: 3,
    title: "İsviçre Alpleri'nde Yürüyüş",
    location: 'Interlaken, İsviçre',
    date: '2023-06-10',
    comments: 0,
    tag: 'Mountain',
  }
]

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Seyahat <Text style={styles.titleHighlight}>Günlüğüm</Text></Text>
      <Text style={styles.subtitle}>Dünya çapındaki maceralarınızı takip edin ve paylaşın</Text>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Yeni Seyahat Ekle</Text>
      </TouchableOpacity>

      <View style={styles.cardContainer}>
        {trips.map((trip) => (
          <View key={trip.id} style={styles.card}>
            <View style={styles.imagePlaceholder}>
              <Text style={styles.tag}>{trip.tag}</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{trip.title}</Text>
              <Text style={styles.cardLocation}>{trip.location}</Text>
              <Text style={styles.cardDate}>📅 {trip.date}</Text>
              <Text style={styles.cardComment}>💬 {trip.comments} yorum</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#7B2CBF',
  },
  titleHighlight: {
    color: '#D6336C'
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16
  },
  addButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#0FD4C3',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginBottom: 20
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  cardContainer: {
    flexDirection: 'column',
    gap: 20
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3
  },
  imagePlaceholder: {
    height: 160,
    backgroundColor: '#ccc',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10
  },
  tag: {
    backgroundColor: '#FF6B6B',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 12
  },
  cardContent: {
    padding: 12
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#38B2AC'
  },
  cardLocation: {
    color: '#555',
    marginVertical: 4
  },
  cardDate: {
    color: '#666',
    fontSize: 12
  },
  cardComment: {
    color: '#666',
    fontSize: 12,
    marginTop: 4
  }
})

export default Home
