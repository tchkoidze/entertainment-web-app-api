import mailTransporter from "./index";
import path, { join } from "path";
import { Edge } from "edge.js";

const send = (to: string, subject: string, html: any) => {
  const options = {
    to,
    subject,
    html,
    from: "ilia.chkoidze12@outlook.com",
  };

  return mailTransporter.sendMail(options);
};

const edge = new Edge({ cache: false });
const templatesPath = join(path.resolve(), "src/mail/templates");
edge.mount(templatesPath);

export const sendEmailConfirmation = async (
  to: string,
  hash: string,
  backLink: string
) => {
  const html = edge.renderSync("confirm-email", {
    link: `${backLink}?hash=${hash}`,
    name: `${to}`,
  });
  return send(to, "Email Confirmation", html);
};
