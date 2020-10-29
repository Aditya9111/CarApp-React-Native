import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

const Highlights = (props) => {
  return (
    <View style={styles.highlights}>
      <View style={styles.highlightsContainer}>
        <Text style={styles.highlightText}>Why choose us</Text>
      </View>

      {/* ///////////////////////////////////////////////////////////////////// */}

      <View style={styles.rowContainer}>
        <View style={styles.circle}>
          <View style={styles.iconContainer}>
            <Ionicons name="ios-water" size={52} style={styles.icon} />
          </View>
        </View>
        <View style={styles.headTextContainer}>
          <Text style={styles.headText}>Waterless</Text>
          <View style={{ width: 250 }}>
            <Text style={{ color: "grey", fontFamily: "Montserrat-Regular" }}>
              Waterless and thorough cleaning.
            </Text>
          </View>
        </View>
      </View>

      {/* //////////////////////////////////////////////////////////////////////// */}
      <View style={styles.rowContainer}>
        <View style={styles.circle}>
          <View style={styles.iconContainer}>
            <FontAwesome name="thumbs-o-up" size={52} style={styles.icon} />
          </View>
        </View>
        <View style={styles.headTextContainer}>
          <Text style={styles.headText}>Car Experts</Text>
          <View style={{ width: 250 }}>
            <Text style={{ color: "grey", fontFamily: "Montserrat-Regular" }}>
              Expert cleaning and Eco friendly products.
            </Text>
          </View>
        </View>
      </View>
      {/* ////////////////////////////////////////////////////////////////////////////////// */}
      <View style={styles.rowContainer}>
        <View style={styles.circle}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="high-quality" size={52} style={styles.icon} />
          </View>
        </View>
        <View style={styles.headTextContainer}>
          <Text style={styles.headText}>Quality Work</Text>
          <View style={{ width: 250 }}>
            <Text style={{ color: "grey", fontFamily: "Montserrat-Regular" }}>
              Excellent quality of service delivered.
            </Text>
          </View>
        </View>
      </View>
      {/* ////////////////////////////////////////////////////////////////////////////////// */}
      <View style={styles.rowContainer}>
        <View style={styles.circle}>
          <View style={styles.iconContainer}>
            <AntDesign name="customerservice" size={52} style={styles.icon} />
          </View>
        </View>
        <View style={styles.headTextContainer}>
          <Text style={styles.headText}>Availaible</Text>
          <View style={{ width: 250 }}>
            <Text style={{ color: "grey", fontFamily: "Montserrat-Regular" }}>
              Always at your service.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: { flexDirection: "row", marginBottom: 20 },
  highlights: { backgroundColor: "white", height: 470 },
  highlightsContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  highlightText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 17,
    color: "#000",
  },
  headText: {
    marginBottom: 8,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    color: "#000",
  },
  headTextContainer: {
    marginTop: 12,
    marginLeft: 30,
  },
  circle: {
    marginHorizontal: 20,
    width: 80,
    height: 80,
    borderRadius: 1000,
    backgroundColor: "rgba(255, 0, 21, 0.13)",
  },
  icon: {
    color: "#000",
  },
  iconContainer: {
    margin: 15,
  },
});

export default Highlights;
