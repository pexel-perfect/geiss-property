import { CustomDescription } from "@/utils/CustomDescription";
import { DividerWithImg } from "@/utils/DividerWithImg";

export default function AboutPage() {
    return (
        <>
            <div
                className="relative bg-cover bg-center  flex itemsp-center justify-center py-16 md:py-28"
                style={{
                    backgroundImage: `url('/images/corporate-services-geiss-property-scaled.jpg')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-60"></div>
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 font-primary">Firmengründungen & Umzugsservices</h1>
                    <p className="text-lg md:text-xl lg:text-3xl mb-2 md:mb-6 font-primary">- Carmen und Robert Geiss -</p>
                    <p className="text-lg md:text-xl lg:text-3xl mb-6 font-primary">- Die Geissens -</p>
                </div>
            </div>
            <div className="container">
                <CustomDescription textCenter="text-center">Geiss Properties ist Ihr Partner für Umzugs- und Unternehmensunterstützung. Zusammen mit unseren externen Spezialisten führen wir Sie durch alle notwendigen Schritte bezüglich Firmengründungen, Visa- und Aufenthaltsdienstleistungen und unterstützen Sie bei der Einrichtung Ihrer Bankangelegenheiten.</CustomDescription>
                <DividerWithImg spaceClass="py-12" />

                <div className="pt-4">
                    <h1 className="text-white text-xl font-bold font-primary">Unternehmensdienstleistungen mit Präzision
                    </h1>
                    <p className="font-primary text-description pt-2">Unser vertrauenswürdiges professionelles Netzwerk an Partnern gewährleistet die vollständige Organisation von Unternehmen und leitet Sie durch einen reibungslosen Prozess von der Gründung bis zur Etablierung.</p>
                </div>
                <div className="pt-8">
                    <h1 className="text-white text-xl font-bold font-primary">Mühelose Einrichtung von Bankkonten</h1>
                    <p className="font-primary text-description pt-2">{`Erschließen Sie das volle Potenzial Ihrer Geschäftsunternehmungen mit unserem problemlosen Service zur Einrichtung von Bankkonten. Unter Anleitung unseres Expertenteams optimieren wir den Prozess und gewährleisten eine schnelle und effiziente Einrichtung Ihrer Unternehmens- und Privatkonten.`}</p>
                </div>
                <div className="py-8">
                    <h1 className="text-white text-xl font-bold font-primary">VIP-Visa- und Aufenthaltsdienstleistungen für einen nahtlosen Übergang</h1>
                    <p className="font-primary text-description pt-2">{`Machen Sie Dubai mit unseren VIP-Visadiensten nahtlos zu Ihrem Zuhause. Unser engagiertes Team bietet persönliche Unterstützung während des gesamten Bewerbungsprozesses und sorgt für eine stressfreie und effiziente Erfahrung von Beginn bis zur Genehmigung.`}</p>
                </div>                
            </div>
        </>
    );
}