
import React, { useState } from "react";
import { Button, View } from "react-native";

export default function Aboutscreen() {
  const [bgColor, setBgColor] = useState(randomHex());

  let styles = {
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  };

  function randomHex() {
    console.log("Func Called");
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Button title="Click Me" onPress={() => setBgColor(randomHex())} />
      
    </View>
  );
}