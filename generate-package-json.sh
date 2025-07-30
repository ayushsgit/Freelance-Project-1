#!/bin/bash

echo "🔧 Setting up proper package.json first..."

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "📝 Creating package.json..."
    
    # Initialize npm project
    npm init -y
    
    # Update it with proper Vite + React setup
    cat > package.json << 'EOF'
{
  "name": "student-dashboard",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.13.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.3",
    "eslint": "^9.13.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.11.0",
    "typescript": "~5.6.2",
    "vite": "^5.4.10"
  }
}
EOF
    
    echo "✅ Basic package.json created!"
else
    echo "✅ package.json already exists!"
fi

# Install basic dependencies first
echo "📦 Installing basic React + Vite dependencies..."
npm install

echo "🔍 Now extracting EXACT package versions from your components..."

# Create temp file for exact dependencies
EXACT_DEPS="/tmp/exact_dependencies.txt"
> $EXACT_DEPS

# Search for all imports with @version in your components
find src -name "*.tsx" -o -name "*.ts" | xargs grep -ho 'from "[^"]*@[0-9][0-9]*\.[0-9][0-9]*\.[0-9][0-9]*"' | \
sed 's/from "//; s/"//' | sort -u > $EXACT_DEPS

echo "📋 Found these EXACT dependencies:"
cat $EXACT_DEPS

if [ -s $EXACT_DEPS ]; then
    echo ""
    echo "📦 Installing EXACT versions..."
    
    # Install each dependency
    while read -r dep; do
        echo "Installing: $dep"
        npm install "$dep"
    done < $EXACT_DEPS
    
    echo "✅ All exact dependencies installed!"
else
    echo "⚠️  No versioned dependencies found in src/ components"
fi

rm -f $EXACT_DEPS
echo "🎉 Setup complete! Check your package.json"
EOF

echo "🔍 Extracting EXACT package versions from your components..."

# Create temp file for exact dependencies
EXACT_DEPS="/tmp/exact_dependencies.txt"
> $EXACT_DEPS

# Search for all imports with @version in your components
find src -name "*.tsx" -o -name "*.ts" | xargs grep -ho 'from "[^"]*@[0-9][0-9]*\.[0-9][0-9]*\.[0-9][0-9]*"' | \
sed 's/from "//; s/"//' | sort -u > $EXACT_DEPS

echo "📋 Found these EXACT dependencies:"
cat $EXACT_DEPS

# Generate install command with EXACT versions
echo ""
echo "📦 Installing EXACT versions..."
echo "npm install \\"

while read -r dep; do
    echo "$dep \\"
done < $EXACT_DEPS | sed '$ s/ \\$//'

echo ""
echo "🚀 Running install now..."
npm install $(cat $EXACT_DEPS | tr '\n' ' ')

rm -f $EXACT_DEPS
echo "✅ Exact dependencies installed!"

echo "🚀 Installing ALL missing dependencies..."

# Stop the dev server first
pkill -f "vite"

# Install ALL missing packages
npm install \
lucide-react \
@radix-ui/react-slot \
@radix-ui/react-avatar \
@radix-ui/react-progress \
@radix-ui/react-switch \
@radix-ui/react-label \
@radix-ui/react-select \
@radix-ui/react-accordion \
@radix-ui/react-alert-dialog \
@radix-ui/react-aspect-ratio \
@radix-ui/react-checkbox \
@radix-ui/react-collapsible \
@radix-ui/react-context-menu \
@radix-ui/react-dialog \
@radix-ui/react-dropdown-menu \
@radix-ui/react-hover-card \
@radix-ui/react-menubar \
@radix-ui/react-navigation-menu \
@radix-ui/react-popover \
@radix-ui/react-radio-group \
@radix-ui/react-scroll-area \
@radix-ui/react-separator \
@radix-ui/react-slider \
@radix-ui/react-tabs \
@radix-ui/react-toggle \
@radix-ui/react-toggle-group \
@radix-ui/react-tooltip \
class-variance-authority \
clsx \
tailwind-merge \
cmdk \
embla-carousel-react \
input-otp \
next-themes \
react-day-picker \
react-hook-form \
react-resizable-panels \
recharts \
sonner \
vaul

# Install Tailwind CSS and dependencies
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind if not already done
if [ ! -f "tailwind.config.js" ]; then
    npx tailwindcss init -p
fi

echo "✅ All dependencies installed!"
echo "🔧 Now fixing import statements..."

# Fix all import statements (remove @version)
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/@[0-9][0-9]*\.[0-9][0-9]*\.[0-9][0-9]*"/"/g'

echo "✅ Import statements fixed!"
echo "🚀 Starting dev server..."

npm run dev