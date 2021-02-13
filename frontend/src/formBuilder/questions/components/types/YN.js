import Button from "../../../../shared/collection/Button"

const YN = (props) => {


    return (
        <div className="w-full flex">
            {props.type === "YN" &&
                <div className="pl-2 p-5 w-10/12 md:w-1/2 flex space-x-4">
                    <Button className="bg-yellow-400">
                        <div className="flex justify-evenly space-x-2 items-center px-2 md:text-lg">
                            <span>
                                <svg className="w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </span>
                            <span>Yes</span>
                        </div>

                    </Button>
                    <Button className="bg-yellow-400">
                        <div className="flex justify-evenly space-x-2 items-center px-2  md:text-lg">
                            <span>
                                <svg className="w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </span>
                            <span>No</span>
                        </div>

                    </Button>
                </div>
            }

        </div>
    )
}
export default YN;