
const SumChildDetail = (props) => {
    const { label, value } = props;
    return (
        <div className="flex flex-col w-full text-2xl shadow p-4 capitalize">
            <div>
                {label}
            </div>
            <div className="text-4xl font-bold">
                {value}
            </div>
        </div>
    )
}
export default SumChildDetail