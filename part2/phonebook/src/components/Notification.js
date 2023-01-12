const Notification = ({ message }) => {
    const style = {
        fontSize: 22,
        textAlign: 'center',
        border: '2px solid green',
        borderRadius: 10,
        padding: 10,
        color: 'green',
        background: '#dedede',
        marginBottom: 20
    }

    if (message === null) {
        return null
    }

    return (
        <div style={style}>
            {message}
        </div>
    )
}

export default Notification