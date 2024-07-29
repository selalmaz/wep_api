import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface UserCardProps {
  username: string;
  name: string;
  email: string;
}

const UserCard: React.FC<UserCardProps> = ({ username, name, email }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  username: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
    color: '#666',
  },
  email: {
    fontSize: 16,
    color: '#888',
  },
});

export default UserCard;
