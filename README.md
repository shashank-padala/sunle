
# 🌙 SunLe – Just Say It!.

**SunLe** is a 24x7 personal companion app designed for emotionally safe conversations — anytime, anywhere. Built for India and beyond, it offers a friendly, judgment-free space to talk to virtual personas like Chutki (the listener), Bhayya/Didi (mentor), or a flirty friend — in Hindi, English, and regional languages.

---

## 🧠 Why SunLe?

Millions of people feel lonely but hesitate to talk to friends, family, or therapists — especially in Tier 2/3 cities in India where therapy is taboo.

SunLe creates a no-pressure zone to:
- Vent without judgment
- Get career or life advice
- Build confidence through playful flirting
- Simply feel *heard*

---

## 🛠 Tech Stack

| Layer         | Tech                          |
|---------------|-------------------------------|
| Frontend      | React / Next.js               |
| Mobile        | React Native (or Expo)        |
| Backend/Auth  | Supabase (PostgreSQL + Auth)  |
| AI Engine     | OpenAI / Claude API (via proxy) |
| Translation   | Indic NLP / Google Translate  |
| Deployment    | Vercel / Firebase Hosting     |

---

## 🚀 Features

- Phone + OTP login (no anonymous access)
- WhatsApp-style chat UI
- 3 AI personas with distinct tones
- Hindi + English language toggle
- 1000 messages/day free tier
- Memory graph to personalize responses
- Emotionally aware, culturally sensitive prompts

---

## 📱 Screenshots

_Coming soon_

---

## 🔧 Local Setup

```bash
# Clone the repo
git clone https://github.com/shashank-padala/sunle.git
cd sunle

# Install dependencies
npm install

# Add your Supabase keys, OpenAI keys in .env.local
cp .env.example .env.local

# Run locally
npm run dev
````

---

## 📄 Project Structure

```
/components     → Reusable UI elements
/pages          → Next.js routes
/lib            → Supabase client, API helpers
/public         → Static assets
/styles         → Tailwind CSS
```

---




