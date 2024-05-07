'use client'
import { CustomInput } from "@/components/form/CustomInput";
import { title } from "@/components/primitives";
import { Immobilientyp } from "@/constants/constants";
import { CustomFilledButton } from "@/utils/CustomButton";
import { CustomDescription } from "@/utils/CustomDescription";
import { CustomTitle } from "@/utils/CustomTitle";
import { Button, Input, Image as NextUiImage, Select, SelectItem } from "@nextui-org/react"
import { useFormik } from "formik";
import { MdDoubleArrow } from "react-icons/md";
export default function ContactPage() {
	const { handleSubmit, handleChange, values } =
		useFormik({
			initialValues: {
				name: "",
				email: ""
			},
			validate: (values) => {
				const errors: any = {};
				return errors;
			},
			onSubmit: async (values) => {
				console.log(values);
			},
		});

	console.log(values, "values");
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 text-light container">
			<div>
				<NextUiImage
					isBlurred
					width={500}
					alt="contact-geissproperties"
					src="/images/contact-geissproperties.png"
				/>
			</div>
			<div>
				<div className=" pb-14">
					<p className="text-primary ">Kontaktformular</p>
					<CustomTitle>Wir freuen uns auf Sie!</CustomTitle>
					<CustomDescription>Wir ermutigen Sie, sich mit unserem engagierten Team in Verbindung zu setzen für Anfragen, persönliche Unterstützung oder um eine Beratung zu vereinbaren.
					</CustomDescription>
				</div>

				{/* form start here */}
				<form onSubmit={handleSubmit}>
					<div className="p-4">
						<Input
							id="name"
							type="text"
							variant="underlined"
							placeholder="iHr Name"
							style={{ color: "#f6f6f6", padding: "5px" }}
							onChange={handleChange}
						/>
					</div>
					<div className="p-4">
						<Input
							id="email"
							type="email"
							variant="underlined"
							placeholder="Enter your email"
							style={{ color: "#f6f6f6" }}
							onChange={handleChange}
						/>
					</div>
					<div className="p-4">
						<Select
							size={"md"}
							variant="underlined"
							label="Wähle Immobilientyp"
							className="max-w-xs"
							style={{ color: "#f6f6f6", width: "100%" }}
						>
							{Immobilientyp.map((item) => (
								<SelectItem key={item.value} value={item.value}>
									{item.label}
								</SelectItem>
							))}
						</Select>
					</div>
					<div className="p-4">
						<CustomFilledButton onClick={() => handleChange}>Submit</CustomFilledButton>
					</div>
				</form>
			</div>
		</div>
	);
}