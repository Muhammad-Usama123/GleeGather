import React, { useRef, useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions, Animated, TouchableOpacity, Text } from 'react-native';

const cardWidth = Dimensions.get('window').width * 0.8;
const cardSpacing = 10;

// Your dynamic data source
const dynamicData = [
  { id: '1', content: 'Card 1' },
  { id: '2', content: 'Card 2' },
  { id: '3', content: 'Card 3' },
  { id: '4', content: 'Card 4' },
  { id: '5', content: 'Card 5' },
  { id: '6', content: 'Card 6' },
  { id: '7', content: 'Card 7' },
  { id: '8', content: 'Card 8' },
  // Add more data as needed
];

const SwipeableElevatedCardsMainAdvertising: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatlistRef = useRef<FlatList<{ id: string; content: string }> | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const scrollNextCard = (forward = true) => {
    const nextIndex = forward ? 1 : -1;
    const newIndex = (currentIndex + nextIndex + dynamicData.length) % dynamicData.length;
    setCurrentIndex(newIndex);
    flatlistRef.current?.scrollToIndex({ animated: true, index: newIndex });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollNextCard(true);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatlistRef}
        horizontal
        data={dynamicData}
        keyExtractor={(item) => item.id}
        snapToInterval={cardWidth + cardSpacing}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.floor(event.nativeEvent.contentOffset.x / (cardWidth + cardSpacing));
          setCurrentIndex(newIndex);
        }}
        renderItem={({ item, index }) => {
          const rotateY = scrollX.interpolate({
            inputRange: [(index - 1) * (cardWidth + cardSpacing), index * (cardWidth + cardSpacing), (index + 1) * (cardWidth + cardSpacing)],
            outputRange: ['-20deg', '0deg', '20deg'],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              style={[
                styles.card,
                {
                  transform: [{ perspective: 1000 }, { rotateY }],
                },
              ]}
            >
              {/* Replace this with your card content */}
              <Text>{item.content}</Text>
            </Animated.View>
          );
        }}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => scrollNextCard(false)}>
          {/* Replace this with your left button or icon */}
          {/* <Text>Left</Text> */}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => scrollNextCard(true)}>
          {/* Replace this with your right button or icon */}
          {/* <Text>Right</Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 40,
    marginTop: 40
  },
  card: {
    width: cardWidth,
    height: 200, // Set your card height
    marginHorizontal: cardSpacing / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray', // Set your card background color
    borderRadius: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default SwipeableElevatedCardsMainAdvertising;
