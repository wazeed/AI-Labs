import { Metadata } from 'next';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | AI Labs',
  description: 'Privacy Policy for AI Labs.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 max-w-4xl">
        <header className="mb-12 text-center">
          <ShieldCheck className="mx-auto h-16 w-16 text-neutral-500 dark:text-neutral-400 mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-600 via-black to-neutral-800 dark:from-neutral-400 dark:via-white dark:to-neutral-200 pb-2">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
            Last updated: May 10, 2025
          </p>
        </header>

        <article 
          className="prose prose-neutral lg:prose-lg dark:prose-invert max-w-none 
                     prose-headings:font-semibold prose-headings:text-neutral-800 dark:prose-headings:text-neutral-200 
                     prose-h1:text-3xl sm:prose-h1:text-4xl prose-h1:mb-8 
                     prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-6 prose-h2:border-b prose-h2:pb-2 prose-h2:border-neutral-200 dark:prose-h2:border-neutral-700
                     prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                     prose-h4:text-lg sm:prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
                     prose-p:text-neutral-700 dark:prose-p:text-neutral-300 prose-p:leading-relaxed
                     prose-a:text-neutral-700 dark:prose-a:text-neutral-300 prose-a:font-medium hover:prose-a:text-black dark:hover:prose-a:text-white hover:prose-a:underline
                     prose-strong:text-neutral-800 dark:prose-strong:text-neutral-200
                     prose-ul:list-disc prose-ul:pl-6 prose-li:text-neutral-700 dark:prose-li:text-neutral-300 prose-li:mb-1
                     prose-ol:list-decimal prose-ol:pl-6 prose-li:text-neutral-700 dark:prose-li:text-neutral-300 prose-li:mb-1
                     prose-blockquote:border-l-4 prose-blockquote:border-neutral-400 dark:prose-blockquote:border-neutral-600 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-neutral-600 dark:prose-blockquote:text-neutral-400"
        >
          <p className="lead text-lg text-neutral-600 dark:text-neutral-400">
            AI Labs ("us", "we", or "our") operates the ailabs.com website (the "Service").
          </p>

          <p>
            This page informs you of our policies regarding the collection, use, and
            disclosure of personal data when you use our Service and the choices you
            have associated with that data. Our Privacy Policy for AI Labs is managed with the help of a privacy policy generator.
          </p>

          <p>
            We use your data to provide and improve the Service. By using the Service,
            you agree to the collection and use of information in accordance with this
            policy. Unless otherwise defined in this Privacy Policy, terms used in this
            Privacy Policy have the same meanings as in our Terms and Conditions,
            accessible from ailabs.com/terms.
          </p>

          <h2>Information Collection And Use</h2>
          <p>
            We collect several different types of information for various purposes to
            provide and improve our Service to you.
          </p>

          <h3>Types of Data Collected</h3>
          <h4>Personal Data</h4>
          <p>
            While using our Service, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or identify
            you ("Personal Data"). Personally identifiable information may include, but
            is not limited to:
          </p>
          <ul>
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, State, Province, ZIP/Postal code, City</li>
            <li>Cookies and Usage Data</li>
          </ul>

          <h4>Usage Data</h4>
          <p>
            We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
          </p>

          <h4>Tracking & Cookies Data</h4>
          <p>
            We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
          </p>
          <p>
            Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
          </p>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
          </p>

          <h2>Use of Data</h2>
          <p>AI Labs uses the collected data for various purposes:</p>
          <ul>
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our Service</li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
            <li>To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information.</li>
          </ul>

          <h2>Transfer Of Data</h2>
          <p>
            Your information, including Personal Data, may be transferred to — and maintained on — computers
            located outside of your state, province, country or other governmental jurisdiction where the data
            protection laws may differ from those from your jurisdiction.
          </p>
          <p>
            If you are located outside United States and choose to provide information to us, please note that
            we transfer the data, including Personal Data, to United States and process it there.
          </p>
          <p>
            Your consent to this Privacy Policy followed by your submission of such information represents your
            agreement to that transfer.
          </p>
          <p>
            AI Labs will take all steps reasonably necessary to ensure that your data is treated
            securely and in accordance with this Privacy Policy and no transfer of your
            Personal Data will take place to an organization or a country unless there
            are adequate controls in place including the security of your data and
            other personal information.
          </p>

          <h2>Disclosure Of Data</h2>
          <h3>Legal Requirements</h3>
          <p>
            AI Labs may disclose your Personal Data in the good faith belief that such action is
            necessary to:
          </p>
          <ul>
            <li>To comply with a legal obligation</li>
            <li>To protect and defend the rights or property of AI Labs</li>
            <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
            <li>To protect the personal safety of users of the Service or the public</li>
            <li>To protect against legal liability</li>
          </ul>

          <h2>Security of Data</h2>
          <p>
            The security of your data is important to us but remember that no method of transmission over the
            Internet or method of electronic storage is 100% secure. While we strive to use commercially
            acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>

          <h2>Service Providers</h2>
          <p>
            We may employ third party companies and individuals to facilitate our Service ("Service Providers"),
            to provide the Service on our behalf, to perform Service-related services or to assist us in
            analyzing how our Service is used. These third parties have access to your Personal Data only to
            perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>

          <h2>Links to Other Sites</h2>
          <p>
            Our Service may contain links to other sites that are not operated by us. If you click on a third
            party link, you will be directed to that third party's site. We strongly advise you to review the
            Privacy Policy of every site you visit. We have no control over and assume no responsibility for
            the content, privacy policies or practices of any third party sites or services.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect
            personally identifiable information from anyone under the age of 18. If you are a parent or
            guardian and you are aware that your Children has provided us with Personal Data, please contact us.
            If we become aware that we have collected Personal Data from children without verification of
            parental consent, we take steps to remove that information from our servers.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting
            the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on
            our Service, prior to the change becoming effective and update the "last updated" date at the top
            of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.
            Changes to this Privacy Policy are effective when they are posted on this page.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul>
            <li>By email: <a href="mailto:privacy@ailabs.com">privacy@ailabs.com</a></li>
            <li>By visiting this page on our website: <a href="https://ailabs.com/contact">ailabs.com/contact</a></li>
          </ul>
        </article>
      </div>
    </div>
  );
}
