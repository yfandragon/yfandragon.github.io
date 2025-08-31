var posts=["2025/08/28/hello-world/","2025/08/28/test/","2025/08/30/这是一个新blog/","2025/08/30/Neovim/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };