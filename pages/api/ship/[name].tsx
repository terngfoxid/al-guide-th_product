
import db from '../../../utils/db';

export default async function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: FirebaseFirestore.DocumentData | undefined): void; new(): any; }; }; } ) {

  //example /api/ship/Allen_M_Sumner
  //ex.2 /api/ship/Allen%20M%20Sumner
  const {
    query: { name },
    method,
  } = req

  const docname=name.replaceAll("_"," ").toLowerCase();

    const snapshot = await db.collection('ship').doc(docname).get();

    if(snapshot.data() == null){
      res.status(404).json({error : "Not Found Ship"})
    }
    else{
    res.status(200).json(snapshot.data())
    }

}