import { AtSign, Phone, MapPin, Linkedin, Briefcase } from "lucide-react";
import { personalInfo } from "../data";
import { ContactItem } from "./ContactItem";

export function Contact() {
  return (
    <div className="w-full">
      <h3 className="text-xl text-right font-semibold">CONTACT</h3>
      <ContactItem>
        <p>{personalInfo.contact.email}</p>
        <AtSign width={20} height={20} className="text-accent" />
      </ContactItem>
      <ContactItem>
        <p>{personalInfo.contact.phone}</p>
        <Phone width={20} height={20} className="text-accent" />
      </ContactItem>
      <ContactItem>
        <p>{personalInfo.contact.location}</p>
        <MapPin width={20} height={20} className="text-accent" />
      </ContactItem>
      <ContactItem>
        <a
          href={personalInfo.contact.portfolio}
          className="text-blue-700 underline"
        >
          Portfolio
        </a>
        <Briefcase width={20} height={20} className="text-accent" />
      </ContactItem>
      <ContactItem>
        <a
          href={personalInfo.contact.linkedin}
          className="text-blue-700 underline"
        >
          LinkedIn
        </a>
        <Linkedin width={20} height={20} className="text-accent" />
      </ContactItem>
    </div>
  );
}
