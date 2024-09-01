import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
  Font,
} from "@react-email/components";

interface SubscribeUserEmailProps {
  website?: string;
  receverEmail?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const SubscribeUserEmail = ({
  website,
  receverEmail,
}: SubscribeUserEmailProps) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: "https://fonts.gstatic.com/s/Roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section>
              <Img
                src={`${baseUrl}/static/logo_mobile.png`}
                width="50"
                height="50"
                alt="Sylvain kadjo logo"
                className="mb-[20px] mx-auto"
              />
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              Hi {receverEmail}
            </Text>
            <Text className="leading-[20px]">
              Thank you for subscribing to <strong>sylvainkadjo.com!</strong> 🎉
              We’re thrilled to have you as part of our community.
            </Text>

            {/* Footer */}
            <Section className="text-center">
              <table className="w-full">
                <tr className="w-full">
                  <td align="left">
                    <Text className="leading-[20px] text-gray-900">
                      {`If you have any questions, feedback, or just want to say
                      hello, don’t hesitate to get in touch with us. We'd love
                      to hear from you!`}
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td align="left">
                    <Row className="table-cell h-[30px] w-[56px] align-bottom">
                      <Column className="pr-[8px]">
                        <Link href="https://github.com/sylvain12">
                          <Img
                            alt="Github"
                            height="24"
                            width="24"
                            src="/static/github-logo.png"
                          />
                        </Link>
                      </Column>
                      <Column className="pr-[8px]">
                        <Link href="https://www.linkedin.com/in/sylvain-kadjo-374a4911b/">
                          <Img
                            alt="Linkedin"
                            height="22"
                            width="24"
                            src="/static/linkedin-logo.png"
                          />
                        </Link>
                      </Column>
                      <Column>
                        <Link href="https://www.instagram.com/sylvainka12/">
                          <Img
                            alt="Instagram"
                            height="24"
                            width="24"
                            src="/static/instagram-logo.png"
                          />
                        </Link>
                      </Column>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td align="left">
                    <Text className="mt-[4px] text-[14px] leading-[24px] text-gray-500">
                      sylvainka12@gmail.com
                    </Text>
                    <Hr />
                    <Text className="text-[10px] text-gray-500 text-center">
                      Thanks again for subscribing, and welcome aboard! 🚀
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

SubscribeUserEmail.PreviewProps = {
  website: "sylvainkadjo.com",
} as SubscribeUserEmailProps;

export default SubscribeUserEmail;
