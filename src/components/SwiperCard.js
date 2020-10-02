import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

const HeaderSwiperCard = (props) => {
  return (
    <Swiper
      autoplay={true}
      style={styles.swiper}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
    >
      <View style={styles.slide}>
        <Image
          source={require("../../assets/HomeSwiper/1.png")}
          style={styles.imageSlide}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../../assets/HomeSwiper/2.jpg")}
          style={styles.imageSlide}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../../assets/HomeSwiper/3.jpg")}
          style={styles.imageSlide}
        />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  swiper: { height: 255, elevation: 5 },
  slide: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },

  imageSlide: {
    resizeMode: "stretch",
    height: 200,
    width: "95%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: "hidden",
  },
  dot: {
    backgroundColor: "#FF0015",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  activeDot: {
    backgroundColor: "#FF0015",
    width: 15,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 3,
  },
});

export default HeaderSwiperCard;
