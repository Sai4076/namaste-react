const RestaurantCard = (props) => {
    const resData = props.resObj;
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
                className="res-logo"
                alt="res-logo"
                src={resData.info.image.url}
            />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.rating.rating_subtitle}</h4>
            <h4>{resData.info.rating.rating_text} stars</h4>
            <h4>{resData.info.rating.votes} Votes</h4>
        </div>
    )
}

export default RestaurantCard;