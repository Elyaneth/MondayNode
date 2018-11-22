import LevelDb from './leveldb'
import WriteStream from 'level-ws'

export class Metric {
  public timestamp: Date
  public value: number

  constructor(ts: string, v: number) {
    this.timestamp = new Date(ts)
    this.value = v
  }
}

export class MetricsHandler {
    private db: any 

    constructor(dbPath: string) {
      this.db = LevelDb.open(dbPath)
    }

    public save(key: number, metrics: Metric[], callback: (error: Error | null) => void) {
        const stream = WriteStream(this.db)
    
        stream.on('error', callback)
        stream.on('close', callback)
        
        metrics.forEach(m => {
          stream.write({ key: `metric:${key}:${m.timestamp}`, value: m.value })
        })
    
        stream.end()
    }

  public get(key: number, callback: (error: Error | null, result?: Metric[]) => void) {
    const stream = this.db.createReadStream()

    var results: Metric[] = []

    stream.on('error', callback)
    stream.on('end', (err: Error) => {callback(null, results)})
    stream.on('data', (data:any) => {
        const [ , k, timestamp] = data.key.split(":")
        const value = data.value
        if(k != key){
            console.log(k, key)
            console.log(`levedb error: ${data.key} key does not match`)
        }
        else{
        results.push(new Metric(timestamp,value))
        }
    })
  }
  
}