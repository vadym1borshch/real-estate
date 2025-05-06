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
- Real-time chat with Socket.IO

## Tech Stack

- **Frontend Framework**: React 19
- **Node version**: 22.14.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Material Tailwind
- **State Management**: Redux Toolkit
- **Form Handling**: Formik + Yup
- **Maps**: Mapbox GL + React Map GL
- **Internationalization**: i18next
- **API Client**: Axios
- **Build Tool**: Vite
- **Testing**: Storybook
- **Chat**: Socket.IO

## Installation

1. Clone the frontend repository:

```bash
git clone https://github.com/vadym1borshch/real-estate
```

2. Clone the backend repository:

```bash
git clone https://github.com/vadym1borshch/real-estate-back
```

3. Install frontend dependencies:

```bash
cd real-estate
yarn install
```

4. Install backend dependencies:

```bash
cd ../real-estate-back
yarn install
```

5. Set up environment variables for both frontend and backend:

Frontend (.env):

```
VITE_API_URL=http://localhost:4000
```

Backend (.env):

```
DATABASE_URL=mysql://root:<password>@localhost:3306/real_estate
JWT_SECRET="your-jwt-secret"
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
PORT=4000
NODE_ENV=development
```

6. Start the backend server:

```bash
cd real-estate-back
yarn dev
```

7. Start the frontend development server:

```bash
cd ../real-estate
yarn dev
```

8. Build for production:

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

## Chat

- Implemented using Socket.IO
- Real-time messaging
- Message history storage

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
