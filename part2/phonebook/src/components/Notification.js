const Notification = ({class_, message}) => {
    if (message === null) {
        return null
    }

    return (
        <div className={`${class_}`}>
            {message}
        </div>
    )
}

export default Notification