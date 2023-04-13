

const Cards = (props) => {
    return (
        <div className='cards'>
            <div className="card-title">{props.title}</div>
            <div className="card-desc">{props.desc}</div>
        </div>
    )
}

export default Cards