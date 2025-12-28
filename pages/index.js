import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="font-['Inter'] antialiased bg-white overflow-x-hidden">
      {/* BaeBolo Hero - PERFECT CLONE */}
      <section className="pt-[120px] pb-24 px-6 lg:px-20 relative">
        <div className="max-w-7xl mx-auto text-center">
          {/* Hero Title - Exact BaeBolo */}
          <div className="mb-12">
            <h1 className="text-[80px] lg:text-[120px] xl:text-[140px] font-black text-gray-900 leading-[0.85] tracking-[-0.04em] mb-8">
              Find Your Perfect
            </h1>
            <h1 className="text-[80px] lg:text-[120px] xl:text-[140px] font-black bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent leading-[0.85] tracking-[-0.04em]">
              Match
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-[28px] lg:text-[36px] text-gray-600 font-medium mb-20 max-w-4xl mx-auto leading-[1.3] px-4">
            India's most loved college dating app.
          </p>
          <p className="text-[20px] lg:text-[24px] text-gray-500 font-medium mb-20 max-w-3xl mx-auto">
            Connect with verified students from your campus.
          </p>

          {/* Stats - BaeBolo Exact */}
          <div className="grid grid-cols-3 gap-20 lg:gap-32 mb-24 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-[72px] lg:text-[88px] font-black text-gray-900 mb-3">50K+</div>
              <div className="text-2xl text-gray-500 font-medium tracking-wider uppercase">Students</div>
            </div>
            <div className="text-center">
              <div className="text-[72px] lg:text-[88px] font-black text-gray-900 mb-3">100+</div>
              <div className="text-2xl text-gray-500 font-medium tracking-wider uppercase">Colleges</div>
            </div>
            <div className="text-center">
              <div className="text-[72px] lg:text-[88px] font-black text-gray-900 mb-3">1M+</div>
              <div className="text-2xl text-gray-500 font-medium tracking-wider uppercase">Matches</div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white px-20 py-9 rounded-[50px] text-3xl font-black shadow-[0_35px_60px_-15px_rgba(139,92,246,0.4)] hover:shadow-[0_45px_80px_-20px_rgba(139,92,246,0.5)] hover:-translate-y-2 transform transition-all duration-500 mx-auto block">
            Join Waitlist
          </button>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-32 px-6 lg:px-20 bg-gradient-to-br from-[#8B5CF6]/3 to-[#EC4899]/3">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[64px] lg:text-[80px] font-black text-gray-900 mb-12 leading-[0.9]">Your Love Story Starts Here</h2>
          <p className="text-2xl lg:text-3xl text-gray-600 font-medium mb-20 max-w-4xl mx-auto">
            From first swipe to forever - watch how connections turn into something magical
          </p>
          <div className="max-w-[800px] mx-auto h-[500px] bg-gradient-to-r from-[#8B5CF6]/30 to-[#EC4899]/30 rounded-[40px] flex items-center justify-center border-8 border-white/40 shadow-2xl backdrop-blur-xl">
            <div className="text-4xl text-white/80 font-medium">🎥 BaeBolo Demo Video</div>
          </div>
        </div>
      </section>

      {/* Features - BaeBolo Cards */}
      <section className="py-32 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-[64px] lg:text-[80px] font-black text-gray-900 mb-8 leading-[0.9]">Why CampusLinkAI?</h2>
            <p className="text-3xl text-gray-600 font-medium max-w-3xl mx-auto">
              Everything you need to find your perfect match
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: '✅', title: 'College Verified', desc: 'Only verified college students. Safe and authentic connections.' },
              { icon: '🧠', title: 'Smart Matching', desc: 'AI-powered algorithm finds your perfect match based on interests.' },
              { icon: '🏫', title: 'Campus Network', desc: 'Connect with students from your college and nearby campuses.' },
              { icon: '❤️', title: 'Real Connections', desc: 'Build meaningful relationships with like-minded people.' },
              { icon: '💬', title: 'Private Messaging', desc: 'Secure and private conversations. Your data, your control.' },
              { icon: '⚡', title: 'Instant Matches', desc: 'Get matched instantly when mutual interest is detected.' }
            ].map((feature, i) => (
              <div key={i} className="group p-12 rounded-[32px] hover:shadow-2xl hover:-translate-y-8 transition-all duration-700 border border-gray-100/50 hover:border-[#8B5CF6]/30 bg-white/70 backdrop-blur-xl cursor-pointer">
                <div className="w-28 h-28 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-[24px] flex items-center justify-center mx-auto mb-12 text-5xl group-hover:scale-110 transition-all duration-500 shadow-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-4xl font-black text-gray-900 mb-8 group-hover:text-[#8B5CF6] transition-all duration-500">{feature.title}</h3>
                <p className="text-2xl text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 px-6 lg:px-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-[64px] lg:text-[80px] font-black text-gray-900 mb-8 leading-[0.9]">How It Works</h2>
            <p className="text-3xl text-gray-600 font-medium">Four simple steps to find your perfect match</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-16">
            {[
              { num: '1', title: 'Sign Up', desc: 'Create your profile with college email verification' },
              { num: '2', title: 'Discover', desc: 'Browse verified profiles from your campus' },
              { num: '3', title: 'Match', desc: 'Swipe right on people you like' },
              { num: '4', title: 'Connect', desc: 'Start chatting and build connections' }
            ].map((step, i) => (
              <div key={i} className="group text-center hover:scale-105 transition-all duration-500">
                <div className="w-24 h-24 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white text-4xl font-black rounded-[24px] flex items-center justify-center mx-auto mb-12 shadow-2xl group-hover:shadow-3xl group-hover:rotate-12 transition-all duration-700">
                  {step.num}
                </div>
                <h3 className="text-4xl font-black text-gray-900 mb-8">{step.title}</h3>
                <p className="text-2xl text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - BaeBolo Exact */}
      <section className="py-32 px-6 lg:px-20 bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#EC4899]">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-[64px] lg:text-[80px] font-black mb-12 leading-[0.9]">Ready to Find Your Perfect Match?</h2>
          <p className="text-3xl mb-16 opacity-95">Join 50,000+ students already on the waitlist</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto mb-20">
            {['2.5K+ IIT Delhi', '3.1K+ IIT Bombay', '5.2K+ DU', '2.8K+ VIT', '1.9K+ BITS Pilani', '2.2K+ NIT'].map((college, i) => (
              <div key={i} className="bg-white/20 backdrop-blur-xl px-8 py-6 rounded-[24px] text-2xl font-bold hover:bg-white/30 hover:scale-105 transition-all duration-300 border border-white/30">
                {college}
              </div>
            ))}
          </div>
          
          <button className="bg-white text-[#8B5CF6] px-20 py-9 rounded-[50px] text-3xl font-black shadow-[0_35px_60px_-15px_rgba(255,255,255,0.4)] hover:shadow-[0_45px_80px_-20px_rgba(255,255,255,0.5)] hover:scale-[1.02] transform transition-all duration-500">
            ✨ Join Waitlist • Free
          </button>
        </div>
      </section>
    </div>
  );
}


