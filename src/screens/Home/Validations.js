import * as Yup from "yup";

const scheme = () =>
    Yup.object().shape({
        item: Yup.string()
            .required("Please enter an item."),
    });

export default scheme;
