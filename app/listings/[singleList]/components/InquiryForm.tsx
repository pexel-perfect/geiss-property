import { CustomFilledButton } from "@/utils/CustomButton";
import { filterFormikErrors } from "@/utils/formikHelper";
import { Input, Textarea } from "@nextui-org/input";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import * as yup from 'yup';


const InquiryForm: React.FC = () => {
    const validationSchema = yup.object().shape({
        name: yup.string()
            .required('Name is required'),

        email: yup.string()
            .email('Invalid email')
            .required('Email is required'),

        phone: yup.string()
            .required('Telefonnummer is required'),

        nachricht: yup.string()
            .required('Nachricht is required')
    });
    const { handleSubmit, handleChange, values, errors, touched, handleBlur, setFieldValue } =
        useFormik({
            initialValues: {
                name: "",
                email: "",
                phone: "",
                nachricht: ""
            },
            validationSchema,
            onSubmit: async (values) => {
                toast.success('Form Submitted Successfully!');
            },
        });
    const errorsToRender = filterFormikErrors(errors, touched, values);
    return (
        <div className="p-2">
            <h1 className="text-primary text-xl font-bold font-primary ">Anfrageformular</h1>
            <form onSubmit={handleSubmit}>
                <div className="py-2">
                    <Input
                        id="name"
                        type="text"
                        radius="sm"
                        label="iHr Name"
                        color="primary"
                        variant="underlined"
                        value={values.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                </div>
                <div className="py-2">
                    <Input
                        id="email"
                        type="email"
                        variant="underlined"
                        color="primary"
                        label="Email"
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                </div>
                <div className="py-2">
                    <Input
                        id="phone"
                        type="text"
                        variant="underlined"
                        color="primary"
                        label="Telefonnummer"
                        value={values.phone}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                </div>
                <div className="py-2 w-full ">
                    <Textarea
                        id="nachricht"
                        key="underlined"
                        variant="underlined"
                        color="primary"
                        labelPlacement="inside"
                        label="Ihre Nachricht"
                        value={values.nachricht}
                        className="col-span-8 md:col-span-4 mb-6 md:mb-0"
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                </div>
                <div className="py-4">
                    <CustomFilledButton onClick={() => handleChange}>Submit</CustomFilledButton>
                </div>
                <div className="">
                    {errorsToRender.map((item: any) => {
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
            </form>

            {/* bottom part */}
            <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-light">Geiss Properties - The Geissens</p>

                <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center justify-center md:justify-start">
                        <AiOutlinePhone className="h-5 w-5 text-[#9ca3af]" />
                        <a className="ml-2 text-[#9ca3af] transition hover:text-light" href="#">+49-2234-9967099</a>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                        <FaWhatsapp className="h-5 w-5 text-[#9ca3af]" />
                        <a className="ml-2 text-[#9ca3af] transition hover:text-light" href="https://api.whatsapp.com/send/?phone=971503573748&text=Ich+bin+an+Immobilien+in+Dubai+interessiert&type=phone_number&app_absent=0" target="_blank">+971-50-35-737-48</a>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                        <AiOutlineMail className="h-5 w-5 text-[#9ca3af]" />
                        <a className="ml-2 text-[#9ca3af] transition hover:text-light" href="#">anfrage@geissproperty.com</a>
                    </div>
                </div>
            </div>
        </div >)
}

export default InquiryForm; 