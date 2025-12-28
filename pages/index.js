import { useState } from 'react';

export default function Home() {
  const [currentCard, setCurrentCard] = useState(0);
  const profiles = [
    { 
      id: 1, 
      name: "Priya Sharma", 
      college: "GNI", 
      major: "CSE '27", 
      bio: "Loves hackathons & coffee ☕",
      photo: "https://i.pravatar.cc/400?img=1"
    },
    { 
      id: 2, 
      name: "Rahul Verma", 
      college: "DTU", 
      major: "CSE '26", 
      bio: "Web Dev | Cricket fan 🏏",
      photo: "https://i.pravatar.cc/400?img=2"
    },
    { 
      id: 3, 
      name: "Anika Patel", 
      college: "GNI", 
      major: "AI/ML '27", 
      bio: "PyTorch projects & dance 💃",
      photo: "https://i.pravatar.cc/400?img=3"
    }
  ];

  const swipeLeft = () => {
    if (currentCard < profiles.length - 1) {
      setCurrentCard(currentCard + 1);
    }
  };

  const swipeRight = () => {
    alert(`Matched with ${profiles[currentCard].name}! 🎉 Start chatting?`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex flex-col items-center justify-center p-4">
      <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md shadow-2xl border border-white/30">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-2">
            CampusLinkAI
          </h1>
          <p className="text-white/90 text-lg font-medium">Verified college connections ✨</p>
          <p className="text-white/70 text-sm mt-1">Swipe to connect with campus peers</p>
        </div>

        {/* Profile Card */}
        <div className="relative h-80 mb-8 rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <img 
            src={profiles[currentCard]?.photo} 
            className="w-full h-full object-cover" 
            alt="Profile" 
          />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
              <span className="text-green-400 text-sm font-medium">Verified Student</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">{profiles[currentCard]?.name}</h2>
            <p className="text-white/90 text-lg mb-2">
              {profiles[currentCard]?.college} • {profiles[currentCard]?.major}
            </p>
            <p className="text-white/80 text-base">{profiles[currentCard]?.bio}</p>
          </div>
        </div>

        {/* Swipe Buttons */}
        <div className="flex gap-6 justify-center mb-6">
          <button 
            onClick={swipeLeft}
            className="w-20 h-20 bg-red-500/80 hover:bg-red-600/90 rounded-2xl text-white font-black text-2xl shadow-2xl transform hover:scale-110 active:scale-95 transition-all duration-200"
          >
            ✕
          </button>
          <button 
            onClick={swipeRight}
            className="w-24 h-24 bg-green-500/90 hover:bg-green-600 rounded-2xl text-white font-black text-3xl shadow-2xl transform hover:scale-110 active:scale-95 transition-all duration-200 ring-4 ring-green-400/30"
          >
            ❤️
          </button>
        </div>

        {/* Progress */}
        <div className="text-center">
          <p className="text-white/70 text-sm">
            {currentCard + 1} / {profiles.length} profiles today
          </p>
        </div>
      </div>
    </div>
  );
}
