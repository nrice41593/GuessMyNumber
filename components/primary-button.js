import {
    View,
    Text,
    Pressable,
    StyleSheet
} from 'react-native'

export default function PrimaryButton ({ children }) {

    function pressHandler() {

    }

    return (
        <Pressable onPress={pressHandler}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#72063c',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})