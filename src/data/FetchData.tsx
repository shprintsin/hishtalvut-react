import { SITE_LAYOUT } from '../components/Globals';
import INFODATA from './infodata.json'
import STRUCTURE from './data.json';
import { convertArray } from '../utils/convertArrayLink';

export function SiteStructure() {
    const FooterLinks=convertArray(STRUCTURE.footer.links);
    const SiteLayout = {
        blocks:{
            welcome:{
                title:`
                ברוכים הבאים לפורום להשתלבות
                `,
                content:`
                הפורום להשתלבות היא יוזמה של יוצאי החברה החרדית לטובת עידוד וקידום השתלבות צעירים מהחברה החרדית בהשכלה איכותית על ידי יצירת מוסדות שיאפשרו השתלבות איכותית ושוויונית לכלל בוגרי החינוך החרדי לאורך זמן.
            `            },
            tutorials:{
            title:STRUCTURE.blocks.tutorials.title,
            content:STRUCTURE.blocks.tutorials.data
            }
            
        },
        Footer: {
            Links: FooterLinks
        }
    };
    return SiteLayout;
}

