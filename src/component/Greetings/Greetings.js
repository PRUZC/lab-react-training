import BoxBordered from '../box-bordered/box-bordered';

function Greetings({className, lang, children}) {

    let greeting;
    switch (lang) {
      case 'de':
        greeting = 'Hallo';
        break;
      case 'es':
        greeting = 'Hola';
        break;
      case 'en':
        greeting = 'Hello';
        break;
      case 'fr':
      default:
        greeting = 'Bonjour';
        break;
    }


    return (

      <BoxBordered className={className}>{greeting} {children}!</BoxBordered>

    );
}

export default Greetings;