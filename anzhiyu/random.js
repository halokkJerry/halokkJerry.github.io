var posts=["2024/01/02/hello-world/","2024/01/03/GO避坑指南「一」/","2024/01/02/线性代数「一」行列式/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };