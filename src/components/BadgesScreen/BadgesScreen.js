import React from 'react';
import { View, ActivityIndicator, StyleSheet, FlatList, Text } from 'react-native';
import Colors from '../../res/Colors';
import Http from '../../libs/http';

class BadgesScreen extends React.Component{
    state = {
        loading: false,
        badges: [],
    };

    componentDidMount(){
        this.fetchdata();
    }

    fetchdata = async() => {
        this.setState({loading: true});
        let response = await Http.instance.get_all();
        response = response.reverse();
        console.log(response);
        this.setState({loading: false, badges: response});

    };

    render() {
        const {badges, loading} = this.state;

        return ( 
            <View style={[styles.container, styles.horizontal]}>
                { loading ? (
                    <ActivityIndicator
                        style={styles.loader}
                        color="#F57AEC"
                        size="large"
                    />
                ) : null}
                <FlatList
                style={styles.list} 
                data={badges}
                renderItem={(item) => {
                <Text>{item.name}</Text>;
            }}
                />            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor: Colors.charade,
    },
    horizontal:{
        justifyContent:'space-around',
        alignItems: 'center',
    },
    loader:{
        height: '100%',
        paddingHorizontal: 10,
        },
});

export default BadgesScreen; 
