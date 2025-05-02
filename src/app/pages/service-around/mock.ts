export type Agent = {
  id: string
  name: string
  lastName: string
  profession: {
    title: string
    key: string
  }
  description: string
  phone: string
  email: string
  address: string
  photo: string
  verified: {
    value: boolean
    title: string
  }
  agency?: {
    name: string
    type: string
    address: string
    phone: string
    email: string
    website: string
  }
}

export const realEstateAgents: Agent[] = [
  {
    id: '1',
    name: 'Johanna',
    lastName: 'Schneider',
    profession: {
      title: 'real-estate.real-estate-agent.title',
      key: 'real-estate-agent',
    },
    description:
      'Mit 12 Jahren Erfahrung als Immobilienmaklerin spezialisiert auf Luxusimmobilien in Wien.',
    phone: '+43 295 730 846',
    email: 'j.schneider@immobilien-experten.at',
    address: '1010 Wien',
    photo: 'https://i.pravatar.cc/300?img=10',
    verified: {
      value: false,
      title: 'real-estate.real-estate-agent.verified-title',
    },
    agency: {
      name: 'ImmoVision GmbH',
      type: 'real-estate-agency',
      address: '1010 Wien, Kärntner Straße 12',
      phone: '+43 1 987 6543',
      email: 'office@immovision.at',
      website: 'https://www.immovision.at',
    },
  },
  {
    id: '2',
    name: 'Maximilian',
    lastName: 'Hofer',
    profession: {
      title: 'service-around.services.real-estate-agent',
      key: 'real-estate-agent',
    },
    description:
      'Experte für Gewerbeimmobilien und Wohnbauprojekte mit über 15 Jahren Erfahrung.',
    phone: '+43 315 822 901',
    email: 'm.hofer@vienna-homes.at',
    address: '1030 Wien',
    photo: 'https://i.pravatar.cc/300?img=20',
    verified: {
      value: true,
      title: 'real-estate.real-estate-agent.verified-title',
    },
    agency: {
      name: 'Vienna Homes OG',
      type: 'real-estate-agency',
      address: '1030 Wien, Landstraßer Hauptstraße 99',
      phone: '+43 1 223 4456',
      email: 'office@viennahomes.at',
      website: 'https://www.viennahomes.at',
    },
  },
  {
    id: '3',
    name: 'Elisabeth',
    lastName: 'Gruber',
    profession: {
      title: 'service-around.services.real-estate-agent',
      key: 'real-estate-agent',
    },
    description:
      'Fokus auf nachhaltige Immobilienprojekte und moderne Stadtentwicklung.',
    phone: '+43 224 672 119',
    email: 'e.gruber@green-realty.at',
    address: '1040 Wien',
    photo: 'https://i.pravatar.cc/300?img=30',
    verified: {
      value: true,
      title: 'real-estate.real-estate-agent.verified-title',
    },
    agency: {
      name: 'Green Realty GmbH',
      type: 'real-estate-agency',
      address: '1040 Wien, Wiedner Hauptstraße 42',
      phone: '+43 1 456 7890',
      email: 'kontakt@green-realty.at',
      website: 'https://www.green-realty.at',
    },
  },
  {
    id: '4',
    name: 'Sebastian',
    lastName: 'Leitner',
    profession: {
      title: 'service-around.services.real-estate-agent',
      key: 'real-estate-agent',
    },
    description:
      'Spezialist für exklusive Neubauwohnungen und hochwertige Anlageimmobilien.',
    phone: '+43 621 884 755',
    email: 's.leitner@elite-properties.at',
    address: '1090 Wien',
    photo: 'https://i.pravatar.cc/300?img=40',
    verified: {
      value: true,
      title: 'real-estate.real-estate-agent.verified-title',
    },
    agency: {
      name: 'Elite Properties GmbH',
      type: 'real-estate-agency',
      address: '1090 Wien, Alser Straße 21',
      phone: '+43 1 112 3344',
      email: 'info@elite-properties.at',
      website: 'https://www.elite-properties.at',
    },
  },
  {
    id: '5',
    name: 'Klara',
    lastName: 'Wagner',
    profession: {
      title: 'service-around.services.real-estate-agent',
      key: 'real-estate-agent',
    },
    description:
      'Ihre Maklerin für charmante Altbauwohnungen und einzigartige Immobilien in Wien.',
    phone: '+43 411 990 563',
    email: 'k.wagner@altbau-traum.at',
    address: '1010 Wien',
    photo: 'https://i.pravatar.cc/300?img=50',
    verified: {
      value: true,
      title: 'real-estate.real-estate-agent.verified-title',
    },
    agency: {
      name: 'Altbau Traum OG',
      type: 'real-estate-agency',
      address: '1010 Wien, Herrengasse 15',
      phone: '+43 1 998 7765',
      email: 'office@altbautraum.at',
      website: 'https://www.altbautraum.at',
    },
  },
]

export const serviceMen = [
  {
    id: '1',
    name: 'Johanna Schneider',
    profession: {
      title: 'service-around.services.estate-taxation',
      key: 'estate-taxation',
    },
    description:
      'Seit 18 Jahren in der Steuerberatung tätig und spezialisiert auf steuerliche Fragen rund um Immobilien.',
    phone: '+43 295 730 846',
    email: 'j.schneider@steuerberatung.at',
    address: '1010 Wien',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '2',
    name: 'Markus Huber',
    profession: {
      title: 'service-around.services.law-firm-estate',
      key: 'law-firm-estate',
    },
    description:
      'Erfahrener Anwalt für Immobilienrecht mit 25 Jahren Berufserfahrung.',
    phone: '+43 198 456 321',
    email: 'm.huber@lawfirm.at',
    address: '4020 Linz',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '3',
    name: 'Anna Lehmann',
    profession: {
      title: 'service-around.services.expert',
      key: 'expert',
    },
    description:
      'Sachverständige für Immobilienbewertung mit über 20 Jahren Erfahrung.',
    phone: '+43 677 789 123',
    email: 'a.lehmann@gutachten.at',
    address: '5020 Salzburg',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '4',
    name: 'Thomas Berger',
    profession: {
      title: 'service-around.services.builder',
      key: 'builder',
    },
    description:
      'Baumeister mit Expertise in nachhaltigem Wohnbau und Sanierungen.',
    phone: '+43 732 567 890',
    email: 't.berger@bau.at',
    address: '8010 Graz',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '5',
    name: 'Elisabeth Wagner',
    profession: {
      title: 'service-around.services.architect',
      key: 'architect',
    },
    description:
      'Architektin spezialisiert auf moderne Wohnkonzepte und Innenraumgestaltung.',
    phone: '+43 512 334 556',
    email: 'e.wagner@architekt.at',
    address: '6020 Innsbruck',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '6',
    name: 'Florian Schmidt',
    profession: {
      title: 'service-around.services.roofers',
      key: 'roofers',
    },
    description:
      'Dachdecker mit Spezialisierung auf energieeffiziente Dachlösungen.',
    phone: '+43 660 998 112',
    email: 'f.schmidt@dach.at',
    address: '9020 Klagenfurt',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '7',
    name: 'Johannes Fischer',
    profession: {
      title: 'service-around.services.kitchen-installation',
      key: 'kitchen-installation',
    },
    description: 'Spezialist für Maßküchen mit über 15 Jahren Erfahrung.',
    phone: '+43 650 789 432',
    email: 'j.fischer@kuechen.at',
    address: '3300 Amstetten',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '8',
    name: 'Marie König',
    profession: {
      title: 'service-around.services.cleaning-staff',
      key: 'cleaning-staff',
    },
    description:
      'Reinigungskraft mit Schwerpunkt auf Haushalts- und Büroreinigung.',
    phone: '+43 699 456 789',
    email: 'm.koenig@clean.at',
    address: '7000 Eisenstadt',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '9',
    name: 'Lukas Mayer',
    profession: {
      title: 'service-around.services.electrician',
      key: 'electrician',
    },
    description: 'Elektriker mit Spezialisierung auf Smart-home-Systeme.',
    phone: '+43 676 543 210',
    email: 'l.mayer@elektro.at',
    address: '4600 Wels',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '10',
    name: 'Sebastian Hartmann',
    profession: {
      title: 'service-around.services.floor-layer',
      key: 'floor-layer',
    },
    description: 'Experte für Parkett-, Laminat- und Vinylböden.',
    phone: '+43 699 777 888',
    email: 's.hartmann@boden.at',
    address: '3100 St. Pölten',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '11',
    name: 'Katrin Bauer',
    profession: {
      title: 'service-around.services.housekeeper',
      key: 'housekeeper',
    },
    description:
      'Erfahrene Hausmeisterin mit Blick für Ordnung und Sicherheit.',
    phone: '+43 699 234 567',
    email: 'k.bauer@haus.at',
    address: '6800 Feldkirch',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '44',
    name: 'Stefan Huber',
    profession: {
      title: 'service-around.services.architect',
      key: 'architect',
    },
    description: 'Architekt mit Fokus auf nachhaltiges Bauen.',
    phone: '+43 699 555 234',
    email: 's.huber@architekt.at',
    address: '1010 Wien',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '45',
    name: 'Lena Meier',
    profession: {
      title: 'service-around.services.cleaning-staff',
      key: 'cleaning-staff',
    },
    description: 'Professionelle Reinigungskraft für Haushalte und Büros.',
    phone: '+43 660 987 654',
    email: 'l.meier@clean.at',
    address: '7000 Eisenstadt',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '46',
    name: 'Patrick König',
    profession: {
      title: 'service-around.services.electrician',
      key: 'electrician',
    },
    description: 'Elektriker mit Erfahrung in Smart-home-Systemen.',
    phone: '+43 676 333 222',
    email: 'p.konig@elektro.at',
    address: '4600 Wels',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '47',
    name: 'Julia Hofer',
    profession: {
      title: 'service-around.services.kitchen-installation',
      key: 'kitchen-installation',
    },
    description: 'Spezialistin für Küchenmontage und Anpassungen.',
    phone: '+43 660 876 543',
    email: 'j.hofer@kuechen.at',
    address: '3300 Amstetten',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '48',
    name: 'Florian Winkler',
    profession: {
      title: 'service-around.services.floor-layer',
      key: 'floor-layer',
    },
    description: 'Experte für Parkett- und Vinylbodenverlegung.',
    phone: '+43 699 888 777',
    email: 'f.winkler@boden.at',
    address: '3100 St. Pölten',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '49',
    name: 'Martina Steiner',
    profession: {
      title: 'service-around.services.garden-design',
      key: 'garden-design',
    },
    description: 'Landschaftsarchitektin mit Fokus auf moderne Gartenkonzepte.',
    phone: '+43 699 222 111',
    email: 'm.steiner@garten.at',
    address: '4020 Linz',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '50',
    name: 'Johann Kurz',
    profession: {
      title: 'service-around.services.roofers',
      key: 'roofers',
    },
    description: 'Dachdecker mit Spezialisierung auf energieeffiziente Dächer.',
    phone: '+43 699 654 321',
    email: 'j.kurz@dach.at',
    address: '9020 Klagenfurt',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '51',
    name: 'Sandra Leitner',
    profession: {
      title: 'service-around.services.property-management',
      key: 'property-management',
    },
    description: 'Erfahrene Immobilienverwalterin für Wohnanlagen.',
    phone: '+43 660 987 111',
    email: 's.leitner@immo.at',
    address: '5020 Salzburg',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '52',
    name: 'Maximilian Schmid',
    profession: {
      title: 'service-around.services.law-firm-estate',
      key: 'law-firm-estate',
    },
    description: 'Rechtsanwalt für Immobilienrecht mit 15 Jahren Erfahrung.',
    phone: '+43 512 444 333',
    email: 'm.schmid@lawfirm.at',
    address: '1010 Wien',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '53',
    name: 'Nina Weber',
    profession: {
      title: 'service-around.services.housekeeper',
      key: 'housekeeper',
    },
    description:
      'Hausmeisterin mit technischem Wissen für kleinere Reparaturen.',
    phone: '+43 660 555 321',
    email: 'n.weber@haus.at',
    address: '6020 Innsbruck',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '54',
    name: 'Benjamin Hofmann',
    profession: {
      title: 'service-around.services.installer',
      key: 'installer',
    },
    description: 'Erfahrener Installateur für Heizungs- und Sanitärsysteme.',
    phone: '+43 676 111 987',
    email: 'b.hofmann@install.at',
    address: '3100 St. Pölten',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '55',
    name: 'Klara Winkler',
    profession: {
      title: 'service-around.services.doors',
      key: 'doors',
    },
    description: 'Spezialistin für Türenmontage und Reparatur.',
    phone: '+43 660 765 432',
    email: 'k.winkler@tueren.at',
    address: '4600 Wels',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '56',
    name: 'Thomas Schuster',
    profession: {
      title: 'service-around.services.windows',
      key: 'windows',
    },
    description: 'Fensterexperte für Montage und Reparatur.',
    phone: '+43 699 333 444',
    email: 't.schuster@fenster.at',
    address: '2700 Wiener Neustadt',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '57',
    name: 'Monika Leitner',
    profession: {
      title: 'service-around.services.terrace-design',
      key: 'terrace-design',
    },
    description: 'Spezialistin für Terrassengestaltung und Außendekoration.',
    phone: '+43 676 555 777',
    email: 'm.leitner@terrassen.at',
    address: '8055 Graz',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '58',
    name: 'Alexander Meier',
    profession: {
      title: 'service-around.services.louver',
      key: 'louver',
    },
    description: 'Experte für Jalousien und Sonnenschutzsysteme.',
    phone: '+43 699 777 888',
    email: 'a.meier@jalousie.at',
    address: '2340 Mödling',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '59',
    name: 'Barbara Steiner',
    profession: {
      title: 'service-around.services.various',
      key: 'various',
    },
    description:
      'Allround-Handwerkerin für verschiedene Tätigkeiten im Haus und Garten.',
    phone: '+43 676 123 987',
    email: 'b.steiner@handwerk.at',
    address: '4600 Wels',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '60',
    name: 'Michael Novak',
    profession: {
      title: 'service-around.services.notary',
      key: 'notary',
    },
    description: 'Notar mit über 30 Jahren Erfahrung in Immobilienrecht.',
    phone: '+43 512 876 543',
    email: 'm.novak@notar.at',
    address: '1010 Wien',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '61',
    name: 'Gerhard Bauer',
    profession: {
      title: 'service-around.services.tiler',
      key: 'tiler',
    },
    description: 'Spezialist für Mosaikfliesen und Badsanierungen.',
    phone: '+43 676 555 321',
    email: 'g.bauer@fliesen.at',
    address: '2340 Mödling',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '62',
    name: 'Felix Meier',
    profession: {
      title: 'service-around.services.interior-design',
      key: 'interior-design',
    },
    description: 'Innenarchitekt für moderne Wohnraumgestaltung.',
    phone: '+43 660 888 999',
    email: 'f.meier@interior.at',
    address: '8010 Graz',
    photo: 'https://i.pravatar.cc/300',
  },
  {
    id: '63',
    name: 'Maximilian Hofer',
    profession: {
      title: 'service-around.services.carpenter',
      key: 'carpenter',
    },
    description: 'Fachmann für Möbelbau und Maßanfertigungen.',
    phone: '+43 699 666 777',
    email: 'm.hofer@tischler.at',
    address: '3100 St. Pölten',
    photo: 'https://i.pravatar.cc/300',
  },
]
