import React from 'react'

const UploadSection = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <h2 className="text-5xl font-bold text-center mb-16 reveal-on-scroll">
            Revolutionizing Document Analysis with
            <span className="text-primary block mt-2">AI-Powered Intelligence</span>
          </h2>

          {/* Mission */}
          <div className="about-card">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transform the way organizations handle documents, making information accessibility seamless and intelligent.
              We believe in democratizing document intelligence through cutting-edge AI technology.
            </p>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-3xl font-bold text-primary mb-2">90%</h4>
              <p className="text-gray-600">Faster Processing</p>
            </div>
            <div className="stat-card">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Real-time Results</h3>
              <p className="text-gray-600">Get instant answers to your document queries</p>
            </div>
            <div className="stat-card">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="text-3xl font-bold text-primary mb-2">65%</h4>
              <p className="text-gray-600">Cost Reduction</p>
            </div>
          </div>

          {/* Features */}
          <div className="features-grid">
            <div className="feature-card">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600">Advanced machine learning algorithms for precise document processing</p>
            </div>
            <div className="feature-card">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">Smart Search</h3>
              <p className="text-gray-600">Context-aware document search with natural language understanding</p>
            </div>
            <div className="feature-card">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Secure Processing</h3>
              <p className="text-gray-600">Enterprise-grade security with end-to-end encryption</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="cta-section">
            <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Document Workflow?</h3>
            <p className="text-xl text-gray-600 mb-8">Join thousands of organizations that trust our solution</p>
            <button
              onClick={() => scrollToSection('upload-section')}
              className="try-now-button"
            >
              Try It Now
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default UploadSection