import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#c5dbf0ff',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 16,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#080808ff',
		marginBottom: 16,
	},
	button: {
		backgroundColor: '#7e8383ff',
        padding: 10,
        width: '80%',
		color: '#080808ff',
	},
	input: {
		width: '80%',
		padding: 10,
		marginVertical: 8,
		borderColor: '#0f0f0fff',
		backgroundColor: '#96ffff71',
		borderWidth: 1,
		borderRadius: 8,
		fontSize: 16,
		color: '#000000ff',
	},
});

export default styles;