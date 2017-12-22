import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import { system, Config } from "../utils";

export default class SortBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.selected != nextState.selected;
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    data: Config.Sort
  };

  _onChange = item => {
    if (item.id === this.state.selected) {
      return;
    }
    this.setState({
      selected: item.id
    });
    this.props.onChange && this.props.onChange(item.id);
  };

  render() {
    return (
      <View style={styles.container}>
        {Config.Sort.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={1}
              onPress={() => this._onChange(item)}
              style={styles.item}
            >
              <Text
                style={this.state.selected === item.id ? styles.selected : null}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeff1",
    backgroundColor: "#fff",
    flexDirection: "row"
  },
  selected: {
    color: "#FF0000"
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
