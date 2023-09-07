function Tile({ tileTitle, tileText, tileImg, disabledImg }) {
    if (!tileImg) {
        return (
            <section>
                <h2>{tileTitle}</h2>
                <p>{tileText}</p>
            </section>
        );
    } else {
        return (
            <section>
                <h2>{tileTitle}</h2>
                <p>{tileText}</p>
                <img src={tileImg} alt={tileTitle} />
            </section>
        );
    }
}

export default Tile;
