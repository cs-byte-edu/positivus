# Vite simple starter markup template

Key features of this template:

Build Tools: Vite.js
Plugins: Autoprefixer, Imagemin, Imagemin-Webp, PostCSS Sort Media Queries, Vite plugin Image Optimizer
Styles: Tailwind


Get your project up and running quickly with this template and start creating amazing web applications!

## Dependencies

This template uses the following dependencies:

- **[Vite](https://vitejs.dev/):** A next-generation frontend build tool that offers a fast dev server and optimized builds.
- **[autoprefixer](https://www.npmjs.com/package/autoprefixer):** Autoprefixer automatically adds vendor prefixes to CSS.
- **[vite-plugin-image-optimizer](https://github.com/FatehAK/vite-plugin-image-optimizer):** Image optimization (png, jpeg, gif, tiff, webp, avif). 
- **[imagemin-webp](https://www.npmjs.com/package/imagemin-webp):** Converts formats such as .png/.jpg etc to .webp format
- **[postcss-sort-media-queries](https://www.npmjs.com/package/postcss-sort-media-queries):** Plugin for sorting and combining CSS media queries with mobile first / desktop first methodologies.

## Starting

1. To start using this template, clone the repository with this command:

```bash
git clone https://github.com/
```

2. Then install the dependencies:

```bash
cd your-project-name
npm install
```


## Scripts

Use the following scripts for your development workflow:

```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Preview the build
npm run preview
```

## Folder Structure

This is the structure of the project:

```plaintext
/
├── node_modules            # Node.js dependencies for the project.
├── src                     # Source code
│   ├── img                 # Folder for your images
│   ├── js                  # Javascript files of your project
├── .gitignore              # Files and folders to be ignored by Git
├── index.css               # Styles
├── index.html              # The HTML file for your project
├── LICENSE                 # The license for your project
├── package-lock.json       # Lockfile for your project's dependencies
├── package.json            # Defines your project and its dependencies
├── postcss.config.js       # Configuration for PostCSS
├── tailwind.config.js      # Configuration for TailwindCSS
├── README.md               # This file
├── vite.config.js          # Configuration for Vite
```

## License

This template was created under the [MIT License](LICENSE).
