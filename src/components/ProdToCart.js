import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { Picker } from "@react-native-community/picker";
import AntDesign from "react-native-vector-icons/AntDesign";

const { width, height } = Dimensions.get("window");

const ProdToCart = (props) => {
  const [carType, setCarType] = useState("HATCHBACK");
  const [carNo, setCarNo] = useState("");

  const renderElement = () => {
    const TextStyle = (props) => {
      return (
        <Text
          style={{
            color: "#222",
            fontFamily: "Montserrat-SemiBold",
            fontSize: 20,
          }}
        >
          ₹ {props.price}
        </Text>
      );
    };

    if (carType == "HATCHBACK") {
      return <TextStyle price={props.HATCHBACK} />;
    } else if (carType === "SEDAN") {
      return <TextStyle price={props.SEDAN} />;
    } else if (carType === "SUV") {
      return <TextStyle price={props.SUV} />;
    } else {
      return <TextStyle price={props.SUV} />;
    }
  };

  return (
    <KeyboardAvoidingView>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            backgroundColor: "white",
            height: height * 0.78,
          }}
        >
          <TouchableOpacity activeOpacity={0.9}>
            <Image
              source={{ uri: props.imageUrl }}
              style={{ width: width, height: height / 2.5 }}
            />
          </TouchableOpacity>
          <View style={{ marginHorizontal: 15, marginVertical: 5 }}>
            {renderElement()}
          </View>

          <View style={{ marginHorizontal: 15, marginVertical: 5 }}>
            <Text
              style={{
                color: "#000",
                fontFamily: "Montserrat-Regular",
                fontSize: 13,
              }}
            >
              {props.longDiscription}
            </Text>
          </View>

          <View>
            <Picker
              mode="dropdown"
              selectedValue={carType}
              style={{ marginHorizontal: 10 }}
              onValueChange={(itemValue, itemIndex) => setCarType(itemValue)}
            >
              <Picker.Item color="#222" label="Hatchback" value="HATCHBACK" />
              <Picker.Item color="#222" label="Sedan" value="SEDAN" />
              <Picker.Item color="#222" label="SUV" value="SUV" />
            </Picker>
          </View>

          {/* ///////////////////////////////////////////////////////////////////////////// */}

          <View>
            <View style={[styles.section]}>
              <AntDesign name="car" size={25} color="#ff0015" />

              <TextInput
                value={carNo}
                autoCapitalize="characters"
                onChangeText={(text) => {
                  setCarNo(text);
                }}
                placeholder="Vehicle Number"
                style={[styles.textInput]}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableNativeFeedback>
            <View
              style={{
                width: width / 2,
                height: 60,
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "#ff0015",
                elevation: 2,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  marginTop: 14,
                  color: "#ff0015",
                  fontFamily: "Montserrat-SemiBold",
                }}
              >
                Add to Cart
              </Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback>
            <View
              style={{
                width: width / 2,
                height: 60,
                backgroundColor: "#ff0015",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  alignSelf: "center",
                  marginTop: 14,
                  color: "#fff",
                  fontFamily: "Montserrat-SemiBold",
                }}
              >
                Order
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    paddingLeft: 20,
  },
});

export default ProdToCart;
