export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - BaeBolo Style */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Find Your Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Match</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          India's most loved college dating app. Connect with verified students from your campus.
        </p>
        
        {/* Stats - BaeBolo Exact */}
        <div className="grid grid-cols-3 gap-8 md:gap-12 mb-20 max-w-4xl mx-auto">
          <div>
            <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">50K+</div>
            <div className="text-lg text-gray-600 font-medium">Students</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">100+</div>
            <div className="text-lg text-gray-600 font-medium">Colleges</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">1M+</div>
            <div className="text-lg text-gray-600 font-medium">Matches</div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
          Join Waitlist
        </button>
      </section>

      {/* Video/Connection Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Your Love Story Starts Here</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            From first swipe to forever - watch how connections turn into something magical
          </p>
          <div className="w-full max-w-4xl mx-auto h-64 md:h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center">
            <p className="text-2xl text-white/80 font-medium">📱 Demo Video Here</p>
          </div>
        </div>
      </section>

      {/* Features Section - BaeBolo Exact */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why CampusLinkAI?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to find your perfect match
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-8 hover:shadow-xl rounded-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">✅</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">College Verified</h3>
            <p className="text-gray-600">Only verified college students. Safe and authentic connections.</p>
          </div>

          <div className="text-center p-8 hover:shadow-xl rounded-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Matching</h3>
            <p className="text-gray-600">AI-powered algorithm finds your perfect match based on interests.</p>
          </div>

          <div className="text-center p-8 hover:shadow-xl rounded-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🏫</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Campus Network</h3>
            <p className="text-gray-600">Connect with students from your college and nearby campuses.</p>
          </div>

          <div className="text-center p-8 hover:shadow-xl rounded-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">❤️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Connections</h3>
            <p className="text-gray-600">Build meaningful relationships with like-minded people.</p>
          </div>

          <div className="text-center p-8 hover:shadow-xl rounded-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Private Messaging</h3>
            <p className="text-gray-600">Secure and private conversations. Your data, your control.</p>
          </div>

          <div className="text-center p-8 hover:shadow-xl rounded-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Matches</h3>
            <p className="text-gray-600">Get matched instantly when mutual interest is detected.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600">Four simple steps to find your perfect match</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 items-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Sign Up</h3>
              <p>Create your profile with college email verification</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Discover</h3>
              <p>Browse verified profiles from your campus</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Match</h3>
              <p>Swipe right on people you like</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">4</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Connect</h3>
              <p>Start chatting and build connections</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 md:px-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl mb-8 opacity-90">Join 50,000+ students already on the waitlist</p>
          <div className="grid md:grid-cols-6 gap-4 max-w-4xl mx-auto mb-12 text-sm">
            <div className="bg-white/20 p-4 rounded-xl">2.5K+ IIT Delhi</div>
            <div className="bg-white/20 p-4 rounded-xl">3.1K+ IIT Bombay</div>
            <div className="bg-white/20 p-4 rounded-xl">5.2K+ DU</div>
            <div className="bg-white/20 p-4 rounded-xl">2.8K+ VIT</div>
            <div className="bg-white/20 p-4 rounded-xl">1.9K+ BITS Pilani</div>
            <div className="bg-white/20 p-4 rounded-xl">2.2K+ NIT</div>
          </div>
          <button className="bg-white text-purple-600 px-12 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
            ✨ Join Waitlist • Free
          </button>
        </div>
      </section>
    </div>
  );
}
