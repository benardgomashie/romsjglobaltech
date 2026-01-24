# ROMSJ Global Tech Website

Official website for ROMSJ Global Tech Limited - In collaboration with the Embassy of the Republic of Ghana in the People's Republic of China.

## 🚀 Features

- **Modern Next.js 14** with TypeScript
- **Tailwind CSS** for styling with custom blue-yellow-white theme
- **Framer Motion** for smooth animations
- **Fully Responsive** design (mobile, tablet, desktop)
- **SEO Optimized** with meta tags
- **Fast Performance** with optimized loading

## 🎨 Design Theme

- **Primary Colors:** Deep Royal Blue (#1e3a8a), Navy Blue (#1e40af)
- **Accent Colors:** Golden Yellow (#fbbf24), Warm Mustard (#d97706)
- **Neutral:** White (#ffffff)
- **Fonts:** Inter, Montserrat, Playfair Display

## 📁 Project Structure

```
romsjglobaltech/
├── app/
│   ├── about/          # About Us page
│   ├── bifor2026/      # BiFor 2026 Event page
│   ├── sponsor/        # Sponsorship page
│   ├── contact/        # Contact page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Footer component
├── public/
│   └── images/         # Image assets
├── package.json
├── tailwind.config.js
└── next.config.js
```

## 🛠️ Installation & Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Add Logo Images:**
   - Copy your logo files to `public/images/` folder
   - Rename the main logo to `logo.png`

3. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

4. **Build for Production:**
   ```bash
   npm run build
   npm start
   ```

## 📄 Pages

1. **Home** (`/`) - Hero section, quick intro, BiFor 2026 highlight, focus areas
2. **About Us** (`/about`) - Mission, Vision, Core Values, Mantra
3. **BiFor 2026** (`/bifor2026`) - Event details, benefits, targeted audience
4. **Become a Sponsor** (`/sponsor`) - Sponsorship packages and benefits
5. **Contact** (`/contact`) - Contact form and information

## 🖼️ Required Images

Place these images in the `public/images/` folder:

- `logo.png` - Main company logo
- Additional images from your folder:
  - ROMSJ INT LOGO 3 FINAL x.png
  - CHINA PROJECT PARTNERS.png
  - CHINA sponsor PROPOSAL P4 new.png

## ⚙️ Configuration

### Update Contact Information

Edit [components/Footer.tsx](components/Footer.tsx):
- Email address
- Phone number
- Physical addresses (if available)
- Social media links

### Update Meta Tags

Edit [app/layout.tsx](app/layout.tsx):
- Title, description, keywords for SEO

## 🎯 Key Features

- ✅ Responsive navigation with mobile menu
- ✅ Smooth scroll animations
- ✅ Interactive hover effects
- ✅ Contact form with validation
- ✅ Custom gradient backgrounds
- ✅ Icon integration (React Icons)
- ✅ Accessible components

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder
3. Configure build settings

## 📝 Content Updates

All content is directly embedded in the page components. To update:

1. **Home page:** Edit `app/page.tsx`
2. **About page:** Edit `app/about/page.tsx`
3. **BiFor 2026:** Edit `app/bifor2026/page.tsx`
4. **Sponsor page:** Edit `app/sponsor/page.tsx`
5. **Contact page:** Edit `app/contact/page.tsx`

## 🎨 Customization

### Colors

Edit [tailwind.config.js](tailwind.config.js) to change theme colors.

### Fonts

Update font imports in [app/globals.css](app/globals.css).

### Components

Reusable components are in the `components/` folder.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📞 Support

For questions or issues:
- Email: info@romsjglobaltech.com
- GitHub Issues (if repository is set up)

## 📄 License

© 2026 ROMSJ Global Tech Limited. All rights reserved.

---

**Built with ❤️ for ROMSJ Global Tech**

*Let's Accelerate Growth*
