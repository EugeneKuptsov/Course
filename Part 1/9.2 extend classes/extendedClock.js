class Clock {
  
    constructor(templateObj) {
        this.classTemplate = templateObj.template;        
    }
    
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.classTemplate
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(timer);
    }
  
    start() {
      this.render();
      let timer = setInterval(this.render.bind(this), 1000);
    }
  
  }

class ExtendedClock extends Clock {

    start(ms) {
        super.render();
        this.timer = setInterval(() => this.render(), ms == undefined ? 1000 : ms);
      } 

}

superClock = new ExtendedClock({template: 'h:m:s'});
superClock.start();