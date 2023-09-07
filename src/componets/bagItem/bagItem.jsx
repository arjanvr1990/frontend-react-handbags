

function BagItem({bagImg, bagDescription, bagPrice, bagLabel}) {
    return(
        <article>
            <span>{bagLabel}</span>
            <img src={bagImg} alt="Tas"/>
            <p>The {bagDescription} Bag</p>
            <h4>{bagPrice}</h4>
        </article>


    );
}

export default BagItem