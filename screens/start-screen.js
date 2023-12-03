import {
    View,
    TextInput,
    StyleSheet
} from 'react-native'
import PrimaryButton from '../components/primary-button'


export default function StartScreen () {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input} 
                maxLength={2} 
                keyboardType='number-pad'
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#4e0329',
        borderRadius: 10,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: -10, height: 10},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    input: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})