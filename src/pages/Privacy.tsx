import { Link } from 'react-router-dom'

function Privacy() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>

                    {/* Content Card */}
                    <div className="card glass backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 border-white/20 fade-in">
                        <div className="card-header">
                            <h1 className="card-title text-4xl">Privacy Policy</h1>
                            <p className="card-description">Last updated: {new Date().toLocaleDateString()}</p>
                        </div>

                        <div className="card-content prose dark:prose-invert max-w-none">
                            <h2>1. Information We Collect</h2>
                            <p>
                                We collect information that you provide directly to us, including when you create an account, use our services, or communicate with us. This may include your name, email address, and other contact information.
                            </p>

                            <h2>2. How We Use Your Information</h2>
                            <p>
                                We use the information we collect to:
                            </p>
                            <ul>
                                <li>Provide, maintain, and improve our services</li>
                                <li>Process transactions and send related information</li>
                                <li>Send technical notices and support messages</li>
                                <li>Respond to your comments and questions</li>
                                <li>Monitor and analyze trends, usage, and activities</li>
                            </ul>

                            <h2>3. Information Sharing</h2>
                            <p>
                                We do not share your personal information with third parties except as described in this policy. We may share information:
                            </p>
                            <ul>
                                <li>With your consent</li>
                                <li>To comply with legal obligations</li>
                                <li>To protect our rights and prevent fraud</li>
                                <li>With service providers who assist our operations</li>
                            </ul>

                            <h2>4. Data Security</h2>
                            <p>
                                We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
                            </p>

                            <h2>5. Cookies and Tracking</h2>
                            <p>
                                We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings.
                            </p>

                            <h2>6. Your Rights</h2>
                            <p>
                                You have the right to:
                            </p>
                            <ul>
                                <li>Access your personal information</li>
                                <li>Correct inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Object to processing of your data</li>
                                <li>Export your data</li>
                            </ul>

                            <h2>7. Children's Privacy</h2>
                            <p>
                                Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.
                            </p>

                            <h2>8. Changes to This Policy</h2>
                            <p>
                                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                            </p>

                            <h2>9. Contact Us</h2>
                            <p>
                                If you have any questions about this privacy policy, please contact us through our website.
                            </p>
                        </div>

                        <div className="card-footer">
                            <Link to="/" className="btn btn-primary btn-md">
                                Return Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Privacy
