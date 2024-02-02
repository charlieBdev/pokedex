import axios from 'axios';

export const getRandomIndex = () => {
	// from 0-2
	const random = Math.floor(Math.random() * 3);
	return random;
};

export const getRandomIds = () => {
	// from 1 to 1302, an array of three
	const randomIds = [];

	while (randomIds.length < 3) {
		const randomNum = Math.floor(Math.random() * 1302) + 1;

		if (!randomIds.includes(randomNum)) {
			randomIds.push(randomNum);
		}
	}
	return randomIds;
};

export const getScoreToBeat = (scores) => {
	if (scores.length === 0 || scores.length < 10) {
		return 0;
	} else {
		return scores[9].score;
	}
};

export const badWords = [
	'4r5e',
	'5h1t',
	'5hit',
	'a55',
	'anal',
	'anus',
	'ar5e',
	'arrse',
	'arse',
	'ass',
	'ass-fucker',
	'asses',
	'assfucker',
	'assfukka',
	'asshole',
	'assholes',
	'asswhole',
	'a_s_s',
	'b!tch',
	'b00bs',
	'b17ch',
	'b1tch',
	'ballbag',
	'balls',
	'ballsack',
	'bastard',
	'beastial',
	'beastiality',
	'bellend',
	'bestial',
	'bestiality',
	'bi+ch',
	'biatch',
	'bitch',
	'bitcher',
	'bitchers',
	'bitches',
	'bitchin',
	'bitching',
	'bloody',
	'blow job',
	'blowjob',
	'blowjobs',
	'boiolas',
	'bollock',
	'bollok',
	'boner',
	'boob',
	'boobs',
	'booobs',
	'boooobs',
	'booooobs',
	'booooooobs',
	'breasts',
	'buceta',
	'bugger',
	'bum',
	'bunny fucker',
	'butt',
	'butthole',
	'buttmuch',
	'buttplug',
	'c0ck',
	'c0cksucker',
	'carpet muncher',
	'cawk',
	'chink',
	'cipa',
	'cl1t',
	'clit',
	'clitoris',
	'clits',
	'cnut',
	'cock',
	'cock-sucker',
	'cockface',
	'cockhead',
	'cockmunch',
	'cockmuncher',
	'cocks',
	'cocksuck',
	'cocksucked',
	'cocksucker',
	'cocksucking',
	'cocksucks',
	'cocksuka',
	'cocksukka',
	'cok',
	'cokmuncher',
	'coksucka',
	'coon',
	'cox',
	'crap',
	'cum',
	'cummer',
	'cumming',
	'cums',
	'cumshot',
	'cunilingus',
	'cunillingus',
	'cunnilingus',
	'cunt',
	'cuntlick',
	'cuntlicker',
	'cuntlicking',
	'cunts',
	'cyalis',
	'cyberfuc',
	'cyberfuck',
	'cyberfucked',
	'cyberfucker',
	'cyberfuckers',
	'cyberfucking',
	'd1ck',
	'damn',
	'dick',
	'dickhead',
	'dildo',
	'dildos',
	'dink',
	'dinks',
	'dirsa',
	'dlck',
	'dog-fucker',
	'doggin',
	'dogging',
	'donkeyribber',
	'doosh',
	'duche',
	'dyke',
	'ejaculate',
	'ejaculated',
	'ejaculates',
	'ejaculating',
	'ejaculatings',
	'ejaculation',
	'ejakulate',
	'f u c k',
	'f u c k e r',
	'f4nny',
	'fag',
	'fagging',
	'faggitt',
	'faggot',
	'faggs',
	'fagot',
	'fagots',
	'fags',
	'fanny',
	'fannyflaps',
	'fannyfucker',
	'fanyy',
	'fatass',
	'fcuk',
	'fcuker',
	'fcuking',
	'feck',
	'fecker',
	'felching',
	'fellate',
	'fellatio',
	'fingerfuck',
	'fingerfucked',
	'fingerfucker',
	'fingerfuckers',
	'fingerfucking',
	'fingerfucks',
	'fistfuck',
	'fistfucked',
	'fistfucker',
	'fistfuckers',
	'fistfucking',
	'fistfuckings',
	'fistfucks',
	'flange',
	'fook',
	'fooker',
	'fuck',
	'fucka',
	'fucked',
	'fucker',
	'fuckers',
	'fuckhead',
	'fuckheads',
	'fuckin',
	'fucking',
	'fuckings',
	'fuckingshitmotherfucker',
	'fuckme',
	'fucks',
	'fuckwhit',
	'fuckwit',
	'fudge packer',
	'fudgepacker',
	'fuk',
	'fuker',
	'fukker',
	'fukkin',
	'fuks',
	'fukwhit',
	'fukwit',
	'fux',
	'fux0r',
	'f_u_c_k',
	'gangbang',
	'gangbanged',
	'gangbangs',
	'gaylord',
	'gaysex',
	'goatse',
	'God',
	'god-dam',
	'god-damned',
	'goddamn',
	'goddamned',
	'hardcoresex',
	'hell',
	'heshe',
	'hoar',
	'hoare',
	'hoer',
	'homo',
	'hore',
	'horniest',
	'horny',
	'hotsex',
	'jack-off',
	'jackoff',
	'jap',
	'jerk-off',
	'jism',
	'jiz',
	'jizm',
	'jizz',
	'kawk',
	'knob',
	'knobead',
	'knobed',
	'knobend',
	'knobhead',
	'knobjocky',
	'knobjokey',
	'kock',
	'kondum',
	'kondums',
	'kum',
	'kummer',
	'kumming',
	'kums',
	'kunilingus',
	'l3i+ch',
	'l3itch',
	'labia',
	'lust',
	'lusting',
	'm0f0',
	'm0fo',
	'm45terbate',
	'ma5terb8',
	'ma5terbate',
	'masochist',
	'master-bate',
	'masterb8',
	'masterbat*',
	'masterbat3',
	'masterbate',
	'masterbation',
	'masterbations',
	'masturbate',
	'mo-fo',
	'mof0',
	'mofo',
	'mothafuck',
	'mothafucka',
	'mothafuckas',
	'mothafuckaz',
	'mothafucked',
	'mothafucker',
	'mothafuckers',
	'mothafuckin',
	'mothafucking',
	'mothafuckings',
	'mothafucks',
	'mother fucker',
	'motherfuck',
	'motherfucked',
	'motherfucker',
	'motherfuckers',
	'motherfuckin',
	'motherfucking',
	'motherfuckings',
	'motherfuckka',
	'motherfucks',
	'muff',
	'mutha',
	'muthafecker',
	'muthafuckker',
	'muther',
	'mutherfucker',
	'n1gga',
	'n1gger',
	'nazi',
	'nigg3r',
	'nigg4h',
	'nigga',
	'niggah',
	'niggas',
	'niggaz',
	'nigger',
	'niggers',
	'nob',
	'nob jokey',
	'nobhead',
	'nobjocky',
	'nobjokey',
	'numbnuts',
	'nutsack',
	'orgasim',
	'orgasims',
	'orgasm',
	'orgasms',
	'p0rn',
	'pawn',
	'pecker',
	'penis',
	'penisfucker',
	'phonesex',
	'phuck',
	'phuk',
	'phuked',
	'phuking',
	'phukked',
	'phukking',
	'phuks',
	'phuq',
	'pigfucker',
	'pimpis',
	'piss',
	'pissed',
	'pisser',
	'pissers',
	'pisses',
	'pissflaps',
	'pissin',
	'pissing',
	'pissoff',
	'poop',
	'porn',
	'porno',
	'pornography',
	'pornos',
	'prick',
	'pricks',
	'pron',
	'pube',
	'pusse',
	'pussi',
	'pussies',
	'pussy',
	'pussys',
	'rectum',
	'retard',
	'rimjaw',
	'rimming',
	's hit',
	's.o.b.',
	'sadist',
	'schlong',
	'screwing',
	'scroat',
	'scrote',
	'scrotum',
	'semen',
	'sex',
	'sh!+',
	'sh!t',
	'sh1t',
	'shag',
	'shagger',
	'shaggin',
	'shagging',
	'shemale',
	'shi+',
	'shit',
	'shitdick',
	'shite',
	'shited',
	'shitey',
	'shitfuck',
	'shitfull',
	'shithead',
	'shiting',
	'shitings',
	'shits',
	'shitted',
	'shitter',
	'shitters',
	'shitting',
	'shittings',
	'shitty',
	'skank',
	'slut',
	'sluts',
	'smegma',
	'smut',
	'snatch',
	'son-of-a-bitch',
	'spac',
	'spunk',
	's_h_i_t',
	't1tt1e5',
	't1tties',
	'teets',
	'teez',
	'testical',
	'testicle',
	'tit',
	'titfuck',
	'tits',
	'titt',
	'tittie5',
	'tittiefucker',
	'titties',
	'tittyfuck',
	'tittywank',
	'titwank',
	'tosser',
	'turd',
	'tw4t',
	'twat',
	'twathead',
	'twatty',
	'twunt',
	'twunter',
	'v14gra',
	'v1gra',
	'vagina',
	'viagra',
	'vulva',
	'w00se',
	'wang',
	'wank',
	'wanker',
	'wanky',
	'whoar',
	'whore',
	'willies',
	'willy',
	'xrated',
	'xxx',
];

export const hasSwears = (swearList, string) => {
	return swearList.some((word) => string.toLowerCase().includes(word));
};

export const getPlaceSuffix = (place) => {
	if (place === 1) {
		return 'st';
	} else if (place === 2) {
		return 'nd';
	} else if (place === 3) {
		return 'rd';
	} else {
		return 'th';
	}
};

export const changeUsernames = (name) => {
	return name.replaceAll('e', 'é');
};

// PokeAPI
export const fetchPokemon = async () => {
	const randomIds = getRandomIds();
	const responses = await Promise.all(
		randomIds.map((id) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
	);
	return responses.map((response) => response.data);
};

// Database
const database = 'https://pokeserver-nt3v.onrender.com/scores';
// const database = 'http://localhost:3000/scores';

export const fetchScores = async () => {
	try {
		const response = await axios.get(database);
		return response.data;
	} catch (e) {
		console.error('Failed to fetch scores:', e.message);
		throw e;
	}
};

export const postScore = async (formData) => {
	try {
		const response = await axios.post(database, formData);
		return response.data;
	} catch (e) {
		console.error('Failed to post score:', e.message);
		throw e;
	}
};

// MOVE
export const handleClickStart = (
	setGameOver,
	setGameStarted,
	fetchFunc,
	setRandomIndex,
	setIsAnyClicked
) => {
	setGameOver(false);
	setGameStarted(true);
	getPokemon(fetchFunc, setRandomIndex, setIsAnyClicked);
};

// MOVE
export const getPokemon = async (
	refetchFunc,
	setRandomIndex,
	setIsAnyClicked
) => {
	await refetchFunc();
	setRandomIndex(getRandomIndex());
	setIsAnyClicked(false);
};
