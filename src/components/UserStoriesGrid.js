import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Image,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const UserStoriesGrid = (props) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={styles.highlightsContainer}>
        <Text style={styles.highlightText}>What our users say</Text>
      </View>
      <ScrollView
        horizontal
        style={{ height: 150 }}
        showsHorizontalScrollIndicator={false}
      >
        {/* ///////////////////////////// First User //////////////////////////////// */}
        <View style={styles.gridItem}>
          <View style={styles.container}>
            <Text style={styles.title} numberOfLines={2}>
              Shubham
            </Text>
            <View style={{ flexDirection: "row", marginVertical: 5 }}>
              <FontAwesome name="star" size={15} color="#ff0015" />
              <FontAwesome name="star" size={15} color="#ff0015" />
              <FontAwesome name="star" size={15} color="#ff0015" />
              <FontAwesome name="star" size={15} color="#ff0015" />
            </View>
            <Text style={styles.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </View>
        </View>

        {/* ///////////////////////////// Second User //////////////////////////////// */}

        <View style={styles.gridItem}>
          <View style={styles.container}>
            <Text style={styles.title} numberOfLines={2}>
              Ankit
            </Text>
            <View style={{ flexDirection: "row", marginVertical: 5 }}>
              <FontAwesome name="star" size={15} color="#ff0015" />
              <FontAwesome name="star" size={15} color="#ff0015" />
              <FontAwesome name="star" size={15} color="#ff0015" />
              <FontAwesome name="star" size={15} color="#ff0015" />
              <FontAwesome name="star-half" size={15} color="#ff0015" />
            </View>
            <Text style={styles.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </View>
        </View>

        {/* ///////////////////////////// Third User //////////////////////////////// */}

        <View style={styles.gridItem}>
          <View style={styles.container}>
            <Text style={styles.title} numberOfLines={2}>
              Rajeev
            </Text>
            <View style={{ flexDirection: "row", marginVertical: 5 }}>
              <FontAwesome name="star" size={15} color="#ff0015" />
              <FontAwesome name="star" size={15} color="#ff0015" />
              <FontAwesome name="star" size={15} color="#ff0015" />
            </View>
            <Text style={styles.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </View>
        </View>
        {/* ///////////////////////////// Fifth User //////////////////////////////// */}

        <View style={styles.gridItem}>
          <View style={styles.container}>
            <Text style={styles.title} numberOfLines={2}>
              Shivam
            </Text>
            <View style={{ flexDirection: "row", marginVertical: 5 }}>
              <FontAwesome name="star" size={15} color="#ff0015" />
              <FontAwesome name="star" size={15} color="#ff0015" />
              <FontAwesome name="star" size={15} color="#ff0015" />
              <FontAwesome name="star-half" size={15} color="#ff0015" />
            </View>
            <Text style={styles.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </View>
        </View>
        {/* ///////////////////////////// Sixth User //////////////////////////////// */}

        <View style={styles.gridItem}>
          <View style={styles.container}>
            <Text style={styles.title} numberOfLines={2}>
              Satyam
            </Text>
            <View style={{ flexDirection: "row", marginVertical: 5 }}>
              <FontAwesome name="star" size={15} color="#ff0015" />
              <FontAwesome name="star" size={15} color="#ff0015" />
              <FontAwesome name="star" size={15} color="#ff0015" />
              <FontAwesome name="star-half" size={15} color="#ff0015" />
            </View>
            <Text style={styles.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 2,
    backgroundColor: "white",
    height: 130,
    width: 190,
  },
  container: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    marginHorizontal: 10,
    justifyContent: "flex-start",
  },
  title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 17,
    color: "#000",
  },
  para: { color: "grey", fontFamily: "Montserrat-Regular" },

  highlightsContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 2,
  },
  highlightText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 17,
    color: "#000",
  },
});

export default UserStoriesGrid;
