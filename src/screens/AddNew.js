
/** Home Screen Class Component */
import React from 'react';
import {
    View,
    SafeAreaView,
    TextInput,
    Text,
    TouchableOpacity,
    StatusBar,
} from 'react-native';

//import components

//import Actions
import * as storage from '../actions/storge';

//import modules
import styles from '../modules/styles';
import colors from '../modules/colors';
import HomeScreen from './home';

export default class AddNewScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            carType: '',
            fuelUsage: '',
            errorText: false
        };
    }

    async saveDataToStorage() {
        const {
            carType,
            fuelUsage
        } = this.state;
        if (carType.length > 2 && fuelUsage.length > 2) {
            await storage.saveData({
                carType: carType,
                fuelUsage: fuelUsage
            });
            this.handleBack();
        }
        else {
            this.setState({ errorText: true })
        }
    }

    handleBack() {
        const {
            fetchData,
            context
        } = this.props.route.params;
        HomeScreen.prototype.fetchData.call(context,true);
        this.props.navigation.goBack()
    }
    render() {
        const {
            errorText
        } = this.state;
        return (
            <>
                <StatusBar backgroundColor={colors.mainColorTheme} />
                <SafeAreaView style={[styles.mainContainer, { alignItems: 'center' }]}>
                    {errorText && <Text style={{ color: colors.red }} >Please fill the fileds Below</Text>}
                    <View style={styles.TextInputComponent}>
                        <TextInput
                            style={styles.TextInputComponentText}
                            placeholder={'Car Type'}
                            placeholderTextColor={errorText ? colors.red : colors.darkGray}
                            onChangeText={text => this.setState({ carType: text })}
                            onSubmitEditing={() => this.saveDataToStorage()}
                        />
                    </View>

                    <View style={styles.TextInputComponent}>
                        <TextInput
                            style={styles.TextInputComponentText}
                            placeholder={'Fuel Usage'}
                            placeholderTextColor={errorText ? colors.red : colors.darkGray}
                            onChangeText={text => this.setState({ fuelUsage: text })}
                            onSubmitEditing={() => this.saveDataToStorage()}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.addNewButton}
                        onPress={() => this.saveDataToStorage()}
                    >
                        <Text style={styles.addNewButtonText}>Add</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </>
        );
    }
}