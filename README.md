# Real Estate Platform

A modern real estate platform built with React, TypeScript, and Tailwind CSS.
Vercel: real-estate-wine-seven.vercel.app

## Features

- User authentication and authorization
- Real estate listings management
- Interactive maps with Mapbox GL
- Multi-language support (i18n)
- Form handling with Formik
- State management with Redux Toolkit
- Responsive design with Tailwind CSS
- Component documentation with Storybook

## Tech Stack

- **Frontend Framework**: React 19
- **Node version**: 22.14.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Form Handling**: Formik + Yup
- **Maps**: Mapbox GL + React Map GL
- **Internationalization**: i18next
- **API Client**: Axios
- **Build Tool**: Vite
- **Testing**: Storybook

## Installation

1. Clone the repository:

```bash
git clone https://github.com/vadym1borshch/real-estate
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

4. Build for production:

```bash
yarn build
```

## Project Structure

```
src/
├── app/                    # Application pages
├── components/            # Reusable components
│   ├── atoms/            # Basic UI components
│   ├── molecules/        # Complex components
│   ├── organisms/        # Page sections
│   └── templates/        # Layout templates
├── helpers/              # Utility functions and hooks
├── store/                # Redux store and slices
├── @types/              # TypeScript type definitions
└── @constants/          # Application constants
```

## Development

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn lint` - Run ESLint
- `yarn storybook` - Start Storybook
- `yarn build-storybook` - Build Storybook

### Code Style

- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety

## Internationalization

The application supports multiple languages using i18next. Translations are stored in the `public/locales` directory.

## Maps Integration

The platform uses Mapbox GL for interactive maps. Make sure to set up your Mapbox access token in the environment variables.

## Authentication

- JWT-based authentication
- Token storage in localStorage
- Automatic token refresh
- Protected routes

## Forms

- Formik for form management
- Yup for form validation
- Custom form components
- Error handling

## Styling

- Tailwind CSS for utility-first styling
- Custom components with Material Tailwind
- Responsive design

## Documentation

Component documentation is available in Storybook. Run `yarn storybook` to view the documentation.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
