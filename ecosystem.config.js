module.exports = {
  apps: [
    {
      name: 'strapi-production', // Clear name for your production instance
      cwd: '/var/www/cms', // Your Strapi project root
      script: 'npm', // Or 'yarn' if you use yarn
      args: 'start', // Runs 'npm start'
      env: {
        NODE_ENV: 'production',
        PORT: 1337, // Your production port (usually default or proxied by Nginx)
        // Add any other production-specific environment variables here
        // e.g., DATABASE_URL, S3_ACCESS_KEY, etc.
      },
      instances: 1, // Usually 1 for Strapi production, unless you have specific clustering needs
      exec_mode: 'fork', // Or 'cluster' if you configure Strapi for clustering
      max_memory_restart: '500M', // Adjust as needed
      log_file: '/var/log/strapi/strapi-production-combined.log',
      error_file: '/var/log/strapi/strapi-production-error.log',
      out_file: '/var/log/strapi/strapi-production-out.log',
      time: true,
    },
    {
      name: 'strapi-development', // Clear name for your development instance
      cwd: '/var/www/cms', // Your Strapi project root
      script: 'npm', // Or 'yarn' if you use yarn
      args: 'develop', // Runs 'npm develop'
      env: {
        NODE_ENV: 'development',
        PORT: 1338, // A different port for development (e.g., 1338)
        // Add any other development-specific environment variables here
        // For database, if you use a separate SQLite for dev:
        // DATABASE_FILENAME: '.tmp/data.db', // Default SQLite path, adjust if needed
        // Or if using a different dev DB:
        // DATABASE_URL: 'your_dev_database_url',
      },
      instances: 1,
      exec_mode: 'fork',
      watch: true, // Enable watch mode for development
      ignore_watch: ['node_modules', 'public', '.git', '.strapi/client'], // Ignore non-code files
      max_memory_restart: '500M', // Adjust as needed
      log_file: '/var/log/strapi/strapi-development-combined.log',
      error_file: '/var/log/strapi/strapi-development-error.log',
      out_file: '/var/log/strapi/strapi-development-out.log',
      time: true,
    },
  ],
};
