import Rating from "./Rating";

const NoChoice = (props) => {


    return (
        <>
            {props.type === "RATING" &&
                <Rating {...props} />

            }

        </>
    )
}
export default NoChoice;