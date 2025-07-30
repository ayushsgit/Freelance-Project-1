# Student Dashboard

A modern, responsive student dashboard application built with React, TypeScript, Tailwind CSS v4, and Vite.

## Features

- 📊 **Dashboard Overview**: Quick stats including GPA, credits, assignments, and next class
- 📝 **Assignment Management**: View upcoming assignments with priority indicators
- 📈 **Grade Tracking**: Recent grades with progress visualization
- 📅 **Schedule View**: Today's class schedule with timeline interface
- 🔍 **Search Functionality**: Real-time search across assignments, grades, and schedule
- 🔔 **Notifications**: Interactive notification dropdown with management features
- 🌙 **Dark Mode**: Seamless light/dark theme switching with persistence
- 📱 **Responsive Design**: Optimized for desktop and mobile devices
- 🎨 **Modern UI**: Clean design with shadcn/ui components and smooth animations

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling framework
- **shadcn/ui** - UI component library
- **Lucide React** - Icon library
- **Radix UI** - Headless UI primitives

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone or download the project files
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── pages/           # Page components
│   ├── figma/           # Figma-specific components
│   └── ...              # Other components
├── styles/              # CSS files
│   └── globals.css      # Global styles and Tailwind
└── main.tsx             # App entry point
```

## Customization

### Theme Colors

The application uses a comprehensive design system defined in `src/styles/globals.css`. You can customize:

- Primary colors
- Background colors
- Text colors
- Border styles
- Component styling

### Adding New Pages

1. Create a new component in `src/components/pages/`
2. Add the route to the sidebar navigation in `src/components/Sidebar.tsx`
3. Include the page component in `src/App.tsx`

### Modifying Components

All UI components are located in `src/components/ui/` and follow the shadcn/ui patterns. You can:

- Customize existing components
- Add new component variants
- Modify styling while maintaining accessibility

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

- Chrome/Edge 88+
- Firefox 78+
- Safari 14+

## License

This project is open source and available under the MIT License.