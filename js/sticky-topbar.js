!function(){
    var view = document.querySelector('#topNavbar')
    var controller = {
        view : null,
        init : function(view){
            this.view = view
            this.bindEvents()
        },
        bindEvents : function(){
            var view = this.view
            window.addEventListener('scroll',(xxx)=>{
                if (window.scrollY > 0){
                  this.active()
                }
                else{
                  this.deactive()
                }
            })
        },
        active :function(){
            this.view.classList.add('sticky')
        },
        deactive: function(){
            this.view.classList.remove('sticky')
        }      
    }
    controller.init(view)
}.call()