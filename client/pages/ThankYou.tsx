import Layout from "@/components/Layout";

export default function ThankYou() {
  return (
    <Layout>
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Thank You!</h1>
          <p className="text-lg text-muted-foreground mb-10">
            Your submission was received successfully. Well be in touch soon.
          </p>
          <a
            href="/"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Back to Home
          </a>
        </div>
      </section>
    </Layout>
  );
}
