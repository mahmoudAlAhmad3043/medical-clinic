import say from 'say';

export class Speaker {
  private static queue: (() => Promise<void>)[] = [];
  private static isRunning = false;

  public static enqueue(text: string): void {
    const task = () => this.speakAsync(text);
    this.queue.push(task);
    this.runQueue();
  }

  private static async runQueue() {
    if (this.isRunning) return;
    this.isRunning = true;

    while (this.queue.length > 0) {
      const task = this.queue.shift();
      if (task) await task();
    }

    this.isRunning = false;
  }

  private static speakAsync(message:string='',freq:number=1): Promise<void> {
    return new Promise<void>((resolve,reject) => {
    say.speak(message,'Microsoft Zira Desktop',freq,(err)=>{
      if (err) reject(err)
      else resolve()
    })
  })
  }
}