export default function Home() {
  return (
    <div className="font-sans antialiased">
      {/* BaeBolo Hero - EXACT */}
      <section className="pt-32 pb-24 px-6 lg:px-20 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-none mb-8">
            Find Your Perfect
            <br />
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
              Match
            </span>
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-600 font-medium mb-20 max-w-4xl mx-auto leading-relaxed">
            India's most loved college dating app.
            <br className="hidden lg:block" />
            <span className="text-lg lg:text-xl block mt-4">Connect with verified students from your campus.</span>
          </p>
          
          {/* Stats - BaeBolo Exact Layout */}
          <div className="grid grid-cols-3 gap-16 lg:gap-24 mb-24 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-black text-gray-900 mb-2">50K+</div>
              <div className="text-xl text-gray-500 font-medium tracking-wide">Students</div>
            </div>
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-black text-gray-900 mb-2">100+</div>
              <div className="text-xl text-gray-500 font-medium tracking-wide">Colleges</div>
            </div>
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-black text-gray-900 mb-2">1M+</div>
              <div className="text-xl text-gray-500 font-medium tracking-wide">Matches</div>
            </div>
          </div>

          <button className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white px-16 py-7 rounded-full text-2xl font-bold shadow-2xl hover:shadow-3xl hover:scale-[1.02] transform transition-all duration-300 mx-auto block">
            Join Waitlist
          </button>
        </div>
      </section>

      {/* Love Story Section */}
      <section className="py-32 px-6 lg:px-20 bg-gradient-to-br from-[#8B5CF6]/5 to-[#EC4899]/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">Your Love Story Starts Here</h2>
          <p className="text-2xl text-gray-600 font-medium mb-16 max-w-3xl mx-auto">
            From first swipe to forever - watch how connections turn into something magical
          </p>
          <div className="w-full max-w-5xl mx-auto h-80 lg:h-[500px] bg-gradient-to-r from-[#8B5CF6]/20 to-[#EC4899]/20 rounded-3xl flex items-center justify-center border-4 border-white/50 shadow-2xl">
            <div className="text-3xl text-white/70">📱 Demo Video Placeholder</div>
          </div>
        </div>
      </section>

      {/* Features - BaeBolo Cards */}
      <section className="py-32 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">Why CampusLinkAI?</h2>
            <p className="text-2xl text-gray-600 font-medium max-w-2xl mx-auto">
              Everything you need to find your perfect match
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: '✅', title: 'College Verified', desc: 'Only verified college students. Safe and authentic connections.' },
              { icon: '🧠', title: 'Smart Matching', desc: 'AI-powered algorithm finds your perfect match based on interests.' },
              { icon: '🏫', title: 'Campus Network', desc: 'Connect with students from your college and nearby campuses.' },
              { icon: '❤️', title: 'Real Connections', desc: 'Build meaningful relationships with like-minded people.' },
              { icon: '💬', title: 'Private Messaging', desc: 'Secure and private conversations. Your data, your control.' },
              { icon: '⚡', title: 'Instant Matches', desc: 'Get matched instantly when mutual interest is detected.' }
            ].map((feature, i) => (
              <div key={i} className="group p-10 rounded-3xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border border-gray-100 hover:border-transparent bg-white/50 backdrop-blur-sm">
                <div className="w-24 h-24 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-3xl flex items-center justify-center mx-auto mb-8 text-4xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-6 group-hover:text-[#8B5CF6] transition-colors">{feature.title}</h3>
                <p className="text-xl text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">How It Works</h2>
            <p className="text-2xl text-gray-600 font-medium">Four simple steps to find your perfect match</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12 lg:gap-16">
            {[
              { num: '1', title: 'Sign Up', desc: 'Create your profile with college email verification' },
              { num: '2', title: 'Discover', desc: 'Browse verified profiles from your campus' },
              { num: '3', title: 'Match', desc: 'Swipe right on people you like' },
              { num: '4', title: 'Connect', desc: 'Start chatting and build connections' }
            ].map((step, i) => (
              <div key={i} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-3xl font-black rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl">
                  {step.num}
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-6">{step.title}</h3>
                <p className="text-xl text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - BaeBolo Exact */}
      <section className="py-32 px-6 lg:px-20 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899]">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-5xl lg:text-6xl font-black mb-8">Ready to Find Your Perfect Match?</h2>
          <p className="text-2xl mb-12 opacity-90">Join 50,000+ students already on the waitlist</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-16">
            {['2.5K+ IIT Delhi', '3.1K+ IIT Bombay', '5.2K+ DU', '2.8K+ VIT', '1.9K+ BITS Pilani', '2.2K+ NIT'].map((college, i) => (
              <div key={i} className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-2xl text-lg font-semibold hover:bg-white/30 transition-all duration-300">
                {college}
              </div>
            ))}
          </div>
          
          <button className="bg-white text-[#8B5CF6] px-16 py-7 rounded-full text-2xl font-black shadow-2xl hover:shadow-3xl hover:scale-[1.02] transform transition-all duration-300">
            ✨ Join Waitlist • Free
          </button>
        </div>
      </section>
    </div>
  );
}

