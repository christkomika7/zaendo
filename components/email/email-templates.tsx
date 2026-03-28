import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Row,
  Column,
  Img,
} from "@react-email/components";
import { FormSchemaType as ContactFormSchemaType } from "../form";
import { FormSchemaType } from "../project-form";

export type ProjectSchemaType = Omit<FormSchemaType, "switch"> & {
  clientType: "Entreprise" | "Particulier";
};

export function ProjectEmailTemplate(
  data: ProjectSchemaType & { clientType: string }
) {
  return (
    <Html>
      <Head />
      <Body
        style={{
          backgroundColor: "#f4f4f4",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "40px 20px",
            borderRadius: "10px",
            maxWidth: "600px",
            margin: "0 auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
          }}
        >
          {/* En-tête */}
          {/* Logo et en-tête */}
          <Section style={{ marginBottom: "30px" }}>
            <Img
              src="https://zaendo.vercel.app/_next/image?url=%2Fzaendo.png&w=48&q=75"
              alt="Zaendo"
              width="120"
              height="50"
              style={{ margin: "0 auto 20px" }}
            />
          </Section>

          {/* Notification */}
          <Section style={{ marginBottom: "25px" }}>
            <Text
              style={{
                fontSize: "16px",
                color: "#555555",
                lineHeight: "1.5",
                marginBottom: "20px",
              }}
            >
              Vous avez reçu une nouvelle demande de projet. Voici les détails :
            </Text>
          </Section>

          {/* Informations client */}
          <Section
            style={{
              backgroundColor: "#f9f9f9",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "25px",
            }}
          >
            <Text
              style={{
                fontSize: "16px",
                color: "#333333",
                fontWeight: "bold",
                marginBottom: "15px",
                textAlign: "left",
              }}
            >
              Informations client
            </Text>
            <Row>
              <Column>
                <Text
                  style={{
                    fontSize: "14px",
                    color: "#555555",
                    margin: "5px 0",
                    textAlign: "left",
                  }}
                >
                  <strong>Nom complet :</strong> {data.firstname}{" "}
                  {data.lastname}
                </Text>
                <Text
                  style={{
                    fontSize: "14px",
                    color: "#555555",
                    margin: "5px 0",
                    textAlign: "left",
                  }}
                >
                  <strong>Type de client :</strong> {data.clientType}
                </Text>
                {data.clientType === "Entreprise" && (
                  <Text
                    style={{
                      fontSize: "14px",
                      color: "#555555",
                      margin: "5px 0",
                      textAlign: "left",
                    }}
                  >
                    <strong>Entreprise :</strong> {data.companyName}
                  </Text>
                )}
                <Text
                  style={{
                    fontSize: "14px",
                    color: "#555555",
                    margin: "5px 0",
                    textAlign: "left",
                  }}
                >
                  <strong>Email :</strong> {data.email}
                </Text>
                <Text
                  style={{
                    fontSize: "14px",
                    color: "#555555",
                    margin: "5px 0",
                    textAlign: "left",
                  }}
                >
                  <strong>Téléphone :</strong> {data.phone}
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Détails du projet */}
          <Section
            style={{
              backgroundColor: "#f9f9f9",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "25px",
            }}
          >
            <Text
              style={{
                fontSize: "16px",
                color: "#333333",
                fontWeight: "bold",
                marginBottom: "15px",
                textAlign: "left",
              }}
            >
              Détails du projet
            </Text>
            <Row>
              <Column>
                <Text
                  style={{
                    fontSize: "14px",
                    color: "#555555",
                    margin: "5px 0",
                    textAlign: "left",
                  }}
                >
                  <strong>Type de projet :</strong> {data.projectType}
                </Text>
                <Text
                  style={{
                    fontSize: "14px",
                    color: "#555555",
                    margin: "5px 0",
                    textAlign: "left",
                  }}
                >
                  <strong>Budget :</strong> {data.budget.toLocaleString()} FCFA
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Message du client */}
          <Section style={{ marginBottom: "30px" }}>
            <Text
              style={{
                fontSize: "16px",
                color: "#333333",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Message du client :
            </Text>
            <Text
              style={{
                fontSize: "14px",
                color: "#555555",
                lineHeight: "1.5",
                backgroundColor: "#f9f9f9",
                padding: "15px",
                borderRadius: "8px",
                textAlign: "left",
                fontStyle: "italic",
              }}
            >
              {data.message}
            </Text>
          </Section>

          {/* Rappel */}
          <Section
            style={{
              borderTop: "1px solid #eeeeee",
              paddingTop: "20px",
              textAlign: "center",
            }}
          >
            <Text
              style={{
                fontSize: "12px",
                color: "#999999",
              }}
            >
              Cet email a été généré automatiquement. Veuillez répondre au
              client dans les 48 heures.
            </Text>
            <Text
              style={{
                fontSize: "12px",
                color: "#999999",
                marginTop: "10px",
              }}
            >
              © 2025 ZAENDO. Tous droits réservés.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export function ContactFormEmailTemplate({
  name,
  email,
  phone,
  object,
  message,
}: ContactFormSchemaType) {
  return (
    <Html>
      <Head />
      <Body
        style={{
          backgroundColor: "#f4f4f4",
          padding: "20px",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "30px",
            borderRadius: "12px",
            maxWidth: "600px",
            margin: "0 auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
          }}
        >
          {/* En-tête */}
          {/* Logo et en-tête */}
          <Section style={{ marginBottom: "30px" }}>
            <Img
              src="https://zaendo.vercel.app/_next/image?url=%2Fzaendo.png&w=48&q=75"
              alt="Zaendo"
              width="120"
              height="50"
              style={{ margin: "0 auto 20px" }}
            />
          </Section>

          {/* Détails du contact */}
          <Section
            style={{
              backgroundColor: "#f9f9f9",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "24px",
            }}
          >
            <Row style={{ marginBottom: "12px" }}>
              <Column style={{ width: "30%" }}>
                <Text
                  style={{ fontWeight: "bold", margin: "0", color: "#333" }}
                >
                  Nom:
                </Text>
              </Column>
              <Text style={{ margin: "0", color: "#555" }}>{name}</Text>
            </Row>
            <Row style={{ marginBottom: "12px" }}>
              <Column style={{ width: "30%" }}>
                <Text
                  style={{ fontWeight: "bold", margin: "0", color: "#333" }}
                >
                  Email:
                </Text>
              </Column>
              <Text style={{ margin: "0", color: "#555" }}>{email}</Text>
            </Row>
            <Row style={{ marginBottom: "12px" }}>
              <Column style={{ width: "30%" }}>
                <Text
                  style={{ fontWeight: "bold", margin: "0", color: "#333" }}
                >
                  Téléphone:
                </Text>
              </Column>
              <Text style={{ margin: "0", color: "#555" }}>{phone}</Text>
            </Row>
            <Row style={{ marginBottom: "12px" }}>
              <Column style={{ width: "30%" }}>
                <Text
                  style={{ fontWeight: "bold", margin: "0", color: "#333" }}
                >
                  Objet:
                </Text>
              </Column>
              <Text style={{ margin: "0", color: "#555" }}>{object}</Text>
            </Row>
          </Section>

          {/* Message */}
          <Section
            style={{
              borderLeft: "4px solid #16a34a",
              paddingLeft: "16px",
              marginBottom: "24px",
            }}
          >
            <Heading
              as="h3"
              style={{
                fontSize: "18px",
                color: "#333",
                marginTop: "0",
                marginBottom: "10px",
              }}
            >
              Message:
            </Heading>
            <Text
              style={{
                fontSize: "15px",
                lineHeight: "1.6",
                color: "#444",
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
            </Text>
          </Section>

          {/* Pied de page */}
          <Section style={{ textAlign: "center" }}>
            <Text
              style={{
                fontSize: "14px",
                color: "#888",
                margin: "0 0 8px 0",
              }}
            >
              Merci d&apos;avoir contacté Zaendo. Nous vous répondrons bientôt.
            </Text>
            <Text
              style={{
                fontSize: "12px",
                color: "#aaa",
                margin: "0",
              }}
            >
              © 2025 Zaendo. Tous droits réservés.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export function NewsletterSubscriptionTemplate({ email }: { email: string }) {
  return (
    <Html>
      <Head />
      <Body
        style={{
          backgroundColor: "#f4f4f4",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "40px 20px",
            borderRadius: "10px",
            textAlign: "center",
            maxWidth: "550px",
            margin: "0 auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
          }}
        >
          {/* Logo et en-tête */}
          <Section style={{ marginBottom: "30px" }}>
            <Img
              src="https://zaendo.vercel.app/_next/image?url=%2Fzaendo.png&w=48&q=75"
              alt="Zaendo"
              width="120"
              height="50"
              style={{ margin: "0 auto 20px" }}
            />
          </Section>

          {/* Contenu principal */}
          <Section style={{ marginBottom: "30px" }}>
            <Text
              style={{
                color: "#555555",
                fontSize: "16px",
                lineHeight: "1.5",
                marginBottom: "25px",
              }}
            >
              Une nouvelle inscription à la newsletter a été effectuée avec
              l&apos;adresse e-mail suivante : <strong>{email}</strong>.
            </Text>
            <Text
              style={{
                fontSize: "14px",
                color: "#777777",
                marginBottom: "25px",
              }}
            >
              Vous pouvez consulter la liste des abonnés ou prendre les mesures
              nécessaires si besoin.
            </Text>
          </Section>

          {/* Pied de page */}
          <Section>
            <Text
              style={{
                fontSize: "12px",
                color: "#999999",
                marginBottom: "10px",
              }}
            >
              © 2025 Zaendo. Tous droits réservés.
            </Text>
            <Text
              style={{
                fontSize: "12px",
                color: "#999999",
              }}
            >
              Pour toute question, contactez notre équipe à support@zaendo.com
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
