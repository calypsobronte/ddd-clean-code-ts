import "dotenv/config";
import './app/database'; // Aca puedes cambiar
import app from './app/app'


function main() {
    app.listen(app.get('port'), () => {console.log(`Server on port ${app.get('port')}`);})
};

main();
