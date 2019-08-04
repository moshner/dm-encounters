const inputStyles = {
    borderWidth: 1,
    padding: '0.5rem',
    borderRadius: '0.5rem',
    borderColor: '#ccc',
};

export const theme = {
    app: {
        flex: 1,
    },
    nav: {
        backgroundColor: '#000',
    },
    navToggle: {
        color: '#fff',
        margin: '1rem',
    },
    contentArea: {
        flex: 1,
        padding: '1rem',
    },
    input: inputStyles,
    inputWithButton: {
        ...inputStyles,
        flex: 1,
        marginRight: '0.5rem',
    },
    inputGroup: {
        marginBottom: '0.5rem',
        flexDirection: 'row',
    },
} as {[key: string]: object};

export default theme;
