import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import Octicons from "react-native-vector-icons/Octicons";

const SecondSwiperCard = (props) => {
  return (
    <View style={styles.swiper}>
      <View style={styles.offerContainer}>
        <Octicons name="gift" size={26} style={styles.giftIcon} />
        <Text style={styles.offerText}>Offers</Text>
      </View>
      <Swiper
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
    </View>
  );
};

const styles = StyleSheet.create({
  offerContainer: {
    marginHorizontal: 20,
    marginTop: 8,
    flexDirection: "row",
  },
  offerText: { fontFamily: "Montserrat-Regular", fontSize: 17, color: "#000" },
  giftIcon: { color: "#ff0015", marginRight: 10 },

  swiper: { height: 265, backgroundColor: "#fcfcfd" },
  slide: {
    marginVertical: 8,
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
    backgroundColor: "transparent",
  },
  activeDot: {
    backgroundColor: "transparent",
  },
});

export default SecondSwiperCard;
