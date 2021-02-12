import QTypeIcon from "../../../../shared/collection/QTypeIcon";

const Rating = (props) => {
    const ratings = [{}, {}, {}, {}, {}];
    return (
        <div className="w-full flex  p-5  items-center border">
            {props.properties.shape === "star" &&
                <>
                    {ratings.map((star, index) =>
                        <QTypeIcon className="w-14" color="black" shape="star" type="RATING" key={index} />
                    )}
                </>

            }
            {
                props.properties.shape === "heart" &&
                <>
                    {ratings.map((shape, index) =>
                        <QTypeIcon className="w-14" color="black" shape="heart" type="RATING" key={index} />
                    )}
                </>
            }
            {
                props.properties.shape === "thumb" &&
                <>
                    {ratings.map((star, index) =>
                        <QTypeIcon className="w-14" color="black" shape="thumb" type="RATING" key={index} />
                    )}
                </>
            }


        </div>
    )
}
export default Rating