

function Button({buttonText, buttonType,disabledButton}) {
    return (
        <button
            type= {buttonType}
            className="button"
            disabled={disabledButton}

                onClick={() => console.log({buttonText})}
        >
            {buttonText}
        </button>
    )
}

export default Button
