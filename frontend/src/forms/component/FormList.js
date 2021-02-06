import FormItem from "./FormItem";

const FormList = ({ forms }) => {

    return (
        <div className="form-list overflow-y-auto md:px-12 md:pl-16">
            {forms.map((form, index) => (
                <FormItem form={form} key={form.form_id} index={index} />
            ))}
        </div>
    )


}
export default FormList;