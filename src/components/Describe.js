import React, { PureComponent } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { system } from "../utils";
import AutoImage from "react-native-scalable-image";

export default class Describe extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  onClick = () => {
    var visible = this.state.visible;
    this.setState({
      visible: !visible
    });
  };

  render() {
    return (
      <View>
        <Text
          onPress={this.onClick}
          style={{
            height: 40,
            backgroundColor: "#fff",
            textAlign: "center",
            textAlignVertical: "center",
            color: "#ff6a00"
          }}
        >
          查看图文详情>
        </Text>
        {this.state.visible &&
          this.props.source &&
          this.props.source.map((item, index) => {
            return (
              <AutoImage
                key={index}
                width={system.width}
                style={{
                  margin: 0,
                  padding: 0,
                  resizeMode: "stretch"
                }}
                source={{ uri: item }}
              />
            );
          })}
      </View>
    );
  }
}
