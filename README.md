# CCTV Freelancer - Professional Security Camera Services

A modern, responsive web application for CCTV installation and security services. Built with React and designed with a clean, professional aesthetic using neutral colors and modern UI patterns.

## 🎯 Features

- **Homepage** - Hero banner with clear call-to-action and comprehensive services overview
- **Login Page** - Clean authentication interface with email/password fields and error validation
- **Signup Page** - User registration with name, email, password, and optional phone number
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Neutral color palette with soft greys and subtle accents
- **Form Validation** - Client-side validation with helpful error messages
- **Docker Support** - Production-ready containerization with nginx

## 🎨 Design Philosophy

- **Modern & Clean** - Contemporary design with professional aesthetics
- **Neutral Palette** - Soft greys (#f7fafc, #edf2f7) with accent colors (#667eea)
- **Consistent Typography** - Inter font family with proper hierarchy
- **Balanced Spacing** - CSS custom properties for consistent spacing
- **Smooth Transitions** - Subtle animations for better UX

## 🚀 Tech Stack

- **React 19** - Latest React with functional components
- **React Router** - Client-side routing
- **Vite** - Fast build tool and dev server
- **Plain CSS** - Custom CSS with CSS variables (no framework dependency)
- **Docker** - Multi-stage build with nginx for production
- **ESLint** - Code quality and consistency

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose (for containerized deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbelConsulting/cctvfreelancer.git
   cd cctvfreelancer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d

# Access the application at http://localhost:3000
```

### Using Docker directly

```bash
# Build the image
docker build -t cctvfreelancer .

# Run the container
docker run -p 3000:80 cctvfreelancer

# Access the application at http://localhost:3000
```

### Docker Commands

```bash
# Stop the container
docker-compose down

# View logs
docker-compose logs -f

# Rebuild after changes
docker-compose up -d --build
```

## 📁 Project Structure

```
cctvfreelancer/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Header.css
│   │   ├── Footer.jsx     # Site footer
│   │   └── Footer.css
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Landing page
│   │   ├── Home.css
│   │   ├── Login.jsx     # Login page
│   │   ├── Login.css
│   │   ├── Signup.jsx    # Signup page
│   │   └── Signup.css
│   ├── App.jsx           # Main app component with routing
│   ├── App.css           # App layout styles
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles and CSS variables
├── Dockerfile            # Multi-stage Docker build
├── docker-compose.yml    # Docker Compose configuration
├── nginx.conf           # Nginx configuration for production
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🎯 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🌈 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | #4a5568 | Main text and headings |
| Accent | #667eea | Links, buttons, highlights |
| Background | #ffffff | Main background |
| Secondary BG | #f7fafc | Sections, cards |
| Tertiary BG | #edf2f7 | Hover states |
| Border | #e2e8f0 | Borders and dividers |
| Error | #f56565 | Error messages |
| Success | #48bb78 | Success states |

## 📝 Pages Overview

### Homepage (`/`)
- Hero section with compelling headline and CTA buttons
- Services grid showcasing 6 key offerings
- Call-to-action section for signup

### Login (`/login`)
- Email/username input field
- Password field
- Remember me checkbox
- Forgot password link
- Form validation with error messages

### Signup (`/signup`)
- Full name (required)
- Email address (required)
- Phone number (optional)
- Password (required, with strength validation)
- Confirm password (required)
- Terms of service agreement
- Form validation with helpful error messages

## 🔒 Security Features

- Form validation on client-side
- HTTPS-ready nginx configuration
- Security headers (X-Frame-Options, X-Content-Type-Options, X-XSS-Protection)
- Gzip compression for performance
- Health check endpoint for Docker

## 🎨 Customization

The application uses CSS custom properties (variables) defined in `src/index.css`. You can easily customize:

- **Colors**: Modify color variables in `:root`
- **Spacing**: Adjust spacing scale variables
- **Typography**: Change font family and sizes
- **Border Radius**: Update radius variables
- **Shadows**: Modify shadow depth

## 🤝 Contributing

This is an initial blueprint focused on layout, responsive behavior, and structure. Additional features and backend integration will be added in future iterations.

## 📄 License

See LICENSE file for details.

## 🙏 Acknowledgments

Built with modern React best practices and clean, maintainable code for easy integration into larger projects.

---

**Note**: This is a frontend-only application. Form submissions currently show demo alerts. Backend API integration will be implemented in the next phase.
