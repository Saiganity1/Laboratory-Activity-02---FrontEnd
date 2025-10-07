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
	list_user:{
		padding: 10,
		marginVertical: 8,
		borderColor: '#0f0f0fff',
		backgroundColor: '#96ffff71',
		borderWidth: 1,
		borderRadius: 8,
		fontSize: 16,
		color: '#000000ff',
	},
	userCard: {
		backgroundColor: '#ffffff',
		margin: 8,
		padding: 16,
		borderRadius: 12,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		borderWidth: 1,
		borderColor: '#e0e0e0',
	},
	userInfo: {
		fontSize: 16,
		marginBottom: 6,
		color: '#333',
	},
	userLabel: {
		fontWeight: 'bold',
		color: '#666',
	},
	flatListContainer: {
		flex: 1,
		width: '100%',
		paddingHorizontal: 8,
	}
});

export default styles;