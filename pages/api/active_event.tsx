
import db from '../../utils/db';

export default async function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: FirebaseFirestore.DocumentData | undefined): void; new(): any; }; }; } ) {

    const snapshot = await db.collection('event').doc("active event").get();

    if(snapshot.data() == null){
      res.status(404).json({error : "Not Found Active Event"})
    }
    else{
    res.status(200).json(snapshot.data())
    }

}