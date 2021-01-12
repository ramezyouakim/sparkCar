
import React from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from '../modules/styles';
import colors from '../modules/colors';
import values from '../modules/values';

export default TableHeader = ({ title1, title2, isHeader }) => (
    <View style={[styles.row, { borderColor: colors.lightgray, borderBottomWidth: 2 }]}>
        <View style={styles.carTypeItemHeaderName}>
            <Text style={[styles.carItemHeaderText, { textAlign: 'left', fontSize: isHeader ? values.header1 : values.header2, fontWeight: isHeader ? '500' : null }]}>{title1}</Text>
        </View>
        <View style={styles.carItemHeader}>
            <Text style={[styles.carItemHeaderText, { fontSize: isHeader ? values.header1 : values.header2, fontWeight: isHeader ? '500' : null }]}>{title2}</Text>
        </View>
    </View>
)