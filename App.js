import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import { useRef, useState } from 'react';
import { Button, FlatList, SafeAreaView, Text, View } from 'react-native';
import Card from './components/Card';
import { PromotionData } from './data/promotion';
import styles from './styles';

export default function App() {
  const [promotion] = useState(PromotionData);
  const animation = useRef(null);

  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = (item) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSelectedItem(item);
    }, 2000);
  };

  return (
    <SafeAreaView
      style={{
        container: {
          flex: 1,
          backgroundColor: '#fff',
        },
      }}
    >
      <Text
        style={{
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 10,
          fontWeight: '600',
          fontSize: '24px',
        }}
      >
        Courses
      </Text>
      <FlatList
        contentContainerStyle={{ paddingLeft: 5, paddingRight: 20 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={promotion}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => (
          <Card
            style={[styles.promotionItem, { marginLeft: 15 }]}
            image={item.image}
            onPress={() => handleClick(item)}
          >
            <Text
              style={{
                color: '#fff',
              }}
            >
              {item.title1}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontWeight: '500',
                fontSize: '20px',
              }}
            >
              {item.title2}
            </Text>
            <View style={styles.contentCartPromotion}>
              <Button
                title="Enroll"
                style={styles.btnPromotion}
                onPress={() => handleClick(item)}
              />
            </View>
          </Card>
        )}
      />
      <View style={{ marginTop: 20 }}>
        {loading && (
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: '100%',
              height: 'auto',
            }}
            source={require('./assets/loading.json')}
          />
        )}
        {selectedItem && !loading && (
          <View style={{ paddingHorizontal: 20 }}>
            <Text
              style={{
                paddingTop: 20,
                paddingBottom: 10,
                fontWeight: '600',
                fontSize: '24px',
              }}
            >
              Course Details
            </Text>
            <Text
              style={{
                fontSize: '16px',
                marginBottom: 5,
              }}
            >
              <Text style={{ fontWeight: '500' }}>Name: </Text>
              {selectedItem.title2}
            </Text>
            <Text
              style={{
                fontSize: '16px',
                marginBottom: 5,
              }}
            >
              <Text style={{ fontWeight: '500' }}>Category: </Text>
              {selectedItem.title1}
            </Text>
            <Text
              style={{
                fontSize: '16px',
              }}
            >
              <Text style={{ fontWeight: '500' }}>Description: </Text>Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              minima quia maxime obcaecati provident. Earum ab culpa explicabo
              doloribus repellendus veniam tempore voluptatum, commodi, suscipit
              quae sunt, quidem optio? Repudiandae!
            </Text>
          </View>
        )}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
