import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import { system, Config } from "../utils";
import PropTypes from "prop-types";

export default class ClassifyBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected
    };
  }

  static propTypes = {
    selected: PropTypes.number
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.selected != nextState.selected;
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    data: Config.Classyfy
  };

  _onChange = item => {
    if (item.id === this.state.selected) {
      return;
    }
    this.setState({
      selected: item.id
    });
    this.props.onChange && this.props.onChange(item);
  };

  _renderItem = data => {
    let item = data.item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => this._onChange(item)}
        style={[
          styles.item,
          this.state.selected === item.id ? styles.selectedItem : null
        ]}
      >
        <Image source={{ uri: item.icon }} style={styles.image} />
        <Text style={this.state.selected === item.id ? styles.selected : null}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.body}
          horizontal={true}
          data={this.props.data}
          renderItem={this._renderItem}
          keyExtractor={item => item.id}
          extraData={this.state}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeff1",
    backgroundColor: "#fff"
  },
  selected: {
    color: "#FF0000"
  },
  selectedItem: {
    borderBottomWidth: 2,
    borderBottomColor: "#FF0000"
  },
  body: {
    flex: 1
  },
  image: {
    width: 35,
    height: 35
  },
  item: {
    width: 70,
    justifyContent: "space-around",
    alignItems: "center"
  }
});
