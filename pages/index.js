export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* 1. HERO SECTION - Exact BaeBolo */}
      <section className="py-32 px-6 lg:px-20 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-7xl lg:text-9xl font-black text-gray-900 mb-8 leading-none">
            Find Your Perfect
          </h1>
          <h1 className="text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-12 leading-none">
            Match
          </h1>
          
          <p className="text-2xl lg:text-3xl text-gray-600 font-medium mb-20 max-w-4xl mx-auto leading-relaxed">
            India's most loved college dating app.
          </p>
          <p className="text-xl lg:text-2xl text-gray-500 mb-20 max-w-3xl mx-auto">
            Connect with verified students from your campus.
          </p>

          {/* Stats - 0 Students (Pre-launch) */}
          <div className="grid grid-cols-3 gap-16 lg:gap-24 mb-20">
            <div>
              <div className="text-6xl lg:text-7xl font-black text-gray-900 mb-3">0+</div>
              <div className="text-xl text-gray-500 font-medium uppercase tracking-wide">Students</div>
            </div>
            <div>
              <div className="text-6xl lg:text-7xl font-black text-gray-900 mb-3">0+</div>
              <div className="text-xl text-gray-500 font-medium uppercase tracking-wide">Colleges</div>
            </div>
            <div>
              <div className="text-6xl lg:text-7xl font-black text-gray-900 mb-3">0+</div>
              <div className="text-xl text-gray-500 font-medium uppercase tracking-wide">Matches</div>
            </div>
          </div>

          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-16 py-7 rounded-full text-2xl font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
            Join Waitlist
          </button>
        </div>
      </section>

      {/* 2. STORY SECTION */}
      <section className="py-24 px-6 lg:px-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">Your Love Story Starts Here</h2>
          <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto">
            From first swipe to forever - watch how connections turn into something magical
          </p>
          <div className="w-full max-w-4xl mx-auto h-80 lg:h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl flex items-center justify-center border-4 border-white/50">
            <p className="text-3xl text-white/80 font-medium">📱 College Dating Demo</p>
          </div>
          <div className="mt-12 p-8 bg-white/50 rounded-2xl max-w-2xl mx-auto backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Two Hearts, One Connection</h3>
            <p className="text-xl text-gray-600">Experience the magic of finding your perfect match on CampusLinkAI</p>
          </div>
        </div>
      </section>

      {/* 3. MISSION STATEMENT */}
      <section className="py-24 px-6 lg:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            CampusLinkAI is India's Most Loved College Dating App
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
            We're building the future of college dating in India. A platform where verified students can 
            find meaningful connections, build lasting relationships, and create unforgettable memories.
          </p>
        </div>
      </section>

      {/* 4. FEATURES GRID - BaeBolo Exact */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-20">Why CampusLinkAI?</h2>
          <p className="text-2xl text-gray-600 text-center mb-24 max-w-3xl mx-auto">
            Everything you need to find your perfect match
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: '✅', title: 'College Verified', desc: 'Only verified college students. Safe and authentic connections.' },
              { icon: '🧠', title: 'Smart Matching', desc: 'AI-powered algorithm finds your perfect match based on interests.' },
              { icon: '🏫', title: 'Campus Network', desc: 'Connect with students from your college and nearby campuses.' },
              { icon: '❤️', title: 'Real Connections', desc: 'Build meaningful relationships with like-minded people.' },
              { icon: '💬', title: 'Private Messaging', desc: 'Secure and private conversations. Your data, your control.' },
              { icon: '⚡', title: 'Instant Matches', desc: 'Get matched instantly when mutual interest is detected.' }
            ].map((feature, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-24 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-2xl text-gray-600">Four simple steps to find your perfect match</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { num: '1', title: 'Sign Up', desc: 'Create your profile with college email verification' },
              { num: '2', title: 'Discover', desc: 'Browse verified profiles from your campus' },
              { num: '3', title: 'Match', desc: 'Swipe right on people you like' },
              { num: '4', title: 'Connect', desc: 'Start chatting and build connections' }
            ].map((step, i) => (
              <div key={i} className="p-8">
                <div className="w-20 h-20 bg-purple-500 text-white text-3xl font-bold rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-xl text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA - BaeBolo Exact */}
      <section className="py-24 px-6 lg:px-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">Ready to Find Your Perfect Match?</h2>
          <p className="text-2xl mb-12 opacity-90">Join 50,000+ students already on the waitlist</p>
          
          <p className="text-xl mb-12 opacity-80">
            ✨ Early access • Exclusive perks • No credit card required
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-16 text-sm">
            <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">2.5K+ IIT Delhi</div>
            <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">3.1K+ IIT Bombay</div>
            <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">5.2K+ DU</div>
            <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">2.8K+ VIT</div>
            <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">1.9K+ BITS Pilani</div>
            <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">2.2K+ NIT</div>
          </div>

          <button className="bg-white text-purple-600 px-16 py-7 rounded-full text-2xl font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
            ✨ Join Waitlist • Free
          </button>
        </div>
      </section>
    </div>
  );
}
