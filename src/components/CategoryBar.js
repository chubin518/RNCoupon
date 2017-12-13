import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import { system } from "../utils";

export default class CategoryBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectCat: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.selectCat != nextState.selectCat;
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired
  };
  static defaultProps = {
    data: [{
      "ID": 0,
      "Name": "精选",
      "Icon": null
      },
      {
      "ID": 1,
      "Name": "女装",
      "Icon": null
      },
      {
      "ID": 2,
      "Name": "男装",
      "Icon": null
      },
      {
      "ID": 3,
      "Name": "内衣",
      "Icon": null
      },
      {
      "ID": 4,
      "Name": "数码家电",
      "Icon": null
      },
      {
      "ID": 5,
      "Name": "美食",
      "Icon": null
      },
      {
      "ID": 6,
      "Name": "美妆个护",
      "Icon": null
      },
      {
      "ID": 7,
      "Name": "母婴",
      "Icon": null
      },
      {
      "ID": 8,
      "Name": "鞋包配饰",
      "Icon": null
      },
      {
      "ID": 9,
      "Name": "家居家装",
      "Icon": null
      },
      {
      "ID": 10,
      "Name": "文体车品",
      "Icon": null
      },
      {
      "ID": 11,
      "Name": "其他",
      "Icon": null
      }
    ]
  };

  _onChange = item => {
    if (item.ID === this.state.selectCat) {
      return;
    }
    this.setState({
      selectCat: item.ID
    });
    this.props.onChange && this.props.onChange(item.ID);
  };

  _renderItem = data => {
    let item = data.item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => this._onChange(item)}
        style={[
          styles.item,
          this.state.selectCat === item.ID ? styles.selected : null,
          this.props.data && this.props.data.length >= 5
            ? null
            : { width: system.width / 4 - 5 }
        ]}
      >
        <Text>{item.Name}</Text>
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
          keyExtractor={item => item.ID}
          extraData={this.state}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeff1",
    backgroundColor: "#fff"
  },
  selected: {
    borderBottomWidth: 2,
    borderBottomColor: "#FF0000"
  },
  body: {
    flex: 1
  },
  item: {
    width: 70,
    justifyContent: "center",
    alignItems: "center"
  }
});
