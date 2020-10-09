class RecurrentTextCommand {
    constructor(client, channel,{ text, delay}) {
        this.channel = channel;
        this.text = text
        this.client = client;
        this.delay = delay
        this.interval = 0;
        this.start()
    }

    run(){
        // do nothing at the moment, maybe reset the timer?
    }
    
    start(){
        this.interval = setInterval(()=>{
            this.client.say(this.channel, this.text)
        }, this.delay)
    }
    
    stop(){
        clearInterval(this.interval)
    }
}

export default RecurrentTextCommand