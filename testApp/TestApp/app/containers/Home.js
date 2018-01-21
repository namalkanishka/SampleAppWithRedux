import React, { Component } from 'react';
import {
    Text,
    TextInput,
    Image,
    TouchableHighlight,
    ScrollView,
    StyleSheet,
    View
} from 'react-native';
import { connect } from 'react-redux';

class Home extends Component {
    searchPressd() {
        this.props.fetchRecipes('bacon, cucumber, banana');
    }
    add() {
        this.props.addRecipe();
    }
    movies() {
        return Object.keys(this.props.searchedRecipes).map(key => this.props.searchedRecipes[key])
    }
    render() {
        console.log(this.movies());
        return (

            <View>
                <View style={{ marginTop: 20 }}>
                    <TouchableHighlight onPress={() => { this.searchPressd() }}>
                        <Text>search</Text>
                    </TouchableHighlight>
                </View>
                <Text>NO: {this.props.recipeCount}</Text>
                <TouchableHighlight onPress={() => { this.add() }}>
                    <Text>add</Text>
                </TouchableHighlight>
                <ScrollView>
                    {this.movies().map((movie) => {
                        return (
                            <View key={movie.title}>
                                <Text>{movie.title}</Text>
                                <Image
                                    style={{ width: 250, height: 250 }}
                                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                                />
                            </View>
                        )
                    })
                    }
                </ScrollView>
            </View>
        );
    }
}

function mapStateToPrpos(state) {
    return {
        searchedRecipes: state.searchedRecipes,
        recipeCount: state.recipeCount
    }
}

export default connect(mapStateToPrpos)(Home);