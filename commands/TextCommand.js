class TextCommand {
    constructor(client,channel,{ text}) {
        this.channel = channel;
        this.text = text
        this.client = client;
    }
    
    run(){
        this.client.say(this.channel, this.text)
    }
}

export default TextCommand