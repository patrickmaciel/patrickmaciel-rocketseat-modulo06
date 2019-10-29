import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

import { LoadingStars } from './styles';

export default class Repository extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('starred').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    loading: false,
    starred: '',
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const { navigation } = this.props;
    const starred = navigation.getParam('starred');
    console.tron.log(starred);

    this.setState({
      loading: false,
      starred,
    });
  }

  render() {
    const { loading, starred } = this.state;

    return (
      <>
        {loading ? (
          <LoadingStars>
            <ActivityIndicator color="#7159c1" />
          </LoadingStars>
        ) : (
          <WebView source={{ uri: starred.html_url }} style={{ flex: 1 }} />
        )}
      </>
    );
  }
}
