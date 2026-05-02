# Developer Guide — Adding New Temples

## Overview
This guide explains how to add a new temple to the TempleGate Discovery Platform.
The system is designed to be modular — adding a temple requires **no code changes** 
to the backend logic or the 3D engine. You only need to add data in 2 files.

---

## Step 1: Add Temple Data (`temple_data.js`)

Open `temple_data.js` and add a new entry inside the `TEMPLES` object.

### Template:
```javascript
your_temple_id: {
    id: "your_temple_id",               // Unique ID (used in URLs)
    name: "Full Temple Name",
    location: "City, State",
    dynasty: "Dynasty Name",
    yearBuilt: "Year CE",
    deity: "Main Deity",
    unescoSite: true,                   // or false
    highlights: [
        "Key highlight 1",
        "Key highlight 2",
        // ... up to 5
    ],
    eras: {
        ancient: {
            label: "Ancient (Year CE)",
            facts: [
                "Fact 1 about the ancient era",
                "Fact 2...",
                // 5 facts recommended for best AI narration
            ]
        },
        middle: {
            label: "Medieval (Year Range)",
            facts: [ /* 5 facts */ ]
        },
        modern: {
            label: "Modern Day",
            facts: [ /* 5 facts */ ]
        }
    }
}
```

### Rules:
- The `id` must be lowercase, no spaces (use underscores)
- Each era should have exactly **5 facts** for optimal AI narration
- Facts should be specific, vivid, and historically accurate
- The AI uses these facts as context to generate the spoken narration

---

## Step 2: Add to Dashboard (`temple_dashboard.html`)

Duplicate an existing temple card in the grid and update:
1. The `onclick` URL: `temple_immersive_3d.html?temple=your_temple_id`
2. The image `src`
3. The temple name, location, and dynasty text

### Example:
```html
<div class="group bg-white rounded-xl ... cursor-pointer" 
     onclick="window.location.href='temple_immersive_3d.html?temple=your_temple_id'">
    <!-- image, name, location, dynasty -->
</div>
```

---

## Step 3: Add to Splash Screen (Optional)

The splash screen auto-reads temple info from a `TEMPLE_INFO` object 
in `temple_immersive_3d.html`. Add your temple there:

```javascript
const TEMPLE_INFO = {
    // ... existing temples
    your_temple_id: { name: 'Full Temple Name', location: 'City, State' }
};
```

---

## How the System Works

```
Dashboard Card (onclick with ?temple=ID)
    │
    ▼
3D Page reads URL param → sets CURRENT_TEMPLE_ID
    │
    ▼
Splash overlay shows temple name/location
    │
    ▼ (user clicks "Begin Discovery")
    │
NarrationManager.narrateEra(phaseIndex)
    │
    ▼
Frontend calls: GET /api/narrative?templeId=ID&era=ancient&lang=en
    │
    ▼
Backend looks up TEMPLES[ID].eras[era].facts
    │
    ▼
Gemini generates poetic narration using those facts
    │
    ▼
Frontend receives text → Web Speech API reads it aloud
```

---

## Supported Languages
| Code | Language | Speech Code |
|------|----------|-------------|
| en   | English  | en-IN       |
| ta   | Tamil    | ta-IN       |
| hi   | Hindi    | hi-IN       |
| te   | Telugu   | te-IN       |
| kn   | Kannada  | kn-IN       |

To add a new language, update the `SUPPORTED_LANGUAGES` array in 
both `temple_data.js` and the `NarrationManager` class in the 3D HTML file.

---

## API Reference

### GET /api/narrative
Generate AI narration for a specific temple/era/language.

| Param    | Type   | Example         | Required |
|----------|--------|-----------------|----------|
| templeId | string | brihadeeswarar  | Yes      |
| era      | string | ancient/middle/modern (or 0/1/2) | Yes |
| lang     | string | en/ta/hi/te/kn  | No (default: en) |

**Response:**
```json
{
    "text": "Welcome to the magnificent Brihadeeswarar Temple...",
    "templeId": "brihadeeswarar",
    "era": "ancient",
    "lang": "en",
    "speechCode": "en-IN",
    "source": "gemini"
}
```

### GET /api/temples
List all available temples and supported languages.

### POST /api/chat
AI chatbot for cultural Q&A (used by the chatbot panel).
