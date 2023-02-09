
import db from '../../../utils/db';

export default async function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: FirebaseFirestore.DocumentData | undefined): void; new(): any; }; }; } ) {

  // /api/type/DD
  const {
    query: { type },
    method,
  } = req

    const snapshot = await db.collection('ship').where('type','==',type).get();

    if(snapshot.empty){
      res.status(404).json({error : "Not Found Data"})
    }
    else{
      const data: FirebaseFirestore.DocumentData | undefined = [] ;
      snapshot.forEach(doc => {
        //console.log(doc.id, '=>', doc.data());
        data.push(doc.data());
      });
      if(data.length == 0){ res.status(404).json({error : "Not Found Data"})}
      else{ res.status(200).json({data}) }
    }

}