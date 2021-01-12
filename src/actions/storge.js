import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveData(value) {
    console.log('dmsnkldnsldkand')
    try {
        let data = [];
        let ExData = await getData();
        if (ExData !== null && ExData !== undefined) {
            data = ExData;
            data.push(value);
            console.log(data)
            await AsyncStorage.setItem('carList', JSON.stringify(data))
        }
        else {
            data.push(value);
            console.log(data)
            await AsyncStorage.setItem('carList', JSON.stringify(data))
        }

    } catch (e) {
        // saving error
        console.log(e)
        return e;
    }
}

export async function getData() {
    try {
        const value = await AsyncStorage.getItem('carList')
        if (value !== null) {
            // value previously stored
            let data = await JSON.parse(value);
            return data;
        }
    } catch (e) {
        // error reading value
        console.log(e)
        return e;
    }
}