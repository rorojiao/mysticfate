const SIGNS = [
  { name: 'Aries', icon: '♈', dates: 'Mar 21 - Apr 19', element: 'Fire' },
  { name: 'Taurus', icon: '♉', dates: 'Apr 20 - May 20', element: 'Earth' },
  { name: 'Gemini', icon: '♊', dates: 'May 21 - Jun 20', element: 'Air' },
  { name: 'Cancer', icon: '♋', dates: 'Jun 21 - Jul 22', element: 'Water' },
  { name: 'Leo', icon: '♌', dates: 'Jul 23 - Aug 22', element: 'Fire' },
  { name: 'Virgo', icon: '♍', dates: 'Aug 23 - Sep 22', element: 'Earth' },
  { name: 'Libra', icon: '♎', dates: 'Sep 23 - Oct 22', element: 'Air' },
  { name: 'Scorpio', icon: '♏', dates: 'Oct 23 - Nov 21', element: 'Water' },
  { name: 'Sagittarius', icon: '♐', dates: 'Nov 22 - Dec 21', element: 'Fire' },
  { name: 'Capricorn', icon: '♑', dates: 'Dec 22 - Jan 19', element: 'Earth' },
  { name: 'Aquarius', icon: '♒', dates: 'Jan 20 - Feb 18', element: 'Air' },
  { name: 'Pisces', icon: '♓', dates: 'Feb 19 - Mar 20', element: 'Water' }
];

const HOROSCOPES = {
  Aries: {
    today: {
      love: "Your passionate nature is magnetic today. If you're single, someone might notice your confidence. Partnered Rams should express appreciation — your directness is a strength, but tenderness wins hearts.",
      career: "Bold ideas deserve bold action. The stars favor leadership moves and starting new projects. Don't wait for permission; you rarely need it anyway.",
      health: "Channel that restless energy into movement. A vigorous workout or competitive sport will settle your mind better than meditation today.",
      wealth: "Impulsive spending tempts you, but pause before purchasing. A smarter investment opportunity is coming this week if you stay patient."
    },
    week: {
      love: "The week begins with clarity about what you want from relationships. Mid-week, vulnerability opens doors you thought were closed. By weekend, passion reignites.",
      career: "You're being noticed by people who matter. A conversation early in the week could lead somewhere significant. Stay confident but not combative in negotiations.",
      health: "Your energy runs high Monday through Wednesday, then dips. Honor that rhythm rather than pushing through. Rest is strategic, not weak.",
      wealth: "An unexpected opportunity surfaces. Trust your gut, but get a second opinion before committing resources. Your instincts are sharp, but details matter."
    },
    month: {
      love: "The first half of the month clears out old relationship patterns. What felt complicated becomes simple. New connections form around shared passions, not convenience.",
      career: "A leadership opportunity or project launch defines this month. You'll need to balance your natural boldness with collaboration. Success comes from empowering others, not outrunning them.",
      health: "Prioritize sleep and stress management. Your ambition is admirable, but burnout helps no one. Build sustainable rhythms now.",
      wealth: "Financial gains appear mid-month, likely from a past effort finally paying off. Avoid lifestyle inflation — invest in your future self."
    }
  },
  Taurus: {
    today: {
      love: "Slow and steady wins today. Grand gestures fall flat; small acts of devotion resonate. Show up in the little ways that matter.",
      career: "Your persistence is paying off, even if results aren't visible yet. Keep building. The foundation you're laying now supports next month's breakthrough.",
      health: "Comfort food tempts you, but your body craves nourishment over indulgence. Find the balance — pleasure and wellness aren't enemies.",
      wealth: "A practical approach to money serves you well. Review your budget and savings goals. Security is built one choice at a time."
    },
    week: {
      love: "Early week brings warmth and stability to existing relationships. By Thursday, a conversation clarifies where you stand. Weekend favors sensual connection.",
      career: "Your reliability makes you invaluable this week. Someone will ask you to take on more responsibility — say yes if it aligns with your goals, no if it's just more weight.",
      health: "Grounding activities restore your energy. Gardening, cooking, or time in nature will settle your nervous system better than scrolling.",
      wealth: "An investment or purchase you've been researching becomes clearer. Trust your methodical approach — you've done the homework."
    },
    month: {
      love: "Relationships deepen through consistent presence. If you've been guarding your heart, this month asks you to lower the drawbridge slightly. Intimacy requires risk.",
      career: "A long-term project reaches a milestone. Recognition might be quiet, but it's real. Your value lies in what you build, not what you announce.",
      health: "Your body sends clear signals this month — listen to them. Aches and tension are messengers, not nuisances. Address root causes, not just symptoms.",
      wealth: "Financial stability strengthens. A raise, bonus, or new income stream becomes available. Don't let guilt prevent you from enjoying what you've earned."
    }
  },
  Gemini: {
    today: {
      love: "Conversation flows effortlessly. Whether flirting or deepening existing bonds, your words have unusual power today. Speak your truth with kindness.",
      career: "Multitasking is your superpower, but focus wins today. Pick the most important task and give it your full attention. Quality over quantity.",
      health: "Your mind races faster than usual. Channel that mental energy into learning or creative writing rather than spiraling into worry.",
      wealth: "A financial decision requires research. Your curiosity serves you well — dig into the details before committing."
    },
    week: {
      love: "Early week favors playful connection and witty banter. Mid-week, depth matters more than cleverness. By weekend, you'll know who truly gets you.",
      career: "Communication skills shine brightly. Presentations, pitches, and networking all favor you. Just make sure you're listening as much as you're talking.",
      health: "Restlessness peaks mid-week. Move your body to settle your mind. A long walk while listening to a podcast satisfies both needs.",
      wealth: "Multiple opportunities appear — resist the urge to chase them all. Pick one that genuinely excites you rather than three that mildly interest you."
    },
    month: {
      love: "The first two weeks bring clarity about what you actually want versus what sounds interesting. The second half delivers on that clarity with surprising connections.",
      career: "Networking and collaboration define this month. Your ability to connect disparate ideas and people creates value others can't replicate. Build bridges.",
      health: "Mental health deserves as much attention as physical health. Therapy, journaling, or deep conversations with trusted friends are medicine this month.",
      wealth: "Income diversification opportunities appear. Your adaptability is an asset — explore side projects or skills that monetize your natural talents."
    }
  },
  Cancer: {
    today: {
      love: "Your empathy is a gift, but boundaries matter today. You can care deeply without carrying someone else's emotional weight. Protect your peace.",
      career: "Trust your intuition about a work situation. If something feels off, it probably is. Your sensitivity picks up on what others miss.",
      health: "Emotional eating or numbing behaviors tempt you. Feel the feelings instead of feeding them. What you're avoiding won't disappear — it will wait.",
      wealth: "Security matters more than accumulation. Review your emergency fund and insurance. Peace of mind has value that spreadsheets can't capture."
    },
    week: {
      love: "Vulnerability deepens intimacy early in the week. Someone sees past your shell and loves what they find. Let them in a little more.",
      career: "You're underestimating your impact. A project you completed is making waves you're not aware of yet. Trust that your work matters.",
      health: "Lunar cycles affect your energy — pay attention to the rhythm. Rest when you need it without guilt. Productivity looks different throughout the month.",
      wealth: "An emotional purchase tempts you. Pause and assess: is this genuine self-care or attempting to feel through spending? You know the difference."
    },
    month: {
      love: "The full moon mid-month illuminates relationship truths. What you've been sensing becomes undeniable. Clarity hurts less than prolonged uncertainty.",
      career: "Your nurturing leadership style creates loyalty. People want to work with you because you make them feel valued. That's a rare and powerful skill.",
      health: "Hydration, sleep, and emotional processing form your health trinity this month. Neglect one, and the others suffer. Balance all three.",
      wealth: "Family or home-related expenses arise, but they're investments in stability. Distinguish between necessary spending and emotional spending."
    }
  },
  Leo: {
    today: {
      love: "Your natural warmth draws others close. Shine without dimming your light for anyone's comfort. The right person celebrates your radiance.",
      career: "Leadership opportunities appear. Step into the spotlight — you're ready even if impostor syndrome whispers otherwise. Your confidence inspires others.",
      health: "Playfulness restores your vitality. Find joy in movement rather than grinding through obligation. Dance, play sports, or move in ways that feel fun.",
      wealth: "Generosity is beautiful, but make sure your own cup is full first. You can't pour from an empty financial vessel."
    },
    week: {
      love: "Early week brings admiration and attention — enjoy it. Mid-week asks for substance beneath the sparkle. Weekend rewards authenticity over performance.",
      career: "Your ideas deserve to be heard. Pitch boldly. Even if this specific proposal doesn't land, you're building a reputation as someone with vision.",
      health: "Your heart — both literally and figuratively — needs attention. Cardio exercise and emotional honesty both serve you well this week.",
      wealth: "An opportunity to increase income appears, but it requires visibility or risk. Your courage is your competitive advantage — use it."
    },
    month: {
      love: "Pride has been protecting your heart, but this month asks: from what? Vulnerability isn't weakness; it's the price of real intimacy. Consider paying it.",
      career: "A recognition or promotion you've been working toward materializes. Celebrate fully — you've earned this. Then set your sights on the next horizon.",
      health: "Energy runs high but inconsistently. Listen to your body's requests for rest rather than pushing through every dip. Sustainable success requires recovery.",
      wealth: "Luxury tempts you, and sometimes you deserve it. Just ensure your splurges are conscious choices, not unconscious compensation for something missing."
    }
  },
  Virgo: {
    today: {
      love: "Perfection isn't required for connection. Lower the bar from flawless to genuine, and watch intimacy deepen. You're already enough.",
      career: "Your attention to detail catches what others miss. That vigilance has value — just don't let it spiral into paralysis. Done is better than perfect today.",
      health: "Your nervous system runs hot. Gentle movement, deep breathing, or time in nature will recalibrate you better than powering through.",
      wealth: "Review your financial systems. Small optimizations compound over time. Your analytical mind excels at finding efficiencies others overlook."
    },
    week: {
      love: "Overthinking early in the week creates problems that don't exist. By Thursday, clarity arrives. Weekend favors practical acts of love over grand gestures.",
      career: "Your competence is undeniable, but collaboration matters too. Someone offers help — let them. You don't have to do everything yourself to prove your worth.",
      health: "Digestive issues or tension signal stress. Your body processes emotions physically. Address the source, not just the symptoms.",
      wealth: "An unexpected expense appears, but your planning cushions the blow. This is why you prepare — and proof that your caution serves you."
    },
    month: {
      love: "Critical self-talk has been bleeding into how you relate to others. This month, practice extending to yourself the grace you give freely to everyone else.",
      career: "A major project or responsibility lands on your desk. Your organizational skills shine. Delegate what you can, systematize what you can't.",
      health: "Routine is your friend, but rigidity is not. Build flexibility into your health practices. Missing one workout or eating imperfectly doesn't erase your progress.",
      wealth: "Financial planning brings peace of mind. Whether it's retirement contributions, debt payoff, or savings goals, the systems you build now serve future you."
    }
  },
  Libra: {
    today: {
      love: "Balance in relationships starts with honoring your own needs. What do you want, independent of what keeps the peace? That answer matters.",
      career: "Diplomacy is your strength, but don't smooth over problems that need addressing. Harmony built on avoiding conflict isn't real harmony.",
      health: "Aesthetic pleasure heals you. Beautiful surroundings, art, or music aren't frivolous — they're essential to your wellbeing.",
      wealth: "A partnership or collaboration has financial potential. Ensure agreements are clear and equitable. Your fairness extends to yourself too."
    },
    week: {
      love: "Early week brings romantic energy and new connections. By mid-week, you'll need to choose: depth or variety? Both have appeal, but clarity serves you.",
      career: "Teamwork flows beautifully. Your ability to see multiple perspectives makes you invaluable in group settings. Mediate, don't just people-please.",
      health: "Balance remains elusive. You're either overdoing it or underdoing it. The middle path exists — you just have to commit to finding it.",
      wealth: "An investment in beauty or quality pays dividends in satisfaction. Sometimes spending on what genuinely enhances your life is financially wise."
    },
    month: {
      love: "The first half of the month asks you to stop performing the role of 'the agreeable one.' Who are you when you're not managing others' comfort?",
      career: "A partnership or collaboration reaches a critical juncture. Success requires honest communication about expectations and boundaries. Speak up.",
      health: "Kidney and lower back issues signal imbalance. Hydrate, stretch, and restore equilibrium to your nervous system through rest and pleasure.",
      wealth: "Joint finances require attention. Whether it's a business partner, romantic partner, or shared investment, clarity prevents resentment."
    }
  },
  Scorpio: {
    today: {
      love: "Intensity is your default, but today favors lightness. Not every conversation needs to plumb the depths. Sometimes surface-level ease is enough.",
      career: "Your ability to see what others hide gives you strategic advantage. Use that power wisely — transformation, not manipulation.",
      health: "Emotional release is physical medicine for you. Cry, rage, or express what you've been holding. Your body is asking for catharsis.",
      wealth: "Trust your instincts about a financial opportunity, but verify the details. Your intuition is sharp; just back it up with research."
    },
    week: {
      love: "Jealousy or possessiveness surfaces early in the week. The emotion is valid; the behavior it might trigger is not. Feel it, then choose your response.",
      career: "Power dynamics shift in your favor mid-week. Use the advantage to build something lasting, not settle scores. Your legacy matters more than revenge.",
      health: "Sexual energy and creative energy are linked for you. Channel intensity into creation, movement, or intimacy rather than destructive outlets.",
      wealth: "Debt payoff or financial transformation becomes possible. Your discipline and willingness to face hard truths serve you well."
    },
    month: {
      love: "Control has been masquerading as care. This month challenges you to love without gripping. Real intimacy requires both closeness and freedom.",
      career: "A transformation you've been navigating reaches completion. You're not the same person who started this chapter — own how much you've evolved.",
      health: "Detoxification on all levels — physical, emotional, relational. What you release makes room for what you're becoming.",
      wealth: "Shared resources or investments require honest conversations. Your comfort with uncomfortable topics is an asset. Don't shy away from money talks."
    }
  },
  Sagittarius: {
    today: {
      love: "Freedom and commitment aren't opposites. You can be deeply connected to someone and still maintain your independence. Stop treating them as either/or.",
      career: "Your vision inspires others, but follow-through matters. Big ideas need practical execution. Partner with someone who grounds your fire.",
      health: "Adventure restores your spirit. Even a small exploration — a new trail, cuisine, or perspective — feeds your soul.",
      wealth: "Optimism is beautiful; financial literacy is essential. Dream big, but budget realistically. Both are necessary."
    },
    week: {
      love: "Restlessness doesn't always mean the relationship is wrong. Sometimes you're just bored with routine. Inject novelty before assuming it's over.",
      career: "Learning and teaching opportunities expand. Your knowledge has value — share it. Whether through writing, speaking, or mentoring, educate others.",
      health: "Your hips and thighs need attention. Stretch, strengthen, and honor the body that carries you on all your adventures.",
      wealth: "Travel or education expenses tempt you. Some are investments; others are escapism disguised as growth. Know which is which."
    },
    month: {
      love: "Honesty is your superpower and sometimes your weapon. This month, practice truth with tenderness. You can be direct without being brutal.",
      career: "International opportunities or philosophically aligned work appears. Say yes to what expands your horizons, not just your resume.",
      health: "Overextension catches up with you mid-month. Your body isn't limitless. Rest isn't the opposite of adventure — it's what makes adventure sustainable.",
      wealth: "Generosity is admirable, but ensure you're not sacrificing your own security to fund others' dreams. Your future self deserves your care too."
    }
  },
  Capricorn: {
    today: {
      love: "Vulnerability isn't weakness; it's the foundation of intimacy. Let someone see beneath the competent exterior. You're safe enough to soften.",
      career: "Your discipline is paying off, even if progress feels slow. Trust the process. Empires aren't built in a day, but they are built daily.",
      health: "Rest is productive. Your relentless drive is admirable, but even mountains need geological time to form. Slow down without guilt.",
      wealth: "Long-term thinking serves you well. Retirement planning, investments, or wealth-building strategies deserve attention. Future you will thank present you."
    },
    week: {
      love: "Early week brings practicality to relationships — helpful, but cold if taken too far. By weekend, let warmth soften your edges.",
      career: "A responsibility or promotion you've been working toward arrives. Accept it with confidence. You're ready, even if you don't feel ready.",
      health: "Your bones and joints need care. Calcium, weight-bearing exercise, and gentleness with your body's limits all matter.",
      wealth: "A strategic financial decision requires wisdom, not just ambition. Consult experts. Your humility to seek counsel is strength, not weakness."
    },
    month: {
      love: "Achievement isn't everything. This month challenges you to value presence over productivity in relationships. Your worth isn't tied to what you accomplish.",
      career: "A major milestone or recognition arrives. Celebrate, then recalibrate your goals. What got you here won't get you to the next level. Evolve.",
      health: "Workaholism has been masking something — loneliness, fear, or unworthiness. Address the root. Your health is the foundation of all you build.",
      wealth: "Financial security strengthens, but at what cost? Ensure your pursuit of success isn't sacrificing the life you're supposedly building wealth for."
    }
  },
  Aquarius: {
    today: {
      love: "Emotional distance feels safe, but intimacy requires risk. Someone is offering connection — will you meet them halfway, or observe from afar?",
      career: "Your innovative thinking sets you apart. Don't dumb down your ideas to fit conventional frameworks. The world needs your unique perspective.",
      health: "Your nervous system needs grounding. For all your future focus, your body exists in the present. Arrive here now.",
      wealth: "Unconventional income streams intrigue you. Explore them, but ensure they're viable, not just interesting. Passion and profit can coexist."
    },
    week: {
      love: "Intellectual connection matters, but so does emotional presence. This week asks you to engage your heart, not just your mind.",
      career: "Collaboration with other visionaries accelerates your impact. Find your people — the ones who think as differently as you do.",
      health: "Circulation and ankle health need attention. Movement, hydration, and elevation all support your body's systems.",
      wealth: "Technology or innovative investments catch your attention. Your instinct for the future is sharp — just balance vision with due diligence."
    },
    month: {
      love: "Detachment has served you, but this month asks: what are you protecting yourself from? Sometimes walls keep out pain. Sometimes they keep out love.",
      career: "A project that once felt fringe becomes mainstream. Your ahead-of-the-curve thinking is validated. Don't say 'I told you so' — just keep innovating.",
      health: "Mental health and community connection are intertwined for you. Isolation masquerades as independence. Engage your tribe.",
      wealth: "Humanitarian values and financial decisions can align. Ethical investing, social enterprises, or wealth that creates positive impact all interest you. Pursue them."
    }
  },
  Pisces: {
    today: {
      love: "Boundaries aren't walls; they're the container that lets intimacy deepen safely. You can be compassionate without dissolving into someone else's needs.",
      career: "Your creativity and intuition are assets, but practical execution matters. Partner with someone who grounds your vision in reality.",
      health: "Your feet need care — literally and metaphorically. Ground yourself. Too much time in imagination disconnects you from your body.",
      wealth: "Financial fog clears when you face the numbers directly. Avoidance doesn't make problems disappear. Look, then address what you find."
    },
    week: {
      love: "Early week heightens sensitivity. You feel everything — yours and others'. Mid-week, practice discernment: whose emotions are you actually carrying?",
      career: "Creative projects flourish. Your imagination is a gift that deserves structure to fully manifest. Dream it, then build it.",
      health: "Escapism tempts you when reality feels harsh. Choose healthy escapes — art, music, nature — over numbing ones. You know the difference.",
      wealth: "Someone may take advantage of your generosity. Compassion is beautiful; enabling isn't. Know where your responsibility ends and theirs begins."
    },
    month: {
      love: "Martyrdom isn't love. Sacrificing yourself doesn't save anyone; it just creates two drowning people. Love from fullness, not depletion.",
      career: "Your artistic or spiritual work reaches people in ways you won't always see. Trust that your offerings matter, even when feedback is quiet.",
      health: "Addiction patterns — to substances, people, or fantasy — surface for healing. Gentleness with yourself is essential. You're not broken; you're sensitive in a harsh world.",
      wealth: "Money and spirituality aren't opposing forces. Financial stability supports your ability to serve. Abundance and ethics can coexist."
    }
  }
};
