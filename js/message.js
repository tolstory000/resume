var APP_ID = 'fvJQmxk5pkPmmO8QwBgegK7D-gzGzoHsz';
var APP_KEY = 'YtV11rOF2NHSIL4jKaEED3SC';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

console.log('初始化成功')

var query = new AV.Query('Message');
query.find().then(function (messages) {
  let array = messages.map((item)=>item.attributes)
  array.forEach((item)=>{
    let li = document.createElement('li')
    li.innerText = item.name +':  ' + item.comment
    let messageList = document.querySelector('#messageList')
    messageList.appendChild(li)
  })
});

let myForm = document.querySelector('#postMessage')

myForm.addEventListener('submit',function(xxx){
  xxx.preventDefault()
  let comment = myForm.querySelector('input[name=comment]').value
  let name = myForm.querySelector('input[name=name]').value
  var Message = AV.Object.extend('Message');
  var message = new Message();
  message.save({
    'comment': comment,
    'name':name
  }).then(function(object) {
    let li = document.createElement('li')
    li.innerText = object.attributes.name +':  ' + object.attributes.comment
    let messageList = document.querySelector('#messageList')
    messageList.appendChild(li)
    console.log(object)
  })
})

