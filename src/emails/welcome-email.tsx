import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export default function WelcomeEmail() {
  return (
    <Html>
      <Head />
      <Preview>You’re officially on the Vrebi early-access list.</Preview>

      <Body style={body}>
        <Container style={container}>
          <Section style={brand}>
            <Text style={logo}>Vrebi</Text>
          </Section>

          <Section style={card}>
            <Text style={eyebrow}>EARLY ACCESS CONFIRMED</Text>

            <Heading style={heading}>
              Welcome to the future of your life.
            </Heading>

            <Text style={lead}>
              You’re officially on the Vrebi waitlist.
            </Text>

            <Text style={paragraph}>
              We’re building an AI Life Operating System that remembers what
              matters, connects the dots, and helps you move through life with
              more clarity.
            </Text>

            <Section style={quoteBox}>
              <Text style={quote}>
                Not another productivity app.
                <br />
                An intelligence layer for your life.
              </Text>
            </Section>

            <Button href="https://vrebi.com" style={button}>
              Explore Vrebi
            </Button>

            <Hr style={divider} />

            <Text style={benefit}>✓ Early product access</Text>
            <Text style={benefit}>✓ Founder updates</Text>
            <Text style={benefit}>✓ A front-row seat to what comes next</Text>

            <Hr style={divider} />

            <Text style={closing}>
              We’re just getting started. You’ll be among the first to see what
              we’re building.
            </Text>

            <Text style={signature}>
              — Al Zahwi
              <br />
              <span style={role}>Founder, Vrebi</span>
            </Text>
          </Section>

          <Text style={footer}>
            © {new Date().getFullYear()} Vrebi · AI for the life you’re building
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#050505",
  margin: "0",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
};

const container = {
  maxWidth: "620px",
  margin: "0 auto",
  padding: "48px 20px",
};

const brand = {
  textAlign: "center" as const,
  marginBottom: "28px",
};

const logo = {
  color: "#ffffff",
  fontSize: "26px",
  fontWeight: "800",
  letterSpacing: "-1px",
  margin: "0",
};

const card = {
  backgroundColor: "#0d0d0f",
  border: "1px solid #27272a",
  borderRadius: "24px",
  padding: "48px 40px",
};

const eyebrow = {
  color: "#c084fc",
  fontSize: "11px",
  fontWeight: "700",
  letterSpacing: "2px",
  margin: "0 0 20px",
};

const heading = {
  color: "#ffffff",
  fontSize: "40px",
  lineHeight: "1.15",
  letterSpacing: "-1.5px",
  margin: "0 0 28px",
};

const lead = {
  color: "#ffffff",
  fontSize: "19px",
  fontWeight: "600",
  lineHeight: "1.6",
};

const paragraph = {
  color: "#b4b4bd",
  fontSize: "16px",
  lineHeight: "1.75",
  marginBottom: "28px",
};

const quoteBox = {
  backgroundColor: "#17171a",
  border: "1px solid #303036",
  borderRadius: "16px",
  padding: "20px 22px",
  marginBottom: "30px",
};

const quote = {
  color: "#f4f4f5",
  fontSize: "17px",
  fontWeight: "600",
  lineHeight: "1.65",
  margin: "0",
};

const button = {
  backgroundColor: "#9333ea",
  borderRadius: "12px",
  color: "#ffffff",
  display: "block",
  fontSize: "15px",
  fontWeight: "700",
  padding: "15px 24px",
  textAlign: "center" as const,
  textDecoration: "none",
};

const divider = {
  borderColor: "#29292e",
  margin: "34px 0",
};

const benefit = {
  color: "#d4d4d8",
  fontSize: "15px",
  lineHeight: "1.7",
  margin: "6px 0",
};

const closing = {
  color: "#a1a1aa",
  fontSize: "15px",
  lineHeight: "1.7",
};

const signature = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "1.6",
  marginTop: "24px",
};

const role = {
  color: "#71717a",
  fontSize: "14px",
  fontWeight: "400",
};

const footer = {
  color: "#606068",
  fontSize: "12px",
  lineHeight: "1.6",
  textAlign: "center" as const,
  marginTop: "24px",
};