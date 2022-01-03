import { Pool } from "pg";


const connectionString = 'postgres://cyenpaqt:xjLnNu--TeXKhg1xD84iCeazl8Az0St3@motty.db.elephantsql.com/cyenpaqt';

const db = new Pool({connectionString})

export default db;