module.exports = {
  apps: [{
    script: 'koa-server/index.js',
    watch: '.'
  }, {
    script: 'wangyi-cloud-music/app.js',
    watch: ['./service-worker']
  }],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
