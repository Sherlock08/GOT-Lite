(function(){

	angular.module("tv_facts")
	.factory("DataService",DataFactory);

	function DataFactory(){
		var dataOb = {
			tvData: houses,
			quizQuestions: quizQuestions,
			correctAnswers: correctAnswers
		}

		return dataOb;
	}

	var correctAnswers=[2,3,3,3,1,1,0,1,2,2];

	var houses=[
	{
		Name : "House Stark",
		image_url : "http://vignette4.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142",
		Location : "Winterfell",
		Sigil : "Grey Direwolf",
		Founder : "Bran the Builder",
		Description : "House Stark of Winterfell is a Great House of Westeros,ruling over the vast region known as the North and the Vale as Kings in the North from their seat in Winterfell, recently retaken by the Starks from House Bolton. It is by far one of the oldest lines of Westerosi nobility, claiming a line of descent stretching back over eight thousand years. The head of the house is the Lord of Winterfell. Before the Targaryen conquest, the leaders of House Stark ruled over the region as the Kings in the North. Jon Snow is the current King in the North and the Vale, partially due to the allegiance of Petyr Baelish, the Lord Regent of the Vale, to House Stark."
	},
	{
		Name : "House Lannister",
		image_url : "http://awoiaf.westeros.org/images/thumb/d/d5/House_Lannister.svg/250px-House_Lannister.svg.png",
		Location : "Casterly Rocks",
		Sigil : "A golden lion rampant on a crimson ",
		Founder : "Lann the Clever",
		Description : "House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway.The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep in King's Landing, the traditional seat of the royal family. House Lannister's Heraldry consists of a golden lion on a crimson background, and their House words are 'Hear me roar!', which is rarely mentioned. Their unofficial motto, which is as well known as the official one, is 'A Lannister always pays his debts' - which is used much more often and mostly in negative context, though it can also be used in the original, literal sense."
	},
	{
		Name : "House Targaryen",
		image_url : "http://awoiaf.westeros.org/images/thumb/1/1e/House_Targaryen.svg/250px-House_Targaryen.svg.png",
		Location : "Dragon Stone",
		Sigil : "A red three-headed dragon, ",
		Founder : "Aegon I Targaryen",
		Description : "House Targaryen is a Great House of Westeros and was the ruling royal House of the Seven Kingdoms for three centuries since it conquered and unified the realm, before it was deposed during Robert's Rebellion and House Baratheon replaced it as the new royal House. The few surviving Targaryens fled into exile to the Free Cities of Essos across the Narrow Sea. Currently based on Dragonstone off of the eastern coast of Westeros, House Targaryen seeks to retake the Seven Kingdoms from House Lannister, who formally replaced House Baratheon as the royal House following the destruction of the Great Sept of Baelor.House Targaryen's sigil is a three-headed red dragon on a black background, and their house words are 'Fire and Blood.'"
	},
	{
		Name : "House GreyJoy",
		image_url : "https://vignette3.wikia.nocookie.net/gameofthrones/images/8/86/House-Greyjoy-Main-Shield.PNG/revision/latest?cb=20170523015836",
		Location : "Pyke",
		Sigil : "A golden kraken on a black field",
		Founder : "Grey King",
		Description : "House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke.House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are 'We Do Not Sow,' although the phrase 'What Is Dead May Never Die' is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God. House Greyjoy had been in open rebellion against the Iron Throne since the War of the Five Kings, during which it sought independence for the Iron Islands once more. However, following the death of King Balon Greyjoy and the election of his brother, Euron, as the new King of the Iron Islands, House Greyjoy was divided between Euron and his followers, and Balon's surviving children, Yara and Theon, and their followers. Yara's faction, which had aligned with House Targaryen, was defeated by Euron, who has aligned himself with House Lannister upon the beginning of Daenerys Targaryen's invasion of Westeros."
	},
	{
		Name : "House Baratheon",
		image_url : "http://awoiaf.westeros.org/images/thumb/2/2d/House_Baratheon.svg/250px-House_Baratheon.svg.png",
		Location : "Kings Landing",
		Sigil : "A crowned black stag rampant on a gold field",
		Founder : " Orys Baratheon",
		Description : "House Baratheon of Storm's End is one of the Great Houses of Westeros, and is the principal house in the stormlands, which they rule as Lords Paramount of the Stormlands. Their seat, Storm's End, is an ancient castle raised by the Storm Kings from the now-extinct House Durrandon. The Baratheon sigil is a crowned black stag on a field of gold. Members of the family tend to be tall and powerfully built, with black hair and blue eyes, as well as strong, square jawlines. They are known for their mercurial tempers, and their words are 'Ours is the Fury'.After Robert's Rebellion, House Baratheon split into three branches: Lord Robert Baratheon was crowned King and took residence at Kings Landing, thereby creating House Baratheon of Kings Landing. Robert gave the seat of Dragonstone to his younger brother, Stannis, creating House Baratheon of Dragonstone. Roberts youngest brother, Renly, became the Lord of Storms End, continuing House Baratheon of Storms End."
	},
	{
		Name : "House Bolton",
		image_url : "https://vignette1.wikia.nocookie.net/gameofthrones/images/d/dd/House-Bolton-Main-Shield.PNG/revision/latest?cb=20161231131431",
		Location : "The Dreadfort",
		Sigil : "A red flayed man, hanging upside-down on a white X-shaped cross, on a black background",
		Founder : "Lord of the Dreadfort",
		Description : "House Bolton of the Dreadfort is an extinct noble house from the North. After the Red Wedding, they became the Great House of the North, having usurped their position from their former liege lords, House Stark. Their original lands were in the northeast of the Stark territories. Their stronghold was a castle called the Dreadfort and the head of the house was the Lord of the Dreadfort.House Bolton was infamous for its centuries-old practice of flaying their enemies alive, to the point that they used a flayed man as their House sigil. The Boltons supposedly gave up this practice after bending the knee to House Stark, and centuries later Lord Eddard Stark outlawed flaying in the North altogether, but the Boltons continued the practice. This resulted in them being despised and feared by many of the Northern houses, especially after their betrayal of House Stark and their torching of Winterfell. Shortly before the Battle of the Bastards, Lord Ramsay Bolton murdered his father, Lord Roose Bolton, taking his father's titles and ranks. In the aftermath of the battle, Ramsay was executed by the Starks; with no heir to follow him, House Bolton has become extinct."
	},
	{
		Name : "House Martell",
		image_url : "https://vignette2.wikia.nocookie.net/gameofthrones/images/7/7e/House-Martell-Main-Shield.PNG/revision/latest?cb=20170523024859",
		Location : "Dorne",
		Sigil : "A red sun pierced by a gold spear, on an orange field",
		Founder : "Local Kings in Dorne",
		Description : "House Martell of Sunspear is a legally extinct Great House of Westeros. It ruled the peninsula of Dorne in the far south of the continent from their castle Sunspear. Though loyal to the Iron Throne, the Martells were never conquered by the Targaryens and pursued a more isolated role in wider political events since Robert's Rebellion. House Martell's sigil is a red sun pierced by a golden spear, on an orange field, a combination of the original Martell sigil - a yellow spear - and the emblem of Princess Nymeria - a red sun - to symbolize the marriage of the warrior-queen to Mors Martell. Their house words are 'Unbowed, Unbent, Unbroken'.With the assassinations of Prince Doran Martell and his only heir, Prince Trystane, by Ellaria Sand and the Sand Snakes, House Martell is legally extinct, although the Sand Snakes themselves carry Martell blood through their father Oberyn. The Sand Snakes also continue to use the Martell sigil to represent themselves and Dorne.Under the leadership of Ellaria Sand and the Sand Snakes, the forces of House Martell and Dorne have aligned to support the cause of Daenerys Targaryen, against House Lannister after they declared war against them. With the deaths of the older Sand Snakes and Ellaria's sentence to life in prison, House Martell's future is uncertain."
	},
	{
		Name : "House Arryn",
		image_url : "https://vignette4.wikia.nocookie.net/gameofthrones/images/1/15/House-Arryn-Main-Shield.PNG/revision/latest?cb=20170101094153",
		Location : "Vale",
		Sigil : "A golden lion rampant on a crimson ",
		Founder : "Lann the Clever",
		Description : "House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority.Their lands are in the central-eastern region of the continent. Their seat is the Eyrie, ancestral seat of the Mountain Kings. House Arryn's sigil is a white crescent moon and falcon on a blue field. Their house words are 'As High as Honor.'At the start of the series, Lord Jon Arryn was killed under suspicious circumstances. His widow Lysa blamed House Lannister and sought refuge in the Eyrie. Despite her enmity towards the Lannisters, she remained neutral in the War of the Five Kings and aimed to use the forces of the Vale to defend Robin and the Eyrie if necessary. After killing Lysa and making it appear like an accident, Lord Petyr Baelish becomes Lord Protector of the Vale until young Robin comes of age. Under his rule, supervised by Baelish, the Vale assists House Stark in toppling House Bolton in the North during the Battle of the Bastards. After the battle, the Vale declares for House Stark and becomes part of the Kingdom of the North in defiance of the Iron Throne."
	},
	{
		Name : "House Tully",
			image_url : "http://vignette3.wikia.nocookie.net/gameofthrones/images/b/bd/House-Tully-Main-Shield.PNG/revision/latest?cb=20160312103126",
		Location : "Casterly Rocks",
		Sigil : "A golden lion rampant on a crimson ",
		Founder : "Lann the Clever",
		Description : "House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are 'Family, Duty, Honor.' At the onset of the War of the Five Kings, House Tully came under attack by House Lannister and lent its support for House Stark when they came to their aid in the liberation of the Riverlands. House Tully has since been formally stripped of lands and titles for rebellion against the Iron Throne, with Lord Edmure a captive of House Frey following the Red Wedding. Later, Ser Brynden Tully gathered the remaining Tully forces and reclaimed Riverrun from the Freys, reopening conflict between the Tullys and the Iron Throne. The Freys lay siege to Riverrun, and were later assisted by the Lannisters on the orders of King Tommen I. Ser Jaime Lannister managed to end the siege by convincing Edmure Tully to command the garrison to lay down their weapons in return for clemency and protection. Brynden was killed during a final stand with Lannister and Frey forces while Edmure was returned to the Freys as a prisoner."
	},
	{
		Name : "House Tarly",
			image_url : "https://gradypbrown.files.wordpress.com/2016/11/house-tarly-main-shield.png?w=474",
		Location : "Horn Hill",
		Sigil : "A striding huntsman, red on green",
		Founder : "Lord of Horn Hill",
		Description : "House Tarly of Horn Hill is a noble house from the Reach and formerly a vassal who swore fealty to House Tyrell of Highgarden. Their stronghold is a castle known as Horn Hill and the head of the house is the Lord of Horn Hill. House Tarly has a militarist tradition, and possesses a Valyrian steel sword called Heartsbane.The Tarly sigil is a striding huntsman, red on green. Their house words are 'First in Battle.'They swore allegiance to House Lannister, the new royal family after the extinction of House Baratheon of Kings Landing, at the onset of Daenerys Targaryens invasion of Westeros, betraying House Tyrell. Lord Randyll Tarly fights alongside Ser Jaime Lannister under the promise of being named Warden of the South after the end of the war. After the executions of Randyll and his son Dickon Tarly in the aftermath of the Battle of the Goldroad, their allegiance is uncertain. Randyll's daughter Talla Tarly has become the new head of the House and Lady of Horn Hill."
}
];

	var quizQuestions=[
	{
	type : "text",
	text : "Who is Ned Stark's Son?",
	possibilities : [
	{
	answer : "Jon snow"
	},
	{
	answer : "Ramsey Snow"	
	},
	{
	answer : "Robb Stark"
	},
	{
		answer : "Sansa Stark"
	}
	],
	selected: null,
	correct: null
},
{
	type : "text",
	text : "At the start of the story who was the king of the Westeros?",
	possibilities : [
	{
	answer : "Eddard Stark"
	},
	{
	answer : "Jofferey Baratheon"	
	},
	{
	answer : "Tywin Lannister"
	},
	{
		answer : "Robert Baratheon"
	}
	],
	selected: null,
	correct: null

},
{
	type : "text",
	text : "House Greyjoy serve which region?",
	possibilities : [
	{
	answer : "Dorne"
	},
	{
	answer : "The Reach"	
	},
	{
	answer : "Pentos"
	},
	{
		answer : "The Iron Islands"
	}
	],
	selected: null,
	correct: null

},
{
	type : "text",
	text : "What is the main religion in Westeros?",
	possibilities : [
	{
	answer : "Old Gods of the Forest"
	},
	{
	answer : "The Drowned God"	
	},
	{
	answer : "The Lord of Light"
	},
	{
		answer : "Faith of the Seven"
	}
	],
	selected: null,
	correct: null

},
{
	type : "text",
	text : "What is Hodor's real Name?",
	possibilities : [
	{
	answer : "Hodor"
	},
	{
	answer : "Wylis"	
	},
	{
	answer : "Theon"
	},
	{
		answer : "Craster"
	}
	],
	selected: null,
	correct: null

},
{
	type : "text",
	text : "Which Kingdom is not one of the main Seven Kingdoms?",
	possibilities : [
	{
	answer : "Principality of Dorne"
	},
	{
	answer : "Kingdom of the Isles and Rivers"	
	},
	{
	answer : "Kingdom of the Andals"
	},
	{
		answer : "Kingdom of the Rock"
	}
	],
	selected: null,
	correct: null

},
{
	type : "text",
	text : "Why was Jorah Mormont exiled from Westeros?",
	possibilities : [
	{
	answer : "For selling slaves"
	},
	{
	answer : "To trading illegal spices"	
	},
	{
	answer : "For murders"
	},
	{
		answer : "For buying slaves"
	}
	],
	selected: null,
	correct: null

},
{
	type : "text",
	text : "What is the name of Eddard Stark's sword?",
	possibilities : [
	{
	answer : "Longclaw"
	},
	{
	answer : "Ice"	
	},
	{
	answer : "Hearteater"
	},
	{
		answer : "Oathkeeper"
	}
	],
	selected: null,
	correct: null

},
{
	type : "text",
	text : "Who kills Balon Greyjoy?",
	possibilities : [
	{
	answer : "Theon"
	},
	{
	answer : "yara"	
	},
	{
	answer : "Euron"
	},
	{
		answer : "Jon snow"
	}
	],
	selected: null,
	correct: null

},
{
	type : "text",
	text : "What is Jon Snow's Real name?",
	possibilities : [
	{
	answer : "Jon snow"
	},
	{
	answer : "Jon Sand"	
	},
	{
	answer : "Aegon Targaryen"
	},
	{
		answer : "Rheagar Targaryen"
	}
	],
	selected: null,
	correct: null

}
	];
})();