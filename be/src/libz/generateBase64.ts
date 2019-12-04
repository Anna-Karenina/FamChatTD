const misc = require('./../core/storage')

const generateBase64 :any = (fileidarr :any) =>{
  return  new Promise( (resolve, reject) => {
    misc.Atach.findById({_id : fileidarr }, (error:any, attachment: any) => {
      const readstream = attachment.read();
      const bufs:any = []

      readstream.on('error',  (e:any) =>{reject(e)});
      readstream.on('data', (chunk: any) => {
        bufs.push(chunk)
      });

      readstream.on('close', ()=>{
        resolve(Buffer.concat(bufs).toString('base64'))
      });
    });
  })
}

export default generateBase64
