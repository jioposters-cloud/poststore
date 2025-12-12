import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container py-12 max-w-4xl">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground">
              If you require any more information or have any questions about our privacy policy, please feel free to{' '}
              <a href="/contact" className="text-primary hover:underline">Contact Us</a>.
              At STATUS RING Posters, the privacy of our visitors is of extreme importance to us. This privacy policy document outlines the types of personal information received and collected by STATUS RING Posters and how it is used.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Log Files</h2>
              <p className="text-muted-foreground">
                Like many other websites, STATUS RING Posters makes use of log files. The information inside the log files includes internet protocol (IP) addresses, type of browser, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user's movement around the site, and gather demographic information. IP addresses and other such information are not linked to any information that is personally identifiable.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Cookies And Web Beacons</h2>
              <p className="text-muted-foreground">
                STATUS RING Posters does use cookies to store information about visitors preferences, record user-specific information on which pages the user access or visit, customize Web page content based on visitors browser type or other information that the visitor sends via their browser.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">DoubleClick DART Cookie</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Google, as a third party vendor, uses cookies to serve ads on STATUS RING Posters</li>
                <li>Google's use of the DART cookie enables it to serve ads to users based on their visit to STATUS RING Posters and other sites on the Internet</li>
                <li>Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at{' '}
                  <a href="https://google.com/privacy_ads.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://google.com/privacy_ads.html
                  </a>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Google Adsense</h2>
              <p className="text-muted-foreground">
                These third-party ad servers or ad networks use technology to send advertisements and links that appear on STATUS RING Posters directly to your browsers. They automatically receive your IP address when this occurs. Other technologies (such as cookies, JavaScript, or Web Beacons) may also be used by the third-party ad networks to measure the effectiveness of their advertisements and/or to personalize the advertising content that you see.
              </p>
              <p className="text-muted-foreground">
                STATUS RING Posters has no access to or control over these cookies that are used by third-party advertisers. You should consult the respective privacy policies of these third-party ad servers for more detailed information on their practices as well as for instructions about how to opt-out of certain practices. STATUS RING Posters's privacy policy does not apply to, and we cannot control the activities of, such other advertisers or web sites.
              </p>
              <p className="text-muted-foreground">
                If you wish to disable cookies, you may do so through your individual browser options. More detailed information about cookie management with specific web browsers can be found at the browsers' respective websites.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Our Advertising Partners</h2>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Google</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
