!function(){
    //鼠标向下滚动时顶部导航栏发生变化,且给每一块滚动时增加动画
    var specialTags = document.querySelectorAll('[data-x]');
    for(let i=0;i<specialTags.length;i++){
        specialTags[i].classList.add('offset')
    }

    window.addEventListener('scroll',function(xxx){
        findClosestAndRemoveOffset();
    })

    function findClosestAndRemoveOffset(){
        let specialTags = document.querySelectorAll('[data-x]')
        let minIndex = 0;
        for (let i = 1; i <specialTags.length;i++){
          if(Math.abs(specialTags[i].offsetTop-window.scrollY) < Math.abs(specialTags[minIndex].offsetTop-window.scrollY)){
              minIndex = i
          }
          specialTags[minIndex].classList.remove('offset');
          let id = specialTags[minIndex].id;
          let a = document.querySelector('a[href="#' + id + '"]')
          let li = a.parentNode;
          let brothersAndMe = li.parentNode.children;
          for (let i=0;i<brothersAndMe.length;i++){
            brothersAndMe[i].classList.remove('highlight')
          }
          li.classList.add('highlight')
        }
      }
    //子菜单
    var liTags = document.getElementsByClassName('menuTigger')
    for (var i=0;i<liTags.length;i++){
        liTags[i].onmouseenter = function(x){
        var li = x.currentTarget;
        var brother = li.getElementsByTagName('ul')[0];
        brother.classList.add('active')
        }
        liTags[i].onmouseleave = function(x){
        var li = x.currentTarget;
        var brother = li.getElementsByTagName('ul')[0];
        brother.classList.remove('active')
        }
    }
}.call()
