# EDU-LITE Dashboard

A modern, high-performance learning dashboard built with **Next.js 15**, **TypeScript**, and **Tailwind CSS along with the framer motion **.

## 🚀 Features

- **Dynamic Dashboard**: Personalized welcome message for **Navneet**.
- **Course Tracking**: Visualize your learning progress with animated progress bars.
- **Activity Visualization**: interactive bar charts for daily study hours.
- **Glassmorphism UI**: Beautiful, modern design with mesh gradients and noise textures.
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens.
- **Supabase Integration**: Backend ready with Supabase for data persistence.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: Supabase

## 🏁 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Neet2516/Assignment.git
cd Assignment
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the root directory and add your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Database Setup
Run the following SQL in your Supabase SQL Editor:
```sql
create table courses (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  progress integer check (progress >= 0 and progress <= 100),
  icon_name text not null,
  created_at timestamp with time zone default now()
);

insert into courses (title, progress, icon_name) values
('Advanced React Patterns', 75, 'Code2'),
('Next.js App Router Masterclass', 40, 'Zap'),
('UI/UX Design Fundamentals', 90, 'Palette'),
('Fullstack Type-Safe APIs', 20, 'ShieldCheck');
```

### 5. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Hinglish Documentation
Codebase mein aapko **professional Hinglish comments** milenge jo logic ko asaan bhasha mein samjhate hain. Yeh khaas karke un developers ke liye hai jo concept ko jaldi grasp karna chahte hain.

---
Made with ❤️ by Navneet
