# Jonathan Rodríguez - Portfolio

A modern, responsive personal portfolio website showcasing projects, skills, and professional experience. Built with cutting-edge web technologies to deliver an optimal user experience.

## 🚀 About the Project

This portfolio is a showcase of my work as a full-stack developer. It features a collection of projects, technical skills, courses completed, and ways to get in touch. The site is built with performance and user experience in mind, with support for multiple languages and a clean, modern design.

## 👤 About Me

I'm Jonathan Rodríguez, a passionate full-stack web developer. I focus on building scalable, performant, and user-friendly applications. With a strong foundation in both frontend and backend development, I'm committed to continuous learning and staying updated with the latest industry trends.

**Key Skills:**
- Full-stack web development
- Responsive Design & UI/UX
- RESTful APIs
- Database Design

## ✨ Features

- **Multi-language Support**: Localized content in English and Spanish using next-i18next
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Project Showcase**: Display of featured projects with descriptions
- **Tech Stack Display**: Showcase of technologies and programming languages
- **Courses Section**: Educational background and certifications
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **Type Safe**: Full TypeScript implementation for better code reliability

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) 16.0+
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **CSS Processing**: PostCSS & Autoprefixer
- **Internationalization**: [next-i18next](https://github.com/isaachinman/next-i18next)
- **Email Service**: [Nodemailer](https://nodemailer.com/)
- **Linting**: [ESLint](https://eslint.org/)
- **Package Manager**: npm

**Requirements:**
- Node.js >= 22.0.0
- npm or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the project:
```bash
npm run start
``

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000). The page will automatically reload as you make changes.

### Build for Production

```bash
npm run build
npm run start
```

### Linting

Check code quality and style issues:

```bash
npm run lint
```

## 📁 Project Structure

```
portfolio/
├── pages/              # Next.js pages and API routes
│   ├── _app.tsx       # App wrapper
│   ├── index.tsx      # Home page
│   └── api/           # Backend API endpoints
├── src/
│   ├── components/    # Reusable React components
│   │   ├── sections/  # Page sections (About, Banner, etc.)
│   │   └── ...
│   ├── templates/     # Layout templates (Header, Footer, Main)
│   ├── models/        # TypeScript interfaces and types
│   ├── assets/        # Images and static assets
│   └── ...
├── public/            # Static files
│   └── locales/       # Translation files (en, es)
├── styles/            # Global styles
├── next.config.js     # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## 🌐 Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Run production build |
| `npm run lint` | Run ESLint code quality checks |

## 📞 Contact

Feel free to reach out! You can contact me through:
- **Email**: Check the footer for contact information
- **Social Media**: Links available in the portfolio footer

## 📝 License

This project is personal and proprietary. Feel free to use it as inspiration for your own portfolio, but please don't copy the content or design without permission.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Hosted and deployed with modern best practices in Vercel
