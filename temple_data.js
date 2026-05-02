/**
 * Temple Heritage Data — Central metadata for all temples.
 * 
 * Each temple entry contains:
 *   - Basic info (name, location, dynasty, year)
 *   - Era-specific facts for AI narration (ancient, middle, modern)
 *   - Supported languages for narration
 * 
 * To add a new temple: copy the structure and fill in the facts.
 * The AI narrator will use these facts as context to generate rich, 
 * historically accurate narrations in the requested language.
 */

const TEMPLES = {
    brihadeeswarar: {
        id: "brihadeeswarar",
        name: "Brihadeeswarar Temple",
        location: "Thanjavur, Tamil Nadu",
        dynasty: "Chola Dynasty",
        yearBuilt: "1010 CE",
        deity: "Lord Shiva",
        unescoSite: true,
        highlights: [
            "66-meter Vimana (tower) — one of the tallest in the world",
            "80-ton granite capstone at the summit",
            "The shadow of the Vimana never falls on the ground at noon",
            "Built by Raja Raja Chola I",
            "UNESCO World Heritage Site since 1987"
        ],
        eras: {
            ancient: {
                label: "Ancient (1010 CE)",
                narration: {
                    en: "Welcome to the Brihadeeswarar Temple, a masterpiece born from the vision of Raja Raja Chola the First. Over one thousand years ago, more than sixty thousand workers and artisans labored for seven years to create this monument to devotion. The eighty-ton granite capstone crowning the sixty-six meter tower was moved to the summit using a six-kilometer earthen ramp — a feat of engineering that still astonishes scholars today. Originally called Rajarajeswaram, this temple was carved entirely from granite, quarried from sources over sixty kilometers away. Stand here, and feel the weight of a thousand years of prayer beneath your feet.",
                    ta: "முதலாம் ராஜராஜ சோழனின் தொலைநோக்குப் பார்வையில் பிறந்த ஒரு தலைசிறந்த படைப்பான பிரகதீஸ்வரர் கோவிலுக்கு உங்களை வரவேற்கிறோம். ஆயிரக்கணக்கான ஆண்டுகளுக்கு முன்பு, அறுபதாயிரத்திற்கும் மேற்பட்ட தொழிலாளர்கள் மற்றும் கலைஞர்கள் இந்த பக்தி நினைவுச்சின்னத்தை உருவாக்க ஏழு ஆண்டுகள் உழைத்தனர். அறுபத்தாறு மீட்டர் கோபுரத்தின் உச்சியில் உள்ள எண்பது டன் எடையுள்ள கிரானைட் கல், ஆறு கிலோமீட்டர் நீளமுள்ள மண் சரிவைப் பயன்படுத்தி உச்சிக்கு கொண்டு செல்லப்பட்டது - இது இன்றும் அறிஞர்களை வியப்பில் ஆழ்த்தும் ஒரு பொறியியல் சாதனையாகும். முதலில் ராஜராஜேஸ்வரம் என்று அழைக்கப்பட்ட இந்த கோவில் முற்றிலும் கிரானைட் கற்களால் செதுக்கப்பட்டது. இங்கு நின்றபடி, ஆயிரம் ஆண்டுகால பிரார்த்தனையின் எடையை உங்கள் காலடியில் உணருங்கள்."
                },
                facts: [
                    "Raja Raja Chola I envisioned a temple that would surpass all others in grandeur.",
                    "Over 60,000 workers and artisans labored for 7 years to complete the temple.",
                    "The 80-ton capstone was moved to the top using a 6km-long earthen ramp.",
                    "The temple was originally called Rajarajeswaram, named after the king himself.",
                    "The entire structure was built from granite — no granite quarry exists within 60km of Thanjavur."
                ]
            },
            middle: {
                label: "Medieval (13th–17th Century)",
                narration: {
                    en: "As centuries passed, the Brihadeeswarar Temple continued to evolve under the care of new dynasties. The Nayak rulers added the magnificent Nandi statue — a sacred bull carved from a single stone — in the sixteenth century. Intricate mural paintings began to adorn the inner walls, telling stories of gods and heroes in vivid color. Maratha rulers later enriched the corridors with vibrant frescoes, blending Chola grandeur with new artistic traditions. The temple became a living stage for Bharatanatyam dance and Carnatic music, where art and devotion became one. Even today, those painted walls whisper the melodies of a golden age.",
                    ta: "பல நூற்றாண்டுகள் கடந்ததால், பிரகதீஸ்வரர் கோவில் புதிய வம்சங்களின் பராமரிப்பில் தொடர்ந்து வளர்ச்சியடைந்தது. பதினாறாம் நூற்றாண்டில் நாயக்க ஆட்சியாளர்கள் ஒரே கல்லில் செதுக்கப்பட்ட புனித காளையான பிரம்மாண்டமான நந்தி சிலையைச் சேர்த்தனர். சிக்கலான சுவரோவியங்கள் உள் சுவர்களை அலங்கரிக்கத் தொடங்கின, கடவுள்கள் மற்றும் மாவீரர்களின் கதைகளை தெளிவான வண்ணங்களில் சொன்னன. மராட்டிய ஆட்சியாளர்கள் பின்னர் சோழர்களின் பிரம்மாண்டத்தை புதிய கலை மரபுகளுடன் கலந்து, துடிப்பான ஓவியங்களால் தாழ்வாரங்களை செழுமைப்படுத்தினர். கலை மற்றும் பக்தி ஒன்றாக இணைந்த பரதநாட்டியம் மற்றும் கர்நாடக இசையின் வாழும் மேடையாக இந்த கோவில் மாறியது. இன்றும், அந்த வர்ணம் பூசப்பட்ட சுவர்கள் ஒரு பொற்காலத்தின் மெல்லிசைகளை கிசுகிசுக்கின்றன."
                },
                facts: [
                    "The Nayak rulers added the large Nandi (sacred bull) statue in the 16th century.",
                    "Intricate mural paintings were added to the inner walls during this period.",
                    "The temple complex was expanded with additional shrines and mandapams.",
                    "Maratha rulers further beautified the corridors with vibrant Chola-Nayak frescoes.",
                    "The temple became a cultural hub for Bharatanatyam and Carnatic music."
                ]
            },
            modern: {
                label: "Modern Day",
                narration: {
                    en: "Today, the Brihadeeswarar Temple stands as a UNESCO World Heritage Site, recognized since nineteen eighty-seven as one of the Great Living Chola Temples. It remains an active place of worship, where thousands of devotees gather daily beneath the shadow of the great Vimana — a shadow that, remarkably, never falls on the ground at noon. Advanced archaeological surveys have uncovered hidden paintings beneath centuries of later murals, revealing secrets long buried. Every year, the Maha Shivaratri festival draws over one hundred thousand pilgrims, filling the ancient halls with chanting and light. Modern conservation efforts now use laser scanning and three-dimensional mapping to ensure this timeless monument endures for generations to come.",
                    ta: "இன்று, பிரகதீஸ்வரர் கோவில் யுனெஸ்கோ உலக பாரம்பரிய தளமாக உள்ளது, இது பத்தொன்பது எண்பத்தேழாம் ஆண்டு முதல் பெரிய வாழும் சோழர் கோவில்களில் ஒன்றாக அங்கீகரிக்கப்பட்டுள்ளது. இது ஒரு செயலில் உள்ள வழிபாட்டுத் தலமாகத் தொடர்கிறது, அங்கு ஆயிரக்கணக்கான பக்தர்கள் தினமும் பெரிய விமானத்தின் நிழலில் கூடுகிறார்கள் - அந்த நிழல், குறிப்பிடத்தக்க வகையில், நண்பகலில் தரையில் விழுவதில்லை. மேம்பட்ட தொல்பொருள் ஆய்வுகள் பல நூற்றாண்டுகளுக்குப் பிந்தைய சுவரோவியங்களுக்கு அடியில் மறைந்திருந்த ஓவியங்களை வெளிப்படுத்தியுள்ளன. ஒவ்வொரு ஆண்டும், மகா சிவராத்திரி திருவிழா ஒரு லட்சத்திற்கும் அதிகமான யாத்ரீகர்களை ஈர்க்கிறது. இந்த காலமற்ற நினைவுச்சின்னம் வரும் தலைமுறையினருக்கும் நிலைத்திருப்பதை உறுதி செய்ய நவீன பாதுகாப்பு முயற்சிகள் லேசர் ஸ்கேனிங் மற்றும் முப்பரிமாண மேப்பிங்கைப் பயன்படுத்துகின்றன."
                },
                facts: [
                    "Declared a UNESCO World Heritage Site in 1987 as part of the Great Living Chola Temples.",
                    "The temple remains an active place of worship, hosting thousands of devotees daily.",
                    "Advanced archaeological surveys have revealed hidden paintings beneath later Nayak murals.",
                    "The annual Maha Shivaratri festival attracts over 100,000 pilgrims.",
                    "Modern conservation efforts use laser scanning and 3D mapping to preserve the structure."
                ]
            }
        }
    },

    meenakshi: {
        id: "meenakshi",
        name: "Meenakshi Amman Temple",
        location: "Madurai, Tamil Nadu",
        dynasty: "Pandya Dynasty",
        yearBuilt: "7th Century CE (rebuilt 17th Century)",
        deity: "Goddess Meenakshi (Parvati) & Lord Sundareswarar (Shiva)",
        unescoSite: false,
        highlights: [
            "14 magnificent Gopurams (gateway towers)",
            "33,000+ sculpted figures on the towers",
            "Golden Lotus Tank (Potramarai Kulam)",
            "Hall of 1,000 Pillars",
            "Nominated for the New 7 Wonders of the World"
        ],
        eras: {
            ancient: {
                label: "Ancient (7th Century CE)",
                narration: {
                    en: "Welcome to the Meenakshi Amman Temple, the crown jewel of Madurai. In the seventh century, the Pandya king Kulasekara Pandyan raised the first stones of this sacred sanctuary. Ancient Tamil Sangam literature tells us that the entire city of Madurai was designed as a lotus flower, with this very temple beating at its heart. Legend whispers that Lord Shiva himself descended from the heavens to marry Meenakshi, the beautiful fish-eyed goddess, in a divine ceremony witnessed by the gods. For over a millennium, this temple has been the epicenter of Tamil culture, poetry, and spiritual devotion. Close your eyes, and you can almost hear the ancient poets reciting their verses in these hallowed halls.",
                    ta: "மதுரையின் மகுடமான மீனாட்சி அம்மன் கோவிலுக்கு உங்களை வரவேற்கிறோம். ஏழாம் நூற்றாண்டில், பாண்டிய மன்னன் குலசேகர பாண்டியன் இந்த புனித சரணாலயத்தின் முதல் கற்களை எழுப்பினான். பண்டைய தமிழ் சங்க இலக்கியங்கள் மதுரை நகரம் முழுவதுமே ஒரு தாமரை மலரைப் போல வடிவமைக்கப்பட்டதாகக் கூறுகின்றன, அதன் மையத்தில் இந்த கோவில் துடிக்கிறது. மீனாட்சி அம்மனை சிவபெருமான் மணப்பதற்காக வானத்திலிருந்து இறங்கி வந்ததாக புராணங்கள் கூறுகின்றன. ஆயிரக்கணக்கான ஆண்டுகளாக, இக்கோயில் தமிழ் பண்பாடு, கவிதை மற்றும் ஆன்மீக பக்தியின் மையமாக இருந்து வருகிறது."
                },
                facts: [
                    "The original temple was built by the Pandya king Kulasekara Pandyan.",
                    "Ancient Tamil Sangam literature describes Madurai as the city built around this temple.",
                    "Legend says Lord Shiva (Sundareswarar) married Parvati (Meenakshi) at this spot."
                ]
            },
            middle: {
                label: "Medieval (14th–17th Century)",
                narration: {
                    en: "The medieval era brought both destruction and glorious rebirth to the Meenakshi Temple. In thirteen eleven, the invader Malik Kafur razed the temple to the ground, silencing centuries of worship. But the spirit of Madurai could not be broken. The Nayak dynasty rose and undertook a magnificent reconstruction, and Thirumalai Nayak built the towering gopurams that pierce the sky today — fourteen gateway towers adorned with over thirty-three thousand sculpted figures. The legendary Hall of One Thousand Pillars was raised, each column uniquely carved with gods, warriors, and celestial beings. The Golden Lotus Tank became a gathering place for Tamil poets, where literature was judged by floating manuscripts upon its sacred waters.",
                    ta: "இடைக்காலம் மீனாட்சி கோவிலுக்கு அழிவையும் புகழ்பெற்ற மறுபிறப்பையும் கொண்டு வந்தது. ஆயிரத்து முன்னூற்று பதினொன்றாம் ஆண்டில், மாலிக் காபூர் கோவிலை தரைமட்டமாக்கினான். ஆனால் மதுரையின் வீரம் உடையவில்லை. நாயக்க வம்சம் தோன்றி ஒரு பிரம்மாண்டமான மறுசீரமைப்பை மேற்கொண்டது. திருமலை நாயக்கர் இன்று வானத்தை முட்டும் கோபுரங்களை எழுப்பினார் - பதினான்கு கோபுரங்கள் முப்பத்தி மூவாயிரத்திற்கும் மேற்பட்ட சிற்பங்களால் அலங்கரிக்கப்பட்டுள்ளன. புகழ்பெற்ற ஆயிரங்கால் மண்டபம் எழுப்பப்பட்டது, அங்கு ஒவ்வொரு தூணும் தனித்துவமாக செதுக்கப்பட்டுள்ளது."
                },
                facts: [
                    "The temple was destroyed by Malik Kafur's invasion in 1311 CE.",
                    "The Nayak dynasty undertook a massive reconstruction starting in the 16th century.",
                    "Thirumalai Nayak built the massive gopurams (gateway towers) that define the skyline today."
                ]
            },
            modern: {
                label: "Modern Day",
                narration: {
                    en: "Today, the Meenakshi Amman Temple sprawls across fourteen acres, standing as one of the largest and most visited temple complexes in all of India. The annual Chithirai Festival draws over one million visitors, celebrating the divine marriage of Meenakshi and Sundareswarar with spectacular processions through the streets of Madurai. Every twelve years, all fourteen gopurams are lovingly repainted with fresh, vibrant colors by skilled artisans, keeping the temple alive with brilliance. The temple houses a museum filled with rare archaeological treasures, and in two thousand four, it was a top finalist for the New Seven Wonders of the World. Stand before these painted towers, and you stand before the living soul of Tamil Nadu.",
                    ta: "இன்று, மீனாட்சி அம்மன் கோவில் பதினான்கு ஏக்கர் பரப்பளவில் விரிந்து, இந்தியாவின் மிகப்பெரிய மற்றும் அதிகம் பார்வையிடப்படும் கோவில் வளாகங்களில் ஒன்றாகத் திகழ்கிறது. ஆண்டுதோறும் நடைபெறும் சித்திரைத் திருவிழா பத்து லட்சத்திற்கும் அதிகமான பார்வையாளர்களை ஈர்க்கிறது. ஒவ்வொரு பன்னிரண்டு ஆண்டுகளுக்கு ஒருமுறை, பதினான்கு கோபுரங்களும் திறமையான கலைஞர்களால் புதிய, துடிப்பான வண்ணங்களால் வண்ணம் பூசப்படுகின்றன. இக்கோயில் தமிழகத்தின் வாழும் ஆன்மாவாக நிற்கிறது."
                },
                facts: [
                    "The temple covers 14 acres and is one of the largest temple complexes in India.",
                    "The Chithirai Festival attracts over 1 million visitors annually.",
                    "Known for its 14 colorful gopurams, which are repainted every 12 years."
                ]
            }
        }
    },

    shore: {
        id: "shore",
        name: "Shore Temple",
        location: "Mahabalipuram, Tamil Nadu",
        dynasty: "Pallava Dynasty",
        yearBuilt: "700 CE",
        deity: "Lord Shiva & Lord Vishnu",
        unescoSite: true,
        highlights: [
            "One of the oldest structural stone temples in South India",
            "Built overlooking the Bay of Bengal",
            "Part of the UNESCO Group of Monuments at Mahabalipuram",
            "Survived 1,300 years of coastal erosion",
            "Originally part of a group of 7 temples — 6 are now submerged"
        ],
        eras: {
            ancient: {
                label: "Ancient (700 CE)",
                narration: {
                    en: "Welcome to the Shore Temple, where the ancient Pallava dynasty carved their devotion into granite against the roaring Bay of Bengal. Built by King Narasimhavarman the Second around seven hundred CE, this is one of the earliest structural stone temples in all of South India. Legend tells that seven magnificent temples once stood on this shore — six were swallowed by the hungry sea, leaving this solitary sentinel to guard the coast. The temple's granite blocks were shaped without mortar, fitted together with precision so exact that they have withstood thirteen centuries of salt, wind, and waves. European sailors once used these towers as navigation landmarks, calling this place the Seven Pagodas. Listen to the waves, and imagine the six lost temples sleeping beneath the tide.",
                    ta: "கடற்கரை கோவிலுக்கு உங்களை வரவேற்கிறோம், அங்கு பண்டைய பல்லவ வம்சம் வங்காள விரிகுடாவிற்கு எதிராக தங்கள் பக்தியை கிரானைட்டில் செதுக்கியது. கி.பி எழுநூறாம் ஆண்டில் இரண்டாம் நரசிம்மவர்மனால் கட்டப்பட்டது. இந்த கடற்கரையில் ஏழு பிரம்மாண்டமான கோவில்கள் இருந்ததாக புராணங்கள் கூறுகின்றன - ஆறு கோவில்கள் கடலால் விழுங்கப்பட்டன, இந்த ஒற்றைக் கோவில் மட்டும் கடற்கரையைக் காக்க நிற்கிறது."
                },
                facts: [
                    "Built by Pallava king Narasimhavarman II (Rajasimha) around 700 CE.",
                    "It is one of the earliest examples of structural (non-cave) temples in India.",
                    "Originally part of a complex of seven temples, six of which are now submerged."
                ]
            },
            middle: {
                label: "Medieval Period",
                narration: {
                    en: "Through the medieval centuries, the Shore Temple endured a slow battle with nature. Coastal erosion gradually buried portions of the temple under layers of sand, hiding its beauty from the world. The Vijayanagara Empire provided patronage to maintain what remained, recognizing the sacred importance of this coastal shrine. The great traveler Marco Polo himself mentioned the Seven Pagodas in his writings, carrying the temple's legend across the world. British colonial administrators began early preservation efforts in the nineteenth century, carefully excavating the sand to reveal exquisite lion sculptures that had guarded the temple in silence for centuries. Each grain of sand removed was a page of history recovered.",
                    ta: "இடைக்கால நூற்றாண்டுகளில், கடற்கரை கோயில் இயற்கையுடன் மெதுவான போரை நடத்தியது. கடற்கரை அரிப்பு படிப்படியாக கோவிலின் சில பகுதிகளை மணல் அடுக்குகளுக்கு அடியில் புதைத்தது. விஜயநகரப் பேரரசு எஞ்சியிருப்பதைப் பராமரிக்க ஆதரவு அளித்தது. புகழ்பெற்ற பயணி மார்கோ போலோ தனது எழுத்துக்களில் 'ஏழு பகோடாக்களை' குறிப்பிட்டுள்ளார். பத்தொன்பதாம் நூற்றாண்டில் மணல் தோண்டப்பட்டு நேர்த்தியான சிங்கச் சிற்பங்கள் வெளிப்படுத்தப்பட்டன."
                },
                facts: [
                    "Coastal erosion gradually buried parts of the temple under sand.",
                    "The Vijayanagara Empire provided patronage to maintain the site.",
                    "Marco Polo referred to Mahabalipuram as the 'Seven Pagodas' in his travel logs."
                ]
            },
            modern: {
                label: "Modern Day",
                narration: {
                    en: "In nineteen eighty-four, the Shore Temple was designated a UNESCO World Heritage Site, joining the family of humanity's most treasured monuments. Then, in two thousand four, the Indian Ocean tsunami briefly pulled the ocean back from the shore, revealing ancient submerged temple ruins that had been hidden for over a millennium — proof that the legend of the Seven Pagodas was real. The Archaeological Survey of India has since installed protective seawalls, and modern underwater archaeology has confirmed the existence of these lost temples beneath the waves. Today, the Shore Temple stands as one of the most visited heritage sites in Tamil Nadu, where visitors come to watch the sunrise paint thirteen hundred years of granite in gold. The sea took six temples, but it could not take this one.",
                    ta: "ஆயிரத்து தொள்ளாயிரத்து எண்பத்தி நான்கில், கடற்கரை கோயில் யுனெஸ்கோ உலக பாரம்பரியத் தளமாக அறிவிக்கப்பட்டது. பின்னர், இரண்டாயிரத்து நான்காம் ஆண்டில் ஏற்பட்ட சுனாமியின் போது கடல் பின்வாங்கியது, அப்போது கடலுக்கு அடியில் மறைந்திருந்த பண்டைய கோயில் சிதிலங்கள் வெளிப்பட்டன - இது ஏழு பகோடாக்கள் பற்றிய புராணம் உண்மை என்பதை நிரூபித்தது."
                },
                facts: [
                    "Designated a UNESCO World Heritage Site in 1984.",
                    "The 2004 tsunami temporarily receded the ocean, revealing ancient submerged temple ruins.",
                    "Archaeological Survey of India (ASI) has since built a protective seawall to prevent further erosion."
                ]
            }
        }
    },

    nataraja: {
        id: "nataraja",
        name: "Nataraja Temple (Thillai Nataraja Temple)",
        location: "Chidambaram, Tamil Nadu",
        dynasty: "Chola Dynasty",
        yearBuilt: "10th Century CE",
        deity: "Lord Shiva as Nataraja (Cosmic Dancer)",
        unescoSite: false,
        highlights: [
            "Enshrines the Cosmic Dance of Shiva (Ananda Tandava)",
            "The Chit Sabha (Hall of Consciousness) has a golden roof",
            "One of the Pancha Bootha Sthalams (Five Element Temples) — represents Space (Akasha)",
            "The temple covers 40 acres",
            "Famous for the 'Chidambara Rahasyam' — the Secret of Chidambaram"
        ],
        eras: {
            ancient: {
                label: "Ancient (10th Century CE)",
                narration: {
                    en: "Welcome to the Nataraja Temple of Chidambaram, where Lord Shiva performs his eternal cosmic dance. The Chola kings, especially Vira Chola and Kulottunga the First, expanded this temple into one of the most sacred sites in all of Hinduism. This temple enshrines the Akasha Lingam — the element of Space itself — making it one of the five elemental Shiva temples in India. The Chit Sabha, the Hall of Consciousness, was built during this period with its legendary golden roof gleaming under the Tamil sun. Ancient dance treatises consider this very ground to be the birthplace of Bharatanatyam, the classical dance form. The temple's layout is said to mirror the human body, with the innermost sanctum representing the heart — where the divine pulse of the universe beats.",
                    ta: "சிதம்பரம் நடராஜர் கோவிலுக்கு உங்களை வரவேற்கிறோம், அங்கு சிவபெருமான் தனது நித்திய அண்ட நடனத்தை ஆடுகிறார். சோழ மன்னர்கள், குறிப்பாக வீர சோழன் மற்றும் முதலாம் குலோத்துங்கன், இக்கோயிலை இந்து மதத்தின் புனிதமான தலங்களில் ஒன்றாக விரிவுபடுத்தினார்கள். இந்த கோயில் பஞ்சபூத தலங்களில் ஒன்றான 'ஆகாய லிங்கத்தை' கொண்டுள்ளது. இக்கோயிலின் அமைப்பு மனித உடலை பிரதிபலிப்பதாக கூறப்படுகிறது."
                },
                facts: [
                    "The Chola kings, especially Vira Chola and Kulottunga I, expanded the temple dramatically.",
                    "The temple enshrines the Akasha (Space) Lingam — one of the five elemental Shiva temples.",
                    "The golden roof of the Chit Sabha was established during the Chola era."
                ]
            },
            middle: {
                label: "Medieval (12th–17th Century)",
                narration: "During the medieval centuries, the Nataraja Temple was transformed into a living encyclopedia of art and devotion. The Chola rulers gilded the roof of the Chit Sabha with pure gold, creating a beacon visible for miles across the flat Tamil plains. Four massive gopurams were raised at the cardinal points, each adorned with one hundred and eight Bharatanatyam poses carved directly from the ancient Natyashastra. When Malik Kafur's armies threatened the temple, the hereditary Dikshitar priests risked their lives to protect its sacred treasures. The Shivakamasundari shrine was expanded in honor of the goddess, and the Vijayanagara rulers added the magnificent thousand-pillar hall known as the Raja Sabha. Every stone added was a prayer made permanent.",
                facts: [
                    "The Chola rulers gilded the roof of the Chit Sabha with pure gold.",
                    "The four massive gopurams were built, each adorned with 108 Bharatanatyam poses from the Natyashastra.",
                    "The temple survived Malik Kafur's raids due to the bravery of the Dikshitar priests.",
                    "The Shivakamasundari shrine was expanded for the goddess.",
                    "The 1,000-pillar hall (Raja Sabha) was added during the Vijayanagara patronage."
                ]
            },
            modern: {
                label: "Modern Day",
                narration: "Today, the Nataraja Temple remains uniquely managed by hereditary Dikshitar priests — not by a government trust — preserving an unbroken tradition stretching back a thousand years. The annual Natyanjali dance festival draws classical dancers from every corner of the world, who come to perform on the sacred ground where Bharatanatyam was born. Behind a golden curtain in the innermost sanctum lies the Chidambara Rahasyam — the Secret of Chidambaram — an empty space that symbolizes the profound truth that God is formless and infinite. Modern scientific studies have revealed that the temple's architecture aligns with principles of cosmic geometry and the human energy system. Conservation efforts continue to preserve the ancient stone carvings, ensuring that the cosmic dance of Nataraja echoes through eternity.",
                facts: [
                    "The temple is uniquely managed by hereditary Dikshitar priests, not a government trust.",
                    "The annual Natyanjali dance festival attracts classical dancers from across the world.",
                    "The 'Chidambara Rahasyam' (secret) — an empty space behind a golden curtain — symbolizes that God is formless.",
                    "Scientific studies suggest the temple's architecture aligns with cosmic geometry and the human energy system.",
                    "Conservation efforts are ongoing to preserve the 1,000-year-old stone carvings."
                ]
            }
        }
    }
};

// Supported languages for narration
const SUPPORTED_LANGUAGES = [
    { code: "en", name: "English", speechCode: "en-IN", flag: "🇬🇧" },
    { code: "ta", name: "Tamil", speechCode: "ta-IN", flag: "🇮🇳" },
    { code: "hi", name: "Hindi", speechCode: "hi-IN", flag: "🇮🇳" },
    { code: "te", name: "Telugu", speechCode: "te-IN", flag: "🇮🇳" },
    { code: "kn", name: "Kannada", speechCode: "kn-IN", flag: "🇮🇳" }
];

// Era mapping (phase index to era key)
const ERA_MAP = {
    0: "ancient",
    1: "middle",
    2: "modern"
};

module.exports = { TEMPLES, SUPPORTED_LANGUAGES, ERA_MAP };
