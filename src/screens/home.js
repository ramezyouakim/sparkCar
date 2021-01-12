
/** Home Screen Class Component */
import React from 'react';
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    FlatList,
    StatusBar,
} from 'react-native';

//import actions
import * as storage from '../actions/storge';

//import components
import TableHeader from '../components/TableHeader';

//import modules
import styles from '../modules/styles';
import colors from '../modules/colors';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.fetchData(false);
    }

    async fetchData(force) {
        let data = await storage.getData();
        this.setState({ data: data }, () => {
            if (force) {
                this.forceUpdate()
            }
        })
    }

    renderHeaderRow(title1, title2, isHeader) {
        return (
            <TableHeader
                title1={title1}
                title2={title2}
                isHeader={isHeader}
            />
        )
    }

    renderFooter() {
        const {
            navigation
        } = this.props;
        return (
            <TouchableOpacity
                style={styles.addNewButton}
                onPress={() => navigation.navigate('AddNew', { fetchData: () => this.fetchData, context: this })}
            >
                <Text style={styles.addNewButtonText}>Add New</Text>
            </TouchableOpacity>
        )
    }

    render() {
        const {
            data
        } = this.state;
        let isEmty = data == undefined || data.length < 1 ? true : false;
        return (
            <>
                <StatusBar backgroundColor={colors.mainColorTheme} />
                <SafeAreaView style={styles.mainContainer}>
                    <>
                        { isEmty?
                            this.renderFooter()
                            :
                            <FlatList
                                ListHeaderComponent={() => this.renderHeaderRow('Car Type', 'Fuel Usage', true)}
                                data={data}
                                renderItem={({ item }) => this.renderHeaderRow(item.carType, item.fuelUsage, false)}
                                ListFooterComponent={() => this.renderFooter()}
                            />}
                    </>

                </SafeAreaView>
            </>
        );
    }
}

