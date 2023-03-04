document.addEventListener('DOMContentLoaded',()=>{
 
    const bird = document.querySelector('.bird');
    const gamedisplay = document.querySelector('.game-container');
    const ground = document.querySelector('.ground');
    
       let birdleft = 220;
       let birdbottom = 100;
       let gravity = 2;
      let isgameover = false;
      let gap = 480;

       function startgame()
       {
            birdbottom -= gravity;
            bird.style.bottom = birdbottom +'px';
            bird.style.left = birdleft +'px';
       }
       let gametimerid = setInterval(startgame,20)

      
       
       function jump()
       {
          if(birdbottom < 500) birdbottom +=50;
           bird.style.bottom = birdbottom +'px';
           console.log(birdbottom);
       }
       document.addEventListener('keyup',jump);

       function generateobstacle()
       {
           let obstacleleft = 500;
           let randomheight = Math.random() * 60;
           let obstaclebottom = randomheight;

           const obstacle = document.createElement('div');
           const topobstacle = document.createElement('div');

           if(!isgameover){
               obstacle.classList.add('obstacle');
               topobstacle.classList.add('topobstacle');
            }
           gamedisplay.appendChild(obstacle);
           gamedisplay.appendChild(topobstacle);
           obstacle.style.left = obstacleleft + 'px';
           obstacle.style.bottom = obstaclebottom + 'px';
           topobstacle.style.left = obstacleleft + 'px';
           topobstacle.style.bottom = obstaclebottom + gap +'px';

           function moveobstacle()
           {
               obstacleleft -=2;
               obstacle.style.left = obstacleleft + 'px';
               topobstacle.style.left = obstacleleft + 'px';
               if(obstacleleft === -60)
               {
                   clearInterval(timerid);
                   gamedisplay.removeChild(obstacle);
                   gamedisplay.removeChild(topobstacle);
               }
               if(obstacleleft>200 && obstacleleft<280 && birdleft===220 && (birdbottom < obstaclebottom + 153 || birdbottom > obstaclebottom +gap -200)|| birdbottom === 0)
               {
                   gameover();
                   clearInterval(timerid);
               }
           }
           let timerid = setInterval(moveobstacle,20);
          if(!isgameover) setTimeout(generateobstacle,3000);
       }
       generateobstacle();

    function gameover()
    {
           clearInterval(gametimerid);
        alert('game over');
           isgameover = true;
           document.removeEventListener('keyup',jump);
    }

});