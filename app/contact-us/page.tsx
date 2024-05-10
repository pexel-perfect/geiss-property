'use client'
import { Budgetrahmen, Immobilientyp } from "@/constants/constants";
import { CustomFilledButton } from "@/utils/CustomButton";
import { CustomDescription } from "@/utils/CustomDescription";
import { CustomTitle } from "@/utils/CustomTitle";
import { filterFormikErrors } from "@/utils/formikHelper";
import { SelectorIcon } from "@/utils/SelectorIcon";
import { Input, Image as NextUiImage, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useFormik } from "formik";
import { ChangeEvent, ChangeEventHandler } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import * as yup from 'yup'
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { DividerWithImg } from "@/utils/DividerWithImg";
import toast from "react-hot-toast";


export default function ContactPage() {

	const validationSchema = yup.object().shape({
		name: yup.string()
			.required('Name is required'),

		email: yup.string()
			.email('Invalid email')
			.required('Email is required'),

		immobilientyp: yup.string()
			.required('Immobilientyp is required'),

		budgetrahmen: yup.string()
			.required('Budgetrahmen is required'),

		nachricht: yup.string()
			.required('Nachricht is required')
	});
	const { handleSubmit, handleChange, values, errors, touched, handleBlur, setFieldValue } =
		useFormik({
			initialValues: {
				name: "",
				email: "",
				immobilientyp: "",
				budgetrahmen: "",
				nachricht: ""
			},
			validationSchema,
			onSubmit: async (values) => {
				toast.success('Form Submitted Successfully!');
			},
		});

	const handleImmobilientypChange = (value: ChangeEvent<HTMLSelectElement>) => {
		setFieldValue('immobilientyp', value.target.value);
	};

	const handleBudgetrahmenChange = (value: ChangeEvent<HTMLSelectElement>) => {
		setFieldValue('budgetrahmen', value.target.value);
	};

	const errorsToRender = filterFormikErrors(errors, touched, values);

	// console.log(errors);
	console.log(values, "values");
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 text-light container">
				<div>
					<NextUiImage
						isBlurred
						width={500}
						className="section-header"
						alt="contact-geissproperties"
						src="/images/contact-geissproperties.png"
					/>
					<div className="mt-12 space-y-4 text-sm pb-4">
						<div className="flex items-center justify-start">
							<FaLocationDot className="h-6 w-7 text-light " />
							<a className="ml-2 text-light transition hover:text-[#9ca3af] md:text-xl" href="#">Creek Harbour, Dubai, United Arab Emirates</a>
						</div>
						<div className="flex items-center justify-start">
							<AiOutlinePhone className="h-6 w-7 text-light" />
							<a className="ml-2 text-light transition hover:text-[#9ca3af] md:text-xl" href="#">+49-2234-9967099</a>
						</div>
						<div className="flex items-center justify-start">
							<AiOutlineMail className="h-6 w-7 text-light" />
							<a className="ml-2 text-light transition hover:text-[#9ca3af] md:text-xl" href="#">inquiry@geissproperty.com</a>
						</div>
					</div>
				</div>
				<div>
					<div className=" pb-14">
						<p className="text-primary ">Kontaktformular</p>
						<CustomTitle>Wir freuen uns auf Sie!</CustomTitle>
						<CustomDescription>Wir ermutigen Sie, sich mit unserem engagierten Team in Verbindung zu setzen für Anfragen, persönliche Unterstützung oder um eine Beratung zu vereinbaren.
						</CustomDescription>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="p-2">
							<Input
								id="name"
								type="text"
								label="iHr Name"
								color="primary"
								variant="underlined"
								value={values.name}
								onBlur={handleBlur}
								onChange={handleChange}
							/>
						</div>
						<div className="p-2">
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
						<div className="p-2 w-full ">
							<Select
								id="immobilientyp"
								label="Wähle Immobilientyp"
								variant="underlined"
								color="primary"
								className="max-w-full "
								value={values.immobilientyp}
								selectorIcon={<SelectorIcon />}
								onBlur={handleBlur}
								onChange={handleImmobilientypChange}
							>
								{Immobilientyp.map((item) => (
									<SelectItem key={item.value} value={item.value}>
										{item.label}
									</SelectItem>
								))}
							</Select>
						</div>
						<div className="p-2 w-full ">
							<Select
								id="budgetrahmen"
								label="Wähle Budgetrahmen"
								variant="underlined"
								color="primary"
								className="max-w-full "
								value={values.budgetrahmen}
								selectorIcon={<SelectorIcon />}
								onBlur={handleBlur}
								onChange={handleBudgetrahmenChange}
							>
								{Budgetrahmen.map((item) => (
									<SelectItem key={item.value} value={item.value}>
										{item.label}
									</SelectItem>
								))}
							</Select>
						</div>
						<div className="p-2 w-full ">
							<Textarea
								id="nachricht"
								key="underlined"
								variant="underlined"
								color="primary"
								labelPlacement="inside"
								label="Ihre Nachricht"
								value={values.nachricht}
								className="col-span-12 md:col-span-6 mb-6 md:mb-0"
								onBlur={handleBlur}
								onChange={handleChange}
							/>
						</div>
						<div className="p-4">
							<CustomFilledButton onClick={() => handleChange}>Submit</CustomFilledButton>
						</div>
					</form>
					<div className="">
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

			</div>
			<div className="bg-grayBackground pb-10">
				<div className="container">
					<DividerWithImg />
					<div className="text-center">
						<CustomTitle>Jetzt Kontakt aufnehmen!</CustomTitle>
						<CustomDescription >Zögern Sie nicht, uns für eine Beratung zu kontaktieren, bei der unsere erfahrenen Makler eine maßgeschneiderte Auswahl exquisiter Immobilien für Sie zusammenstellen werden.</CustomDescription>
					</div>
				</div>
			</div>
			<div className="container ">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow">
					<NextUiImage
						width={500}
						style={{ width: '500px', height: '300px' }}
						alt="contact-geissproperties"
						src="/images/geiss-property-dubai.jpeg"
					/>
					<div className="flex flex-col justify-center items-center text-light text-center p-6 shadow-2xl bg-grayBackground rounded-md">
						<FaEnvelopeOpenText className="h-8 w-8" />
						<CustomTitle fontFamily="font-secondary">per eMail</CustomTitle>
						<CustomDescription>Für Anfragen und Fragen sind wir nur eine E-Mail entfernt.
						</CustomDescription>
					</div>
					<NextUiImage
						width={500}
						style={{ width: '500px', height: '300px' }}
						alt="contact-geissproperties"
						src="/images/properties-for-rent-dubai.jpg"
					/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow py-6 pb-8">
					<div className="flex flex-col justify-center items-center text-light text-center p-6 shadow-2xl bg-grayBackground rounded-md">
						<FaPhoneAlt className="h-8 w-8" />
						<CustomTitle fontFamily="font-secondary">per Telefon</CustomTitle>
						<CustomDescription>Wir stehen Ihnen zur Verfügung, um mit Ihnen zu sprechen und Unterstützung zu bieten.
						</CustomDescription>
					</div>
					<NextUiImage
						width={500}
						style={{ width: '500px', height: '300px' }}
						alt="contact-geissproperties"
						src="/images/properties-for-rent-dubai.jpg"
					/>
					<div className="flex flex-col justify-center items-center text-light text-center p-6 shadow-2xl bg-grayBackground rounded-md">
						<FaLocationDot className="h-8 w-8" />
						<CustomTitle fontFamily="font-secondary">im Büro</CustomTitle>
						<CustomDescription>Besuchen Sie uns in unserem Büro und lassen Sie sich von uns bei Ihren Anliegen unterstützen.
							Creek Harbour, Dubai, United Arab Emirates
						</CustomDescription>
					</div>
				</div>
			</div>
		</>
	);
}