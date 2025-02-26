const LanguageElement = (prop) => {

    const style = {
        backgroundColor: prop.backgroundColor,
        color: prop.color
    }

    return (
        <span
            className={prop.className}
            style={style}>{prop.name}</span>
    )
}

export default LanguageElement;