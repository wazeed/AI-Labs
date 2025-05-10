import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | AI Labs',
  description: 'Terms of Service for AI Labs.',
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-16 prose prose-lg max-w-4xl dark:prose-invert">
      <h1>Terms of Service</h1>
      <p className="lead">Last updated: May 10, 2025</p>

      <p>
        Please read these Terms of Service ("Terms", "Terms of Service")
        carefully before using the ailabs.com website (the "Service") operated by
        AI Labs ("us", "we", or "our").
      </p>

      <p>
        Your access to and use of the Service is conditioned on your acceptance of
        and compliance with these Terms. These Terms apply to all visitors, users,
        and others who access or use the Service.
      </p>
      <p>
        By accessing or using the Service you agree to be bound by these Terms. If you disagree
        with any part of the terms then you may not access the Service.
      </p>

      <h2>1. Accounts</h2>
      <p>
        When you create an account with us, you must provide us information that is accurate, complete,
        and current at all times. Failure to do so constitutes a breach of the Terms, which may result
        in immediate termination of your account on our Service.
      </p>
      <p>
        You are responsible for safeguarding the password that you use to access the Service and for any
        activities or actions under your password, whether your password is with our Service or a
        third-party service. You agree not to disclose your password to any third party. You must
        notify us immediately upon becoming aware of any breach of security or unauthorized use of
        your account.
      </p>

      <h2>2. Intellectual Property</h2>
      <p>
        The Service and its original content, features, and functionality are and
        will remain the exclusive property of AI Labs and its licensors. The Service is protected by
        copyright, trademark, and other laws of both the United States and
        foreign countries. Our trademarks and trade dress may not be used in
        connection with any product or service without the prior written consent of AI Labs.
      </p>

      <h2>3. Links To Other Web Sites</h2>
      <p>
        Our Service may contain links to third-party web sites or services that are
        not owned or controlled by AI Labs.
      </p>
      <p>
        AI Labs has no control over, and assumes no responsibility for, the content,
        privacy policies, or practices of any third-party web sites or services.
        You further acknowledge and agree that AI Labs shall not be responsible or liable, directly
        or indirectly, for any damage or loss caused or alleged to be caused by or
        in connection with use of or reliance on any such content, goods or
        services available on or through any such web sites or services.
      </p>
      <p>
        We strongly advise you to read the terms and conditions and privacy policies of any
        third-party web sites or services that you visit.
      </p>

      <h2>4. Termination</h2>
      <p>
        We may terminate or suspend access to our Service immediately, without prior notice or
        liability, for any reason whatsoever, including without limitation if you breach the Terms.
      </p>
      <p>
        All provisions of the Terms which by their nature should survive termination shall survive
        termination, including, without limitation, ownership provisions, warranty disclaimers,
        indemnity and limitations of liability.
      </p>
      <p>
        We may terminate or suspend your account immediately, without prior notice or liability,
        for any reason whatsoever, including without limitation if you breach the Terms. Upon
        termination, your right to use the Service will immediately cease. If you wish to terminate
        your account, you may simply discontinue using the Service.
      </p>

      <h2>5. Limitation Of Liability</h2>
      <p>
        In no event shall AI Labs, nor its directors, employees, partners, agents,
        suppliers, or affiliates, be liable for any indirect, incidental, special,
        consequential or punitive damages, including without limitation, loss of
        profits, data, use, goodwill, or other intangible losses, resulting from
        (i) your access to or use of or inability to access or use the Service;
        (ii) any conduct or content of any third party on the Service; (iii) any
        content obtained from the Service; and (iv) unauthorized access, use or
        alteration of your transmissions or content, whether based on warranty,
        contract, tort (including negligence) or any other legal theory, whether
        or not we have been informed of the possibility of such damage, and even
        if a remedy set forth herein is found to have failed of its essential
        purpose.
      </p>

      <h2>6. Disclaimer</h2>
      <p>
        Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and
        "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether
        express or implied, including, but not limited to, implied warranties of merchantability,
        fitness for a particular purpose, non-infringement or course of performance.
      </p>
      <p>
        AI Labs its subsidiaries, affiliates, and its licensors do not warrant that
        a) the Service will function uninterrupted, secure or available at any
        particular time or location; b) any errors or defects will be corrected;
        c) the Service is free of viruses or other harmful components; or d) the
        results of using the Service will meet your requirements.
      </p>
      
      <h2>7. Governing Law</h2>
      <p>
        These Terms shall be governed and construed in accordance with the laws of the State of
        California, United States, without regard to its conflict of law provisions.
      </p>
      <p>
        Our failure to enforce any right or provision of these Terms will not be considered a
        waiver of those rights. If any provision of these Terms is held to be invalid or
        unenforceable by a court, the remaining provisions of these Terms will remain in effect.
        These Terms constitute the entire agreement between us regarding our Service, and supersede
        and replace any prior agreements we might have between us regarding the Service.
      </p>

      <h2>8. Changes</h2>
      <p>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
        If a revision is material we will try to provide at least 30 days notice prior to any new
        terms taking effect. What constitutes a material change will be determined at our sole
        discretion.
      </p>
      <p>
        By continuing to access or use our Service after those revisions become effective, you agree
        to be bound by the revised terms. If you do not agree to the new terms, please stop using
        the Service.
      </p>

      <h2>9. Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us:</p>
      <ul>
        <li>By email: <a href="mailto:legal@ailabs.com">legal@ailabs.com</a></li>
        <li>By visiting this page on our website: <a href="https://ailabs.com/contact">ailabs.com/contact</a></li>
      </ul>
    </div>
  );
}
