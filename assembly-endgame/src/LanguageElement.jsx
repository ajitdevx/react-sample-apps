const LanguageElement = (prop) => {

    const style = {
        backgroundColor: prop.backgroundColor,
        color: prop.color
    }

    return (
        <span style={style}>{prop.name}</span>
    )
}

export default LanguageElement;