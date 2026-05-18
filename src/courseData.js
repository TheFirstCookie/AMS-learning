export const lessons = [
  {
    id: 'entitati',
    title: 'Entități UML',
    kicker: 'Baza limbajului',
    estimated: '12 min',
    color: '#1f8a70',
    summary:
      'UML folosește entități pentru a descrie părțile statice, dinamice, organizaționale și explicative ale unui sistem.',
    keyIdeas: [
      'Entitățile de structură sunt substantivele UML: clase, interfețe, cazuri de utilizare, colaborări, clase active, componente și noduri.',
      'Entitățile de comportament sunt verbele UML: interacțiunea și automatul.',
      'Entitatea de grupare este pachetul, folosit pentru organizarea modelului.',
      'Entitatea de adnotare este nota, folosită pentru comentarii și restricții.',
    ],
    details: [
      {
        term: 'Clasa',
        body: 'Descrie o mulțime de obiecte cu aceleași atribute, metode și sintaxă. Se notează ca dreptunghi cu trei zone: nume, atribute, metode. Vizibilitatea este public (+), private (-), protected (#).',
      },
      {
        term: 'Interfața',
        body: 'Totalitate de operații care definesc serviciile oferite de o clasă sau componentă. Nu conține atribute, stări sau implementarea operațiilor.',
      },
      {
        term: 'Caz de utilizare',
        body: 'Descrie o succesiune de acțiuni executate de sistem care produce un rezultat semnificativ pentru un actor.',
      },
      {
        term: 'Componentă și nod',
        body: 'Componenta reprezintă partea fizică a sistemului care realizează interfețe. Nodul este un dispozitiv sau procesor existent în timpul funcționării programului.',
      },
    ],
    diagram: 'entities',
    check: [
      'Pot enumera cele 4 tipuri de entități UML.',
      'Pot diferenția clasa, interfața, componenta și nodul.',
      'Pot explica de ce interacțiunea este entitate de comportament.',
    ],
    flashcards: [
      { front: 'Care sunt cele 4 tipuri de entități UML?', back: 'Structură, comportament, grupare și adnotare.' },
      { front: 'Ce reprezintă o clasă în UML?', back: 'O descriere pentru obiecte cu aceleași atribute și metode.' },
      { front: 'Ce este un pachet?', back: 'Mecanismul de grupare și organizare a entităților UML.' },
      { front: 'Ce sunt entitățile de comportament?', back: 'Componentele dinamice ale UML, adică interacțiunea și automatul.' },
      { front: 'Ce este un caz de utilizare?', back: 'O succesiune de acțiuni executate de sistem pentru un actor.' },
      { front: 'Ce reprezintă componenta?', back: 'Partea fizică a sistemului care corespunde unui set de interfețe.' },
      { front: 'Ce este un nod?', back: 'Un dispozitiv sau procesor existent în timpul funcționării programului.' },
      { front: 'Ce reprezintă nota UML?', back: 'Un element explicativ pentru comentarii și restricții.' },
      { front: 'Ce este automatul în UML?', back: 'Un algoritm care definește succesiunea de stări prin care trece obiectul.' },
      { front: 'Ce sunt actorii, semnalele și utilitele?', back: 'Tipuri de clase menționate în curs.' },
      { front: 'Ce sunt documentele, tabelele și paginile web?', back: 'Tipuri de componente.' },
      { front: 'Cum se leagă o notă de un element UML?', back: 'Prin linie întreruptă.' },
    ],
    quiz: [
      {
        question: 'Entitățile de structură sunt numite în curs...',
        options: ['substantivele UML', 'verbele UML', 'tranzițiile UML', 'restricțiile UML'],
        answer: 0,
      },
      {
        question: 'O notă UML se folosește pentru...',
        options: ['comentarii și restricții', 'moștenire', 'sincronizarea mesajelor', 'execuția componentelor'],
        answer: 0,
      },
      {
        question: 'Care dintre următoarele este entitate de comportament?',
        options: ['Interacțiunea', 'Pachetul', 'Nota', 'Componenta'],
        answer: 0,
      },
      {
        question: 'Clasa activă este o clasă ale cărei elemente...',
        options: ['pot iniția acțiuni de administrare', 'nu au metode', 'sunt doar comentarii', 'există doar în DCU'],
        answer: 0,
      },
      {
        question: 'Interfața definește în principal...',
        options: ['serviciile oferite de o clasă sau componentă', 'memoria nodului', 'multiplicitatea unei asocieri', 'condiția gardă'],
        answer: 0,
      },
      {
        question: 'Entitatea de grupare menționată în curs este...',
        options: ['Package', 'Actor', 'Automat', 'Nod'],
        answer: 0,
      },
      {
        question: 'Entitățile de adnotare sunt părți...',
        options: ['explicative', 'executabile', 'moștenite', 'temporale'],
        answer: 0,
      },
      {
        question: 'Automatul este realizat printr-o succesiune de...',
        options: ['stări și tranziții', 'actori și pachete', 'atribute și note', 'componente și fișiere'],
        answer: 0,
      },
      {
        question: 'Un caz de utilizare este o entitate de...',
        options: ['structură', 'adnotare', 'grupare', 'amplasare'],
        answer: 0,
      },
      {
        question: 'Documentele, fișierele și bibliotecile sunt menționate ca tipuri de...',
        options: ['componente', 'automate', 'tranziții', 'asocieri'],
        answer: 0,
      },
    ],
  },
  {
    id: 'relatii',
    title: 'Relații UML',
    kicker: 'Cum se leagă elementele',
    estimated: '10 min',
    color: '#b85c38',
    summary:
      'Relațiile UML explică dependența, comunicarea, moștenirea și realizarea contractelor dintre entități.',
    keyIdeas: [
      'Dependența arată că schimbarea unei entități independente poate modifica o entitate dependentă.',
      'Asocierea este o legătură semantică dintre entități și poate include roluri, multiplicități și direcție.',
      'Agregarea și compoziția sunt forme speciale de asociere între întreg și parte.',
      'Generalizarea exprimă moștenirea, iar realizarea exprimă îndeplinirea unui contract, de obicei o interfață.',
    ],
    details: [
      {
        term: 'Dependență',
        body: 'Linie întreruptă cu săgeată spre elementul independent. Exemplu conceptual: Studentul depinde de Profesor.',
      },
      {
        term: 'Asociere',
        body: 'Linie continuă care poate avea nume, roluri, multiplicități și direcție. Multiplicități frecvente: 0, 0..1, 1, 0..*, 1..*, *.',
      },
      {
        term: 'Agregare vs compoziție',
        body: 'Agregarea are romb gol la întreg; părțile pot exista separat. Compoziția are romb plin; părțile nu pot exista fără întreg.',
      },
      {
        term: 'Realizare',
        body: 'Linie întreruptă cu triunghi gol. Se folosește între interfață și clasa/componenta care o realizează sau între caz de utilizare și colaborare.',
      },
    ],
    diagram: 'relations',
    check: [
      'Pot recunoaște diferența dintre agregare și compoziție.',
      'Pot explica direcția săgeții la dependență.',
      'Pot alege relația potrivită între interfață și clasă.',
    ],
    flashcards: [
      { front: 'Ce indică rombul plin?', back: 'Compoziție: partea nu poate exista fără întreg.' },
      { front: 'Ce indică triunghiul gol pe linie continuă?', back: 'Generalizare, adică moștenire.' },
      { front: 'Ce este realizarea?', back: 'O entitate garantează/îndeplinește contractul definit de alta.' },
      { front: 'Ce este dependența?', back: 'O relație în care schimbarea elementului independent afectează elementul dependent.' },
      { front: 'Ce este asocierea?', back: 'O legătură semantică dintre două entități.' },
      { front: 'Unde se pune rombul la agregare?', back: 'La elementul întreg.' },
      { front: 'Ce înseamnă multiplicitatea 1..*?', back: 'Unul sau mai multe obiecte.' },
      { front: 'Când se folosește realizarea?', back: 'Între interfață și clasa/componenta care o realizează sau între caz de utilizare și colaborare.' },
      { front: 'Ce indică săgeata la dependență?', back: 'Săgeata indică spre elementul independent.' },
      { front: 'Ce poate conține o asociere?', back: 'Nume, roluri, multiplicități și direcție.' },
      { front: 'Ce arată triunghiul hașurat la asociere?', back: 'Cine trimite primul mesajul.' },
      { front: 'Care este diferența scurtă agregare/compoziție?', back: 'În agregare partea poate exista separat; în compoziție nu.' },
    ],
    quiz: [
      {
        question: 'În compoziție, partea componentă...',
        options: ['nu poate exista fără întreg', 'trimite mereu primul mesaj', 'este actor extern', 'este pseudo-stare'],
        answer: 0,
      },
      {
        question: 'Generalizarea exprimă...',
        options: ['specializare și moștenire', 'comentarii', 'paralelizare', 'distrugerea obiectului'],
        answer: 0,
      },
      {
        question: 'Agregarea se notează cu...',
        options: ['romb nehașurat la întreg', 'triunghi plin la copil', 'linie întreruptă cu X', 'cerc negru final'],
        answer: 0,
      },
      {
        question: 'Dependența este desenată ca...',
        options: ['linie întreruptă cu săgeată', 'dreptunghi cu trei secții', 'cub', 'elipsă cu linie întreruptă'],
        answer: 0,
      },
      {
        question: 'În asociere, rolul este format din...',
        options: ['nivel de acces și nume', 'eveniment și gardă', 'pachet și notă', 'fork și join'],
        answer: 0,
      },
      {
        question: 'Realizarea se notează prin...',
        options: ['linie întreruptă cu triunghi nehașurat', 'linie continuă cu romb plin', 'linie punctată verticală', 'dreptunghi cu colț îndoit'],
        answer: 0,
      },
      {
        question: 'Săgeata dependenței este orientată spre...',
        options: ['entitatea independentă', 'entitatea dependentă', 'actor', 'pachet'],
        answer: 0,
      },
      {
        question: 'Asocierea unidirecțională este reprezentată prin...',
        options: ['linie continuă cu săgeată', 'linie întreruptă cu triunghi', 'romb hașurat fără linie', 'cerc negru'],
        answer: 0,
      },
      {
        question: 'Multiplicitatea 0..1 înseamnă...',
        options: ['zero sau un obiect', 'exact un obiect', 'unul sau mai multe', 'orice număr, dar minimum doi'],
        answer: 0,
      },
      {
        question: 'Realizarea poate fi între caz de utilizare și...',
        options: ['colaborarea care îl realizează', 'pseudo-starea finală', 'partiția activității', 'lifeline'],
        answer: 0,
      },
    ],
  },
  {
    id: 'use-case',
    title: 'Diagrama Cazului de Utilizare',
    kicker: 'Funcționalitatea sistemului',
    estimated: '14 min',
    color: '#5b5f97',
    summary:
      'DCU descrie ce va executa sistemul, actorii care îl folosesc și serviciile oferite de sistem.',
    keyIdeas: [
      'DCU ajută la determinarea limitelor sistemului și a contextului domeniului modelat.',
      'Actorul este extern sistemului și interacționează cu el pentru a atinge un scop.',
      'Cazul de utilizare se numește cu verb sau frază verbală și descrie un serviciu al sistemului.',
      'Relațiile specifice sunt asociere, extindere, generalizare și includere.',
    ],
    details: [
      {
        term: 'Actor',
        body: 'Poate fi om, alt sistem, dispozitiv tehnic sau program. Uneori se notează ca o clasă cu stereotipul «actor».',
      },
      {
        term: 'Caz de utilizare',
        body: 'Elipsă cu linie continuă. Definește comportamentul observabil al sistemului fără a descrie structura internă.',
      },
      {
        term: 'Interfață în DCU',
        body: 'Cerc mic, de regulă cu nume de forma I+Nume. Specifică operații vizibile în exteriorul sistemului.',
      },
      {
        term: 'Include și extend',
        body: 'Include adaugă comportament obligatoriu/refolosit; extend adaugă comportament condiționat. În curs sunt tratate ca stereotipuri ale dependenței.',
      },
    ],
    diagram: 'useCase',
    check: [
      'Pot identifica actorii externi ai unui sistem.',
      'Pot formula cazuri de utilizare cu verbe.',
      'Pot separa include de extend în exemple simple.',
    ],
    flashcards: [
      { front: 'Ce descrie DCU?', back: 'Destinația funcțională a sistemului: ce execută sistemul.' },
      { front: 'Cum trebuie numit un caz de utilizare?', back: 'Cu un verb sau o frază verbală.' },
      { front: 'Ce este actorul?', back: 'O entitate externă care interacționează cu sistemul.' },
      { front: 'Care este scopul actorului?', back: 'Să utilizeze funcționalitățile sistemului pentru atingerea unui scop.' },
      { front: 'Ce poate fi actor?', back: 'Om, sistem, instalație tehnică sau produs program.' },
      { front: 'Ce relații apar în DCU?', back: 'Asociere, extindere, generalizare și includere.' },
      { front: 'Ce este stereotipul în UML?', back: 'Un substantiv scris între ghilimele sau între « ».' },
      { front: 'Ce definește interfața în DCU?', back: 'Operații care asigură servicii sau funcționalitate pentru actori.' },
      { front: 'Ce scop are DCU la începutul proiectării?', back: 'Determină limitele sistemului și contextul domeniului de modelare.' },
      { front: 'Ce urmează după modelul conceptual?', back: 'Detalierea în forme logice și fizice ale sistemului.' },
      { front: 'Poate un caz de utilizare colabora cu mai mulți actori?', back: 'Da, un caz de utilizare poate oferi servicii mai multor actori.' },
      { front: 'Ce este trace în curs?', back: 'Un include istoric, adică ceea ce a fost făcut deja.' },
    ],
    quiz: [
      {
        question: 'Scopul principal al DCU este să descrie...',
        options: ['funcționalitatea sistemului', 'codul sursă', 'schema bazei de date', 'memoria procesorului'],
        answer: 0,
      },
      {
        question: 'Un caz de utilizare se reprezintă prin...',
        options: ['elipsă', 'romb plin', 'cub', 'linie verticală punctată'],
        answer: 0,
      },
      {
        question: 'Actorul este față de sistem...',
        options: ['extern', 'mereu intern', 'o stare compusă', 'o metodă privată'],
        answer: 0,
      },
      {
        question: 'În DCU, două cazuri de utilizare pentru aceeași entitate...',
        options: ['nu colaborează prin asociere', 'trebuie să fie noduri', 'sunt mereu componente', 'au obligatoriu lifeline'],
        answer: 0,
      },
      {
        question: 'Interfața într-o DCU se notează de obicei cu nume de forma...',
        options: ['I+Nume', 'Nume()', '#Nume', 'O:C::P'],
        answer: 0,
      },
      {
        question: 'Relația include indică...',
        options: ['comportament inclus într-un alt caz de utilizare', 'partea fizică a sistemului', 'sfârșitul liniei de viață', 'o clasă activă'],
        answer: 0,
      },
      {
        question: 'Un actor poate fi...',
        options: ['un alt sistem sau produs program', 'doar un om', 'doar o clasă activă', 'doar o notă'],
        answer: 0,
      },
      {
        question: 'DCU este utilă pentru formularea...',
        options: ['cerințelor funcționale comune', 'codului mașină', 'doar a atributelor private', 'doar a stărilor finale'],
        answer: 0,
      },
      {
        question: 'Cazul de utilizare descrie comportamentul fără a cerceta...',
        options: ['structura internă', 'numele actorului', 'limita sistemului', 'relația de asociere'],
        answer: 0,
      },
      {
        question: 'Extinderea și includerea sunt tratate în curs ca stereotipuri ale...',
        options: ['dependenței', 'compoziției', 'agregării', 'activității'],
        answer: 0,
      },
    ],
  },
  {
    id: 'secventa',
    title: 'Diagrama de Secvență',
    kicker: 'Mesaje în timp',
    estimated: '13 min',
    color: '#0f7c80',
    summary:
      'Diagrama de secvență urmărește colaborarea obiectelor în timp, prin mesaje și linii de viață.',
    keyIdeas: [
      'Obiectul este instanță a clasei și se notează în dreptunghi.',
      'Linia verticală punctată arată timpul de viață al obiectului.',
      'Focus control arată perioada când obiectul este activ.',
      'Mesajele pot avea stereotipuri precum call, return, create, destroy și send.',
    ],
    details: [
      {
        term: 'Numele obiectului',
        body: 'Poate include nume obiect, clasă și pachet: O:C::P, O:C, :C, :C::P sau O pentru obiect numit fără clasă.',
      },
      {
        term: 'Distrugerea obiectului',
        body: 'Simbolul X marchează distrugerea obiectului și finalul liniei lui de viață.',
      },
      {
        term: 'Tipuri de mesaje',
        body: 'Instrumentele pot diferenția mesaje sincrone, asincrone, return, timeout, balking sau chemarea procedurii.',
      },
      {
        term: 'Restricții de timp',
        body: 'În UML, informația scrisă între acolade {} este tratată ca restricție de timp.',
      },
    ],
    diagram: 'sequence',
    check: [
      'Pot citi ordinea mesajelor de sus în jos.',
      'Pot explica ce înseamnă lifeline și focus control.',
      'Pot recunoaște create, destroy, send, call și return.',
    ],
    flashcards: [
      { front: 'Ce reprezintă linia verticală punctată?', back: 'Timpul de viață al obiectului.' },
      { front: 'Ce reprezintă X pe lifeline?', back: 'Obiectul a fost distrus.' },
      { front: 'Ce face stereotipul create?', back: 'Creează un obiect pentru interacțiune.' },
      { front: 'Ce este obiectul într-o diagramă de secvență?', back: 'O instanță a unei clase.' },
      { front: 'Ce arată focus control?', back: 'Timpul în care obiectul este activ.' },
      { front: 'Ce face stereotipul return?', back: 'Întoarce valoarea operației executate obiectului apelant.' },
      { front: 'Ce face stereotipul send?', back: 'Expediază un semnal sau mesaj.' },
      { front: 'Cum se citește o diagramă de secvență?', back: 'În principal de sus în jos, după ordinea mesajelor în timp.' },
      { front: 'Ce înseamnă O:C::P?', back: 'Obiectul O, de clasă C, din pachetul P.' },
      { front: 'Ce înseamnă O: în notația obiectelor?', back: 'Obiect orfan: are nume, dar clasa nu este specificată.' },
      { front: 'Ce mesaje folosește Enterprise Architect în curs?', back: 'Sincronă, asincronă și return.' },
      { front: 'Ce este call?', back: 'Invocarea unei operații sau proceduri a obiectului destinatar.' },
    ],
    quiz: [
      {
        question: 'Diagrama de secvență pune accent pe...',
        options: ['ordinea temporală a mesajelor', 'fișiere executabile', 'pachete', 'subdiviziuni de business'],
        answer: 0,
      },
      {
        question: 'În acolade {} se scriu...',
        options: ['restricții de timp', 'nume de pachete', 'atribute private', 'multiplicități standard'],
        answer: 0,
      },
      {
        question: 'Obiectul anonim al clasei C poate fi notat...',
        options: [':C', 'O:', 'C::', '+C'],
        answer: 0,
      },
      {
        question: 'Stereotipul destroy indică...',
        options: ['distrugerea obiectului', 'crearea unei interfețe', 'agregarea', 'condiția gardă'],
        answer: 0,
      },
      {
        question: 'Linia de viață aparține...',
        options: ['unui obiect', 'unei note', 'unei partiții', 'unui pachet'],
        answer: 0,
      },
      {
        question: 'Diagrama de secvență este o diagramă de...',
        options: ['interacțiune', 'amplasare', 'componente', 'adnotare'],
        answer: 0,
      },
      {
        question: 'Notația O:C::P înseamnă...',
        options: ['obiect, clasă și pachet', 'operator, componentă și port', 'actor, sistem și caz', 'stare, tranziție și acțiune'],
        answer: 0,
      },
      {
        question: 'Focus control marchează...',
        options: ['perioada când obiectul este activ', 'limita sistemului', 'multiplicitatea', 'agregarea'],
        answer: 0,
      },
      {
        question: 'Stereotipul call indică...',
        options: ['invocarea unei operații', 'distrugerea pachetului', 'crearea unui actor', 'unirea fluxurilor'],
        answer: 0,
      },
      {
        question: 'În Enterprise Architect, mesajele menționate sunt...',
        options: ['sincronă, asincronă, return', 'timeout, balking, package', 'fork, join, table', 'actor, include, note'],
        answer: 0,
      },
    ],
  },
  {
    id: 'colaborare',
    title: 'Diagrama de Colaborare',
    kicker: 'Mesaje în spațiu',
    estimated: '12 min',
    color: '#7a4f9f',
    summary:
      'Diagrama de colaborare arată obiectele, legăturile structurale dintre ele și mesajele numerotate.',
    keyIdeas: [
      'Față de diagrama de secvență, colaborarea evidențiază relațiile structurale dintre obiecte.',
      'Timpul nu este desenat prin lifeline, dar mesajele pot fi numerotate.',
      'Multiobiectul reprezintă o mulțime de obiecte la o terminație a asocierii.',
      'Obiectele pot fi pasive sau active, iar obiectele compuse au structură internă.',
    ],
    details: [
      {
        term: 'Numele obiectului',
        body: 'Poate include nume, rol, clasă și pachet: O/R:C::P, /R:C, :C, O/R sau O:.',
      },
      {
        term: 'Obiect activ',
        body: 'Are flux de control propriu și poate inițializa activitate de control.',
      },
      {
        term: 'Obiect pasiv',
        body: 'Folosește date primite și poate transmite semnale pe durata realizării cererii, dar nu are activitate de control proprie.',
      },
      {
        term: 'Stereotipuri de legături',
        body: 'association, parameter, local, global și self. self indică o relație recursivă.',
      },
    ],
    diagram: 'collaboration',
    check: [
      'Pot explica de ce mesajele sunt numerotate.',
      'Pot diferenția obiect activ și pasiv.',
      'Pot recunoaște nivelul de specificare și nivelul de exemplu.',
    ],
    flashcards: [
      { front: 'Ce este multiobiectul?', back: 'O mulțime de obiecte la una dintre terminațiile asocierii.' },
      { front: 'Ce indică stereotipul self?', back: 'O relație recursivă.' },
      { front: 'Care sunt cele două niveluri?', back: 'Nivel de specificare și nivel de exemplu.' },
      { front: 'Ce evidențiază diagrama de colaborare?', back: 'Interacțiunea dintre obiecte și relațiile structurale dintre ele.' },
      { front: 'Cum se urmărește timpul în colaborare?', back: 'Prin numerotarea mesajelor.' },
      { front: 'Ce este obiectul compus?', back: 'Un obiect container cu structură proprie și flux intern de control.' },
      { front: 'Ce indică stereotipul local?', back: 'O variabilă locală a metodei, vizibilă doar în context limitat.' },
      { front: 'Ce indică stereotipul parameter?', back: 'Un obiect transmis ca parametru al unei metode.' },
      { front: 'Ce reprezintă colaborarea?', back: 'O mulțime de obiecte care interacționează într-un context comun.' },
      { front: 'Care este scopul colaborării?', back: 'Specificarea realizării celor mai semnificative operații în sistem.' },
      { front: 'Ce se reprezintă la nivel de exemplu?', back: 'Obiectele și legăturile dintre ele cu mesaje.' },
      { front: 'Ce poate include numele obiectului în colaborare?', back: 'Nume obiect, rol de clasă, tip clasă și tip pachet.' },
    ],
    quiz: [
      {
        question: 'În diagrama de colaborare, timpul este redat în principal prin...',
        options: ['numerotarea mesajelor', 'lifeline vertical', 'romb plin', 'pseudo-stare finală'],
        answer: 0,
      },
      {
        question: 'Obiectul activ...',
        options: ['are flux de control propriu', 'nu poate trimite mesaje', 'este mereu anonim', 'este doar o notă'],
        answer: 0,
      },
      {
        question: 'Obiectul pasiv...',
        options: ['folosește date transmise și nu are control propriu', 'are obligatoriu două lifeline-uri', 'este o componentă DLL', 'este întotdeauna actor'],
        answer: 0,
      },
      {
        question: 'Relația dintre multiobiect și obiectul component este...',
        options: ['compoziția', 'include', 'return', 'fork'],
        answer: 0,
      },
      {
        question: 'Nivelul de specificare reprezintă...',
        options: ['rolurile clasificatoarelor și ale asocierilor', 'doar fișiere executabile', 'doar stări finale', 'doar comentarii'],
        answer: 0,
      },
      {
        question: 'Stereotipul global indică...',
        options: ['o variabilă vizibilă pentru toate elementele diagramei', 'un actor extern', 'o pseudo-stare inițială', 'o interfață fără operații'],
        answer: 0,
      },
      {
        question: 'Diagrama de colaborare reprezintă structural...',
        options: ['relațiile dintre obiecte', 'doar timpul de viață vertical', 'doar fișiere DLL', 'doar stări compuse'],
        answer: 0,
      },
      {
        question: 'Obiectul compus mai este numit...',
        options: ['obiect container', 'actor anonim', 'interfață', 'pachet fizic'],
        answer: 0,
      },
      {
        question: 'La nivel de exemplu sunt reprezentate...',
        options: ['obiecte și legături cu mesaje', 'doar clase abstracte', 'doar componente executabile', 'doar note'],
        answer: 0,
      },
      {
        question: 'Stereotipul association este...',
        options: ['stereotip implicit', 'condiție gardă', 'pseudo-stare', 'componentă de executare'],
        answer: 0,
      },
    ],
  },
  {
    id: 'clase',
    title: 'Diagrama Claselor',
    kicker: 'Structura statică POO',
    estimated: '15 min',
    color: '#2f6f4e',
    summary:
      'Diagrama claselor modelează structura statică a sistemului: clase, interfețe, pachete, obiecte și relațiile dintre ele.',
    keyIdeas: [
      'Clasa este desenată ca dreptunghi cu nume, atribute și metode.',
      'Atributul poate avea vizibilitate, nume, multiplicitate, tip și valoare inițială.',
      'Metoda poate avea vizibilitate, nume, parametri și tip întors.',
      'Relațiile principale sunt dependență, asociere, generalizare și realizare.',
    ],
    details: [
      {
        term: 'Atribut',
        body: 'Formă: NivelAcces nume[multiplicitate] : Tip = valoare inițială sau {constantă}.',
      },
      {
        term: 'Metodă',
        body: 'Formă: NivelAcces nume(lista parametrilor) : Tip valoare întoarsă.',
      },
      {
        term: 'Stereotipuri la dependență',
        body: 'access, bind, derive, import și refine. Ele descriu felul în care clasa client folosește clasa sursă.',
      },
      {
        term: 'Restricții la generalizare',
        body: '{complete}, {incomplete}, {disjoint} și {overlapping}. Ele arată completitudinea și suprapunerea descendenților.',
      },
    ],
    diagram: 'class',
    check: [
      'Pot scrie corect vizibilitatea atributelor și metodelor.',
      'Pot alege multiplicitatea potrivită într-o asociere.',
      'Pot explica restricțiile complete/incomplete și disjoint/overlapping.',
    ],
    flashcards: [
      { front: 'Ce conține o clasă UML?', back: 'Nume, atribute și metode.' },
      { front: 'Ce înseamnă # la vizibilitate?', back: 'Protected.' },
      { front: 'Ce înseamnă {overlapping}?', back: 'Descendenții se pot suprapune, deci un obiect poate aparține mai multor clase descendente.' },
      { front: 'Ce înseamnă + la vizibilitate?', back: 'Public.' },
      { front: 'Ce înseamnă - la vizibilitate?', back: 'Private.' },
      { front: 'Ce descrie diagrama claselor?', back: 'Structura statică a sistemului în terminologia POO.' },
      { front: 'Ce înseamnă {complete}?', back: 'În diagramă sunt toate clasele descendente și altele nu mai pot exista.' },
      { front: 'Ce înseamnă {disjoint}?', back: 'Clasele descendente nu pot avea obiecte comune.' },
      { front: 'Ce înseamnă {incomplete}?', back: 'Nu sunt reprezentate toate clasele descendente.' },
      { front: 'Ce este «access»?', back: 'Indicator de accesibilitate pentru atributele și operațiile clasei sursă.' },
      { front: 'Ce este «bind»?', back: 'Indică folosirea șabloanelor pentru parametrizarea clasei client.' },
      { front: 'Ce este «refine»?', back: 'Indică faptul că o clasă client precizează clasa sursă.' },
    ],
    quiz: [
      {
        question: 'Diagrama claselor NU descrie direct...',
        options: ['aspectul temporal al funcționării', 'atribute', 'metode', 'asocieri'],
        answer: 0,
      },
      {
        question: 'Stereotipul «import» la dependență indică...',
        options: ['preluarea atributelor/metodelor publice ale clasei sursă', 'distrugerea obiectului', 'stare finală', 'paralelizare fork'],
        answer: 0,
      },
      {
        question: 'O metodă UML poate include...',
        options: ['nume, parametri și tip întors', 'doar multiplicitate', 'doar actor', 'doar romb'],
        answer: 0,
      },
      {
        question: 'Atributul unei clase poate avea...',
        options: ['tip și valoare inițială', 'lifeline și X', 'fork și join', 'doar stereotip actor'],
        answer: 0,
      },
      {
        question: 'Stereotipul «derive» indică...',
        options: ['atribute calculate după atributele clasei sursă', 'o stare finală', 'un mesaj asincron', 'o partiție'],
        answer: 0,
      },
      {
        question: 'Multiplicitatea implicită într-o asociere este...',
        options: ['1', '0', '0..*', 'n..m'],
        answer: 0,
      },
      {
        question: 'Restricția {incomplete} înseamnă că...',
        options: ['nu sunt reprezentate toate clasele descendente', 'nu există clase descendente', 'toate clasele sunt interfețe', 'clasa nu are metode'],
        answer: 0,
      },
      {
        question: 'Restricția {complete} indică...',
        options: ['toate clasele descendente sunt reprezentate', 'obiectul a fost distrus', 'fluxuri paralele', 'interfață fără atribute'],
        answer: 0,
      },
      {
        question: 'Stereotipul «bind» indică folosirea...',
        options: ['șabloanelor', 'pseudo-stărilor', 'actorilor', 'nodurilor fizice'],
        answer: 0,
      },
      {
        question: 'În diagrama claselor pot fi folosite...',
        options: ['toate cele 4 tipuri de relații UML', 'doar include și extend', 'doar fork și join', 'doar create și destroy'],
        answer: 0,
      },
    ],
  },
  {
    id: 'stari-activitati',
    title: 'Stări și Activități',
    kicker: 'Comportament logic',
    estimated: '16 min',
    color: '#9a6b20',
    summary:
      'Diagramele de stare descriu ciclul de viață al unui obiect, iar diagramele de activități descriu fluxul operațiilor.',
    keyIdeas: [
      'Starea durează, tranziția se consideră instantanee.',
      'Pseudo-starea inițială marchează începutul, iar pseudo-starea finală marchează sfârșitul ciclului de viață.',
      'Tranziția poate avea semnătură de eveniment, condiție gardă și acțiune.',
      'În activități, fork împarte fluxul în ramuri paralele, iar join le unește.',
    ],
    details: [
      {
        term: 'Automat',
        body: 'Formalism pentru modelarea comportamentului unui model sau sistem. În practică se exprimă prin diagrama de stare.',
      },
      {
        term: 'Tranziție',
        body: 'Relație dintre două stări consecutive. Forma completă: eveniment[condiție gardă]/acțiune.',
      },
      {
        term: 'Stare compusă',
        body: 'Stare formată din două sau mai multe sub-stări. Sub-stările pot fi disjuncte sau concurente.',
      },
      {
        term: 'Partiție',
        body: 'În activități, partițiile împart responsabilitatea pe subdiviziuni sau roluri. Tranzițiile pot traversa liniile partiției.',
      },
    ],
    diagram: 'activity',
    check: [
      'Pot nota o tranziție cu eveniment, gardă și acțiune.',
      'Pot explica diferența dintre stare și tranziție.',
      'Pot folosi fork/join într-un proces paralel.',
    ],
    flashcards: [
      { front: 'Câte pseudo-stări inițiale poate avea o diagramă de stare?', back: 'Una singură, cu o singură tranziție care iese din ea.' },
      { front: 'Ce este condiția gardă?', back: 'O condiție verificată true/false înainte de tranziție.' },
      { front: 'Ce face fork?', back: 'Divide fluxul în mai multe ramuri paralele.' },
      { front: 'Ce este starea?', back: 'O situație în care obiectul se află o durată semnificativă în ciclul său de viață.' },
      { front: 'Ce este tranziția?', back: 'Trecerea dintre două stări consecutive.' },
      { front: 'Ce face join?', back: 'Unește mai multe fluxuri paralele într-un singur flux.' },
      { front: 'Ce sunt sub-stările disjuncte?', back: 'Sub-stări în care obiectul poate fi doar într-una la un moment dat.' },
      { front: 'Ce sunt partițiile?', back: 'Zone care împart responsabilitatea activităților pe subdiviziuni sau roluri.' },
      { front: 'Ce sunt sub-stările concurente?', back: 'Sub-automate care pot fi executate în paralel.' },
      { front: 'Ce este starea compusă?', back: 'O stare alcătuită din două sau mai multe sub-stări.' },
      { front: 'Ce tip de tranziții are diagrama de activități?', back: 'Tranziții netrigger.' },
      { front: 'Ce poate conține obiectul în diagrama de activități?', back: 'Nume și caracteristici scrise între paranteze pătrate.' },
    ],
    quiz: [
      {
        question: 'În diagrama de stare, tranziția este considerată...',
        options: ['instantanee', 'mai lungă decât starea', 'componentă fizică', 'actor extern'],
        answer: 0,
      },
      {
        question: 'Join are de obicei...',
        options: ['mai multe intrări și o ieșire', 'o intrare și mai multe ieșiri', 'doar atribute', 'doar roluri'],
        answer: 0,
      },
      {
        question: 'Fork are de obicei...',
        options: ['o intrare și mai multe ieșiri', 'mai multe intrări și o ieșire', 'doar note', 'doar componente'],
        answer: 0,
      },
      {
        question: 'Forma completă a unei tranziții poate include...',
        options: ['eveniment[condiție]/acțiune', 'clasă::pachet::nod', 'library/table/file', 'rol/multiplicitate/fork'],
        answer: 0,
      },
      {
        question: 'Pseudo-starea finală...',
        options: ['marchează sfârșitul ciclului de viață', 'are obligatoriu două ieșiri', 'este o componentă fizică', 'este o interfață'],
        answer: 0,
      },
      {
        question: 'Diagrama de activități este folosită pentru...',
        options: ['modelarea proceselor de executare a operațiilor', 'doar moștenire', 'doar biblioteci DLL', 'doar actori'],
        answer: 0,
      },
      {
        question: 'Sub-stările concurente permit modelarea...',
        options: ['execuțiilor paralele', 'doar comentariilor', 'doar fișierelor sursă', 'doar actorilor externi'],
        answer: 0,
      },
      {
        question: 'Într-o diagramă de stare poate exista...',
        options: ['o singură pseudo-stare inițială', 'oricâte pseudo-stări inițiale fără restricții', 'doar o stare finală obligatorie', 'nici o tranziție'],
        answer: 0,
      },
      {
        question: 'Partițiile sunt separate prin...',
        options: ['linii verticale neîntrerupte', 'romburi hașurate', 'triunghiuri goale', 'cercuri mici'],
        answer: 0,
      },
      {
        question: 'Linia partiției poate fi întretăiată doar de...',
        options: ['tranziție', 'clasă', 'componentă', 'notă'],
        answer: 0,
      },
    ],
  },
  {
    id: 'componente',
    title: 'Diagrama Componentelor',
    kicker: 'Nivel fizic',
    estimated: '11 min',
    color: '#345995',
    summary:
      'Diagrama componentelor transformă modelul logic în elemente fizice: fișiere, biblioteci, executabile, tabele și interfețe.',
    keyIdeas: [
      'Diagramele anterioare sunt mai ales logice; componentele și amplasarea țin de nivelul fizic.',
      'Componenta poate realiza un set de interfețe și reprezintă un element fizic al modelului.',
      'Diagrama ajută la vizualizarea codului sursă, executabilelor, reutilizării și structurii bazelor de date.',
      'Relația principală în diagrama componentelor este dependența.',
    ],
    details: [
      {
        term: 'Componentă la nivel de tip',
        body: 'Arată tipul componentei, de exemplu o bibliotecă sau un fișier.',
      },
      {
        term: 'Componentă la nivel de exemplar',
        body: 'Se notează cu nume componentă : nume exemplar și are numele subliniat.',
      },
      {
        term: 'Tipuri de componente',
        body: 'Componente de regrupare, produse de lucru și componente de executare.',
      },
      {
        term: 'Stereotipuri',
        body: '«library», «table», «file», «document» și «executable». Ele clarifică tipul componentei.',
      },
    ],
    diagram: 'component',
    check: [
      'Pot explica diferența dintre nivel logic și nivel fizic.',
      'Pot enumera scopurile diagramei componentelor.',
      'Pot recunoaște stereotipurile componentelor.',
    ],
    flashcards: [
      { front: 'Care este relația principală în diagrama componentelor?', back: 'Dependența.' },
      { front: 'Ce indică «executable»?', back: 'O componentă de executare.' },
      { front: 'Ce poate reprezenta «table»?', back: 'Un tabel al bazei de date.' },
      { front: 'Ce reprezintă diagrama componentelor?', back: 'Arhitectura fizică a sistemului și dependențele dintre componente.' },
      { front: 'Ce poate fi componentă?', back: 'Fișier text, cod sursă, bibliotecă, fișier dinamic, pagină web sau tabel.' },
      { front: 'Ce indică «library»?', back: 'O bibliotecă dinamică sau statică.' },
      { front: 'Ce indică «document»?', back: 'Un document ca produs de lucru.' },
      { front: 'La ce ajută diagrama componentelor?', back: 'La vizualizarea codului sursă, executabilelor, reutilizării și structurii bazelor de date.' },
      { front: 'Ce sunt componentele de regrupare?', back: 'Componente care specifică executarea funcțiilor sistemului, precum biblioteci dinamice sau pagini web.' },
      { front: 'Ce sunt produsele de lucru?', back: 'Fișiere folosite în dezvoltare, de exemplu .h și .cpp în C++.' },
      { front: 'Ce sunt componentele de executare?', back: 'Artefacte executabile care subliniază conținutul informațional al sistemului.' },
      { front: 'Cum se notează un exemplar de componentă?', back: 'nume componentă : nume exemplar, cu subliniere.' },
    ],
    quiz: [
      {
        question: 'Diagrama componentelor este folosită pentru...',
        options: ['arhitectura fizică a sistemului', 'doar stări anonime', 'doar actorii externi', 'tranziții trigger'],
        answer: 0,
      },
      {
        question: 'Un fișier .h sau .cpp este în curs încadrat ca...',
        options: ['produs de lucru', 'pseudo-stare', 'actor', 'condiție gardă'],
        answer: 0,
      },
      {
        question: 'Elementele principale ale diagramei componentelor sunt...',
        options: ['componenta, interfața și dependența', 'actorul, starea și nota', 'fork, join și lifeline', 'clasa, metoda și X'],
        answer: 0,
      },
      {
        question: 'Stereotipul «file» se referă de regulă la...',
        options: ['fișiere cu textul inițial al programului', 'stări concurente', 'actori externi', 'mesaje return'],
        answer: 0,
      },
      {
        question: 'Componenta poate realiza...',
        options: ['un set de interfețe', 'doar o pseudo-stare finală', 'doar o condiție gardă', 'doar o notă'],
        answer: 0,
      },
      {
        question: 'Componentele de regrupare pot include...',
        options: ['biblioteci dinamice și pagini web', 'sub-stări disjuncte', 'obiecte anonime', 'tranziții netrigger'],
        answer: 0,
      },
      {
        question: 'Stereotipul «library» se referă la...',
        options: ['biblioteci dinamice sau statice', 'pseudo-stări finale', 'roluri de asociere', 'obiecte active'],
        answer: 0,
      },
      {
        question: 'Componentele de executare mai sunt numite uneori...',
        options: ['artefacte', 'partiții', 'sub-stări', 'actori'],
        answer: 0,
      },
      {
        question: 'La nivel fizic, o componentă corespunde adesea unui...',
        options: ['fișier', 'trigger', 'actor', 'rol de clasă'],
        answer: 0,
      },
      {
        question: 'Diagrama componentelor ajută și la reprezentarea sistemelor de...',
        options: ['baze de date', 'stări anonime', 'mesaje return', 'condiții gardă'],
        answer: 0,
      },
    ],
  },
];

export const examChecklist = [
  'Entități: structură, comportament, grupare, adnotare.',
  'Relații: dependență, asociere, generalizare, realizare; agregare și compoziție ca forme speciale de asociere.',
  'DCU: actor extern, caz de utilizare ca serviciu, include/extend/generalizare/asociere.',
  'Secvență: obiect, lifeline, focus control, mesaje call/return/create/destroy/send.',
  'Colaborare: structură între obiecte, mesaje numerotate, multiobiect, obiect activ/pasiv.',
  'Clase: nume, atribute, metode, vizibilități + - # și multiplicități.',
  'Stări: stare, tranziție, pseudo-stări, condiție gardă, stare compusă.',
  'Activități: flux de operații, fork/join, partiții, obiecte.',
  'Componente: nivel fizic, interfețe, dependențe, stereotipuri library/table/file/document/executable.',
];
