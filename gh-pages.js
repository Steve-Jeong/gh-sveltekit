import ghpages from 'gh-pages';
ghpages.publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/Steve-Jeong/gh-sveltekit.git', // Update to point to your repository
    user: {
      name: 'SteveJeong', // update to use your name
      email: 'jst0930@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);
