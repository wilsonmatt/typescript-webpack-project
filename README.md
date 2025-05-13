# TypeScript Webpack Project

A modern web application built with TypeScript and Webpack, featuring RxJS for reactive programming.

## Features

- TypeScript for type-safe development
- Webpack for module bundling and development server
- RxJS for reactive programming
- Hot Module Replacement (HMR) for development
- CSS and style loading support

## Prerequisites

- Node.js (v14 or higher recommended)
- npm or pnpm package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd typescript-webpack-project
```

2. Install dependencies:
```bash
# Using npm
npm install

# Or using pnpm
pnpm install
```

## Development

To start the development server:

```bash
npm start
# or
pnpm start
```

This will start the development server at `http://localhost:3000` with hot module replacement enabled.

## Building for Production

To create a production build:

```bash
npm run build
# or
pnpm build
```

The built files will be available in the `dist` directory.

## Project Structure

```
typescript-webpack-project/
├── src/              # Source files
├── dist/             # Build output
├── node_modules/     # Dependencies
├── package.json      # Project configuration
├── tsconfig.json     # TypeScript configuration
└── webpack.config.js # Webpack configuration
```

## Dependencies

### Development Dependencies
- TypeScript
- Webpack
- Webpack Dev Server
- CSS Loader
- Style Loader
- HTML Webpack Plugin
- TS Loader

### Runtime Dependencies
- RxJS

## License

ISC

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 