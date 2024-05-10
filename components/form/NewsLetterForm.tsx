'use client'
import { CustomFilledButton } from "@/utils/CustomButton"
import { filterFormikErrors } from "@/utils/formikHelper"
import { Input } from "@nextui-org/input"
import { useFormik } from "formik"
import toast from "react-hot-toast"
import * as yup from 'yup'

export const NewsLetterForm = () => {
    const validationSchema = yup.object().shape({
        name: yup.string()
            .required('Name is required'),

        email: yup.string()
            .email('Invalid email')
            .required('Email is required'),
    });
    const { handleSubmit, handleChange, values, errors, touched, handleBlur, setFieldValue } =
        useFormik({
            initialValues: {
                name: "",
                email: "",
            },
            validationSchema,
            onSubmit: async (values) => {
                toast.success('Form Submitted Successfully!');
            },
        });



    const errorsToRender = filterFormikErrors(errors, touched, values);
    return (
        <div className=" md:pr-12">
            <form onSubmit={handleSubmit}>
                <div className="px-4 pb-2">
                    <Input
                        id="name"
                        type="text"
                        placeholder="Name*"
                        variant="flat"
                        className="rounded-sm"
                        value={values.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                </div>
                <div className="px-4 pt-2">
                    <Input
                        id="email"
                        type="email"
                        variant="flat"
                        placeholder="Email Address*"
                        value={values.email}
                        className="rounded-md"
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                </div>
                <div className="p-4">
                    <button className="bg-primary hover:bg-primary/60 w-full text-white rounded-lg py-2" type="submit">ABONNIEREN</button>
                </div>
            </form>

            <div className="px-4">
                {errorsToRender.map((item) => {
                    return (
                        <div
                            key={item}
                            className="space-x-1 flex items-center text-red-500"
                        >
                            <p className="text-xs">✗ {item}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}