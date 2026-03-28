import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import {
  ContactFormEmailTemplate,
  NewsletterSubscriptionTemplate,
  ProjectEmailTemplate,
  ProjectSchemaType,
} from "./email-templates";
import { FormSchemaType as ContactSchemaType } from "../form";
import { FormSchemaType } from "../project-form";
import { NewsletterSchemaType } from "@/action/newsletter.action";
import { FileType } from "@/action/project.action";
import { formatNumber } from "@/lib/utils";

type SendEmailProps = {
  email: string;
  subject: string;
  type: "project" | "contact" | "newsletter";
  data: ContactSchemaType | FormSchemaType | NewsletterSchemaType;
  files?: FileType[] | [];
  isCompany?: boolean;
};

export async function sendEmail({
  data,
  type,
  email,
  subject,
  files,
  isCompany,
}: SendEmailProps) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: subject,
    };
    let emailHtml = null;

    switch (type) {
      case "project":
        const projectData = data as FormSchemaType;
        if (files) {
          const attachments =
            files.length >= 1
              ? files.map((fileInfo) => {
                  const base64Data = fileInfo.base64
                    .split(";base64,")
                    .pop() as string;
                  return {
                    filename: fileInfo.name,
                    content: Buffer.from(base64Data, "base64"),
                    contentType: fileInfo.type,
                  };
                })
              : [];

          Object.assign(mailOptions, { attachments });
        }
        const project = {
          firstname: projectData.firstname,
          lastname: projectData.lastname,
          email: projectData.email,
          phone: projectData.phone,
          clientType: isCompany ? "Entreprise" : "Particulier",
          companyName: projectData.companyName,
          budget: formatNumber(projectData.budget),
          projectType: projectData.projectType,
          message: projectData.message,
        };
        emailHtml = await render(
          <ProjectEmailTemplate
            {...(project as unknown as ProjectSchemaType)}
          />,
          { pretty: true }
        );

        break;
      case "contact":
        emailHtml = await render(
          <ContactFormEmailTemplate {...(data as ContactSchemaType)} />,
          { pretty: true }
        );
        break;
      case "newsletter":
        emailHtml = await render(
          <NewsletterSubscriptionTemplate
            email={data as NewsletterSchemaType}
          />,
          { pretty: true }
        );
        break;
    }

    Object.assign(mailOptions, { html: emailHtml });
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    return true;
  } catch (e) {
    console.error({ e: e });
    return false;
  }
}
