import ResponseItem from "./ResponseItem";

const ResponsesList = ({ responses }) => {

    return (
        <div className="overflow-y-auto md:px-12 md:pl-16">
            {responses && responses.length > 0 ?
                    <div>
                         {responses.map((response,index) => <ResponseItem key={response.token} token={response.token} index={index+1} />)}
                    </div>
                    :
                    <div>
                        No response..
                    </div>
            }
        </div>
    )


}
export default ResponsesList;