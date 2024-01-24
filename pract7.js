const{EventEmitter}=require('events')
const emitter=new EventEmitter();
emitter.on('messagelogged',function(){
    console.log('listner called');
});
emitter.emit('messagelogged');


