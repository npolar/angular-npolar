'use strict';


// http://api.npolar.no/person/?q=&format=json&fields=email,first_name,last_name&variant=array&sort=email&limit=all
let people = [
{
"first_name": "Agneta",
"email": "agneta.fransson@npolar.no",
"last_name": "Fransson"
},
{
"first_name": "Aleksander",
"email": "aleksander.eriksen@npolar.no",
"last_name": "Eriksen"
},
{
"first_name": "Alexandra",
"email": "alex.messerli@npolar.no",
"last_name": "Messerli"
},
{
"first_name": "Alexey",
"email": "alexey.pavlov@npolar.no",
"last_name": "Pavlov"
},
{
"first_name": "Alice",
"email": "alice.trevail@npolar.no",
"last_name": "Trevail"
},
{
"first_name": "Aline",
"email": "aline.arriola@npolar.no",
"last_name": "Arriola"
},
{
"first_name": "Alistair",
"email": "alistair.everett@npolar.no",
"last_name": "Everett"
},
{
"first_name": "Allison",
"email": "allison.bailey@npolar.no",
"last_name": "Bailey"
},
{
"first_name": "Amalie",
"email": "amalie.ask@npolar.no",
"last_name": "Ask"
},
{
"first_name": "Amelie",
"email": "amelie.meyer@npolar.no",
"last_name": "Meyer"
},
{
"first_name": "Anders",
"email": "anders.balter@npolar.no",
"last_name": "Bälter"
},
{
"first_name": "Anders",
"email": "anders.skoglund@npolar.no",
"last_name": "Skoglund"
},
{
"first_name": "Andrew",
"email": "andrew.lowther@npolar.no",
"last_name": "Lowther"
},
{
"first_name": "Anette",
"email": "anette.wold@npolar.no",
"last_name": "Wold"
},
{
"first_name": "Angelika H.H.",
"email": "angelika.renner@npolar.no",
"last_name": "Renner"
},
{
"first_name": "Anja",
"email": "anja.diez@npolar.no",
"last_name": "Diez"
},
{
"first_name": "Anja",
"email": "anja.rosel@npolar.no",
"last_name": "Rösel"
},
{
"first_name": "Ankit",
"email": "ankit.pramanik@npolar.no",
"last_name": "Pramanik"
},
{
"first_name": "Ann Elin",
"email": "ann.elin.steinsund@npolar.no",
"last_name": "Steinsund"
},
{
"first_name": "Ann Kristin",
"email": "ann.kristin.balto@npolar.no",
"last_name": "Balto"
},
{
"first_name": "Anne-Britt",
"email": "anne-britt.hinz@npolar.no",
"last_name": "Hinz"
},
{
"first_name": "Anne-Cathrine",
"email": "anne.cathrine.nilsen@npolar.no",
"last_name": "Nilsen"
},
{
"first_name": "Anne",
"email": "anne.kibsgaard@npolar.no",
"last_name": "Kibsgaard"
},
{
"first_name": "Anne",
"email": "anne.urset@npolar.no",
"last_name": "Urset"
},
{
"first_name": "Antonio",
"email": "antonio.pereira@npolar.no",
"last_name": "Pereira"
},
{
"first_name": "Are",
"email": "are.bjordal@npolar.no",
"last_name": "Bjørdal"
},
{
"first_name": "Arild",
"email": "arild.sundfjord@npolar.no",
"last_name": "Sundfjord"
},
{
"first_name": "Arnaud",
"email": "arnaud.tarroux@npolar.no",
"last_name": "Tarroux"
},
{
"first_name": "Arto",
"email": "arto.miettinen@npolar.no",
"last_name": "Miettinen"
},
{
"first_name": "Åshild Ønvik",
"email": "ashild.pedersen@npolar.no",
"last_name": "Pedersen"
},
{
"first_name": "Astrid",
"email": "astrid.hogestol@npolar.no",
"last_name": "Høgestøl"
},
{
"first_name": "Atle",
"email": "atle.aasen@npolar.no",
"last_name": "Aasen"
},
{
"first_name": "Audun",
"email": "audun.gjerland@npolar.no",
"last_name": "Gjerland"
},
{
"first_name": "Audun",
"email": "audun.igesund@npolar.no",
"last_name": "Igesund"
},
{
"first_name": "Benjamin",
"email": "benjamin.merkel@npolar.no",
"last_name": "Merkel"
},
{
"first_name": "Bernt",
"email": "bernt.bye@npolar.no",
"last_name": "Bye"
},
{
"first_name": "Bertran",
"email": "bertran.kiil@npolar.no",
"last_name": "Kiil"
},
{
"first_name": "Birgit",
"email": "birgit.njaastad@npolar.no",
"last_name": "Njåstad"
},
{
"first_name": "Bjørn Fossli",
"email": "bjorn.fossli.johansen@npolar.no",
"last_name": "Johansen"
},
{
"first_name": "Britt",
"email": "britt.simones@npolar.no",
"last_name": "Simones"
},
{
"first_name": "Caixin",
"email": "caixin.wang@npolar.no",
"last_name": "Wang"
},
{
"first_name": "Cecilie H. von",
"email": "cecilie.von.quillfeldt@npolar.no",
"last_name": "Quillfeldt"
},
{
"first_name": "César",
"email": "cesar.deschamps.berger@npolar.no",
"last_name": "Deschamps-Berger"
},
{
"first_name": "Christian",
"email": "christian.engelke@npolar.no",
"last_name": "Engelke"
},
{
"first_name": "Christian",
"email": "christian.lydersen@npolar.no",
"last_name": "Lydersen"
},
{
"first_name": "Christiane",
"email": "christiane.hubner@npolar.no",
"last_name": "Hübner"
},
{
"first_name": "Christina Alsvik",
"email": "christina.pedersen@npolar.no",
"last_name": "Pedersen"
},
{
"first_name": "Conrad",
"email": "conrad.helgeland@npolar.no",
"last_name": "Helgeland"
},
{
"first_name": "Dag",
"email": "dag.bolstad@npolar.no",
"last_name": "Bolstad"
},
{
"first_name": "Dag",
"email": "dag.vongraven@npolar.no",
"last_name": "Vongraven"
},
{
"first_name": "Dierk",
"email": "dierk.blomeier@npolar.no",
"last_name": "Blomeier"
},
{
"first_name": "Dmitry",
"email": "dmitry.divine@npolar.no",
"last_name": "Divine"
},
{
"first_name": "Dmitry",
"email": "dmitry.shcherbin@npolar.no",
"last_name": "Shcherbin"
},
{
"first_name": "Einar",
"email": "einar.johansen@npolar.no",
"last_name": "Johansen"
},
{
"first_name": "Elin Vinje",
"email": "elin.vinje.jenssen@npolar.no",
"last_name": "Jenssen"
},
{
"first_name": "Elinborg",
"email": "elinborg.palsdottir@npolar.no",
"last_name": "Pålsdottir"
},
{
"first_name": "Elisabeth",
"email": "elisabeth.isaksson@npolar.no",
"last_name": "Isaksson"
},
{
"first_name": "Ellen",
"email": "ellen.oseth@npolar.no",
"last_name": "Øseth"
},
{
"first_name": "Elsa",
"email": "elsa.syrstad@npolar.no",
"last_name": "Syrstad"
},
{
"first_name": "Erik Warming",
"email": "erik.warming.andersen@npolar.no",
"last_name": "Andersen"
},
{
"first_name": "Erlend",
"email": "erlend.lorentzen@npolar.no",
"last_name": "Lorentzen"
},
{
"first_name": "Ermias Beyene",
"email": "ermias.beyene.tesfamariam@npolar.no",
"last_name": "Tesfamariam"
},
{
"first_name": "Espen",
"email": "espen.egeland@npolar.no",
"last_name": "Egeland"
},
{
"first_name": "Eva Cathrine",
"email": "eva.cathrine.hansen@npolar.no",
"last_name": "Hansen"
},
{
"first_name": "Eva",
"email": "eva.fuglei@npolar.no",
"last_name": "Fuglei"
},
{
"first_name": "Eva",
"email": "eva.fuglset@npolar.no",
"last_name": "Fuglset"
},
{
"first_name": "Evegeny",
"email": "evegeny.podolskiy@npolar.no",
"last_name": "Podolskiy"
},
{
"first_name": "Eystein",
"email": "eystein.saether@npolar.no",
"last_name": "Sæther"
},
{
"first_name": "Filip",
"email": "filip.heitmann@npolar.no",
"last_name": "Heitmann"
},
{
"first_name": "Fiona S.",
"email": "fiona.danks@npolar.no",
"last_name": "Danks"
},
{
"first_name": "Fred Endre",
"email": "fred.endre.larsen@npolar.no",
"last_name": "Larsen"
},
{
"first_name": "Fred",
"email": "fred.godtliebsen@npolar.no",
"last_name": "Godtliebsen"
},
{
"first_name": "Fredrik",
"email": "fredrik.duvohlt.haug@npolar.no",
"last_name": "Duvohlt Haug"
},
{
"first_name": "Geir",
"email": "geir.andersen@npolar.no",
"last_name": "Andersen"
},
{
"first_name": "Geir",
"email": "geir.moholdt@npolar.no",
"last_name": "Moholdt"
},
{
"first_name": "Geir Ove",
"email": "geir.ove.floan@npolar.no",
"last_name": "Fløan"
},
{
"first_name": "Geir Wing",
"email": "geir.wing.gabrielsen@npolar.no",
"last_name": "Gabrielsen"
},
{
"first_name": "George",
"email": "george.roth@npolar.no",
"last_name": "Roth"
},
{
"first_name": "Gilles",
"email": "gilles.guillon@npolar.no",
"last_name": "Guillon"
},
{
"first_name": "Gunn Sissel",
"email": "gunn.sissel.jaklin@npolar.no",
"last_name": "Jaklin"
},
{
"first_name": "Gunnar",
"email": "gunnar.sander@npolar.no",
"last_name": "Sander"
},
{
"first_name": "Gunnar",
"email": "gunnar.spreen@npolar.no",
"last_name": "Spreen"
},
{
"first_name": "Gwenaelle",
"email": "gwenaelle.hamon@npolar.no",
"last_name": "Hamon"
},
{
"first_name": "Haakon",
"email": "haakon.hop@npolar.no",
"last_name": "Hop"
},
{
"first_name": "Håkon Stensby",
"email": "hakon.stensby.sjuls@npolar.no",
"last_name": "Sjuls"
},
{
"first_name": "Halfdan Helgi",
"email": "halfdan.helgi.helgason@npolar.no",
"last_name": "Helgason"
},
{
"first_name": "Hallgeir",
"email": "hallgeir.kvernberg@npolar.no",
"last_name": "Kvernberg"
},
{
"first_name": "Hallvard",
"email": "hallvard.strom@npolar.no",
"last_name": "Strøm"
},
{
"first_name": "Hanna",
"email": "hanna.kauko@npolar.no",
"last_name": "Kauko"
},
{
"first_name": "Hans Erik",
"email": "hans.erik.fjeld@npolar.no",
"last_name": "Fjeld"
},
{
"first_name": "Harald Dag",
"email": "harald.dag.jolle@npolar.no",
"last_name": "Jølle"
},
{
"first_name": "Harald Faste",
"email": "harald.faste.aas@npolar.no",
"last_name": "Aas"
},
{
"first_name": "Harald",
"email": "harald.steen@npolar.no",
"last_name": "Steen"
},
{
"first_name": "Harvey",
"email": "harvey.goodwin@npolar.no",
"last_name": "Goodwin"
},
{
"first_name": "Håvar",
"email": "havar.henriksen@npolar.no",
"last_name": "Henriksen"
},
{
"first_name": "Håvard",
"email": "havard.hansen@npolar.no",
"last_name": "Hansen"
},
{
"first_name": "Heidi",
"email": "heidi.ahonen@npolar.no",
"last_name": "Ahonen"
},
{
"first_name": "Heidi June",
"email": "heidi.june.eklo@npolar.no",
"last_name": "Eklo"
},
{
"first_name": "Helene",
"email": "helene.henriksen@npolar.no",
"last_name": "Henriksen"
},
{
"first_name": "Heli",
"email": "heli.routti@npolar.no",
"last_name": "Routti"
},
{
"first_name": "Helle Valborg",
"email": "helle.goldman@npolar.no",
"last_name": "Goldman"
},
{
"first_name": "Ingeborg",
"email": "ingeborg.hallanger@npolar.no",
"last_name": "Hallanger"
},
{
"first_name": "Inger Brattsti",
"email": "inger.brattsti.dypas@npolar.no",
"last_name": "Dypås"
},
{
"first_name": "Inger Sofia",
"email": "inger.sofia.mercadal@npolar.no",
"last_name": "Mercadal"
},
{
"first_name": "Inger",
"email": "inger.solheim@npolar.no",
"last_name": "Solheim"
},
{
"first_name": "Ingrid",
"email": "ingrid.berthinussen@npolar.no",
"last_name": "Berthinussen"
},
{
"first_name": "Ingrid",
"email": "ingrid.schjelderup@npolar.no",
"last_name": "Schjelderup"
},
{
"first_name": "Ingrid",
"email": "ingrid.storhaug@npolar.no",
"last_name": "Storhaug"
},
{
"first_name": "Ioanna",
"email": "ioanna.merkouriadi@npolar.no",
"last_name": "Merkouriadi"
},
{
"first_name": "Isabell",
"email": "isabell.eischeid@npolar.no",
"last_name": "Eischeid"
},
{
"first_name": "Ivar",
"email": "ivar.stokkeland@npolar.no",
"last_name": "Stokkeland"
},
{
"first_name": "Jack",
"email": "jack.kohler@npolar.no",
"last_name": "Kohler"
},
{
"first_name": "Jade",
"email": "jade.vacquie.garcia@npolar.no",
"last_name": "Vacquie-Garcia"
},
{
"first_name": "Jan Erling",
"email": "jan.erling.haugland@npolar.no",
"last_name": "Haugland"
},
{
"first_name": "Jan-Gunnar",
"email": "jan.gunnar.winther@npolar.no",
"last_name": "Winther"
},
{
"first_name": "Jan",
"email": "jan.roald@npolar.no",
"last_name": "Roald"
},
{
"first_name": "Janne",
"email": "janne.schreuder@npolar.no",
"last_name": "Schreuder"
},
{
"first_name": "Jannik",
"email": "jannik.schultner@npolar.no",
"last_name": "Schultner"
},
{
"first_name": "Jarl G.",
"email": "jarl.pedersen@npolar.no",
"last_name": "Pedersen"
},
{
"first_name": "Jean-Charles",
"email": "jean.charles.gallet@npolar.no",
"last_name": "Gallet"
},
{
"first_name": "Jean",
"email": "jean.negrel@npolar.no",
"last_name": "Negrel"
},
{
"first_name": "Jelte",
"email": "jelte.van.oostveen@npolar.no",
"last_name": "van Oostveen"
},
{
"first_name": "Jennifer",
"email": "jennifer.king@npolar.no",
"last_name": "King"
},
{
"first_name": "Jennifer",
"email": "jennifer.stien@npolar.no",
"last_name": "Stien"
},
{
"first_name": "Jenny",
"email": "jenny.baeseman@npolar.no",
"last_name": "Baeseman"
},
{
"first_name": "Jens",
"email": "jens.abild@npolar.no",
"last_name": "Abild"
},
{
"first_name": "Jim Robert",
"email": "jim.robert.johansen@npolar.no",
"last_name": "Johansen"
},
{
"first_name": "Joel",
"email": "joel.brown@npolar.no",
"last_name": "Brown"
},
{
"first_name": "Johanna",
"email": "johanna.hovinen@npolar.no",
"last_name": "Hovinen"
},
{
"first_name": "Johannes Pippidis",
"email": "johannes.pippidis.lorentzen@npolar.no",
"last_name": "Lorentzen"
},
{
"first_name": "John E.",
"email": "john.guldahl@npolar.no",
"last_name": "Guldahl"
},
{
"first_name": "John Olav",
"email": "john.olav.vinge@npolar.no",
"last_name": "Vinge"
},
{
"first_name": "John Richard",
"email": "john.richard.hansen@npolar.no",
"last_name": "Hansen"
},
{
"first_name": "Jon",
"email": "jon.aars@npolar.no",
"last_name": "Aars"
},
{
"first_name": "Jon Hugo",
"email": "jon.hugo.stromseng@npolar.no",
"last_name": "Strømseng"
},
{
"first_name": "Jørn",
"email": "jorn.dybdahl@npolar.no",
"last_name": "Dybdahl"
},
{
"first_name": "Julia",
"email": "julia.tchernova@npolar.no",
"last_name": "Tchernova"
},
{
"first_name": "Kai Bjarne",
"email": "kai.bjarne.johannessen@npolar.no",
"last_name": "Johannessen"
},
{
"first_name": "Karen",
"email": "karen.lone@npolar.no",
"last_name": "Lone"
},
{
"first_name": "Kari",
"email": "kari.larsen@npolar.no",
"last_name": "Larsen"
},
{
"first_name": "Katrin",
"email": "katrin.lindback@npolar.no",
"last_name": "Lindbäck"
},
{
"first_name": "Katrine",
"email": "katrine.husum@npolar.no",
"last_name": "Husum"
},
{
"first_name": "Kenichi",
"email": "kenichi.matsuoka@npolar.no",
"last_name": "Matsuoka"
},
{
"first_name": "Kent-Ove",
"email": "kent-ove.bolli@npolar.no",
"last_name": "Bolli"
},
{
"first_name": "Kenth",
"email": "kenth.hanssen@npolar.no",
"last_name": "Hanssen"
},
{
"first_name": "Kim",
"email": "kim.holmen@npolar.no",
"last_name": "Holmén"
},
{
"first_name": "Kit M.",
"email": "kit.kovacs@npolar.no",
"last_name": "Kovacs"
},
{
"first_name": "Kjersti",
"email": "kjersti.kalhagen@npolar.no",
"last_name": "Kalhagen"
},
{
"first_name": "Knut Ole",
"email": "knut.ole.strysse@npolar.no",
"last_name": "Strysse"
},
{
"first_name": "Kristen",
"email": "kristen.fossan@npolar.no",
"last_name": "Fossan"
},
{
"first_name": "Kristin",
"email": "kristin.arntzen@npolar.no",
"last_name": "Arntzen"
},
{
"first_name": "Kristin",
"email": "kristin.heggland@npolar.no",
"last_name": "Heggland"
},
{
"first_name": "Kristin",
"email": "kristin.storvik@npolar.no",
"last_name": "Storvik"
},
{
"first_name": "Lana",
"email": "lana.cohen@npolar.no",
"last_name": "Cohen"
},
{
"first_name": "Lars",
"email": "lars.dahle@npolar.no",
"last_name": "Dahle"
},
{
"first_name": "Lasse",
"email": "lasse.mork.olsen@npolar.no",
"last_name": "Mork Olsen"
},
{
"first_name": "Laura",
"email": "laura.de.steur@npolar.no",
"last_name": "de Steur"
},
{
"first_name": "Lawrence",
"email": "lawrence.hislop@npolar.no",
"last_name": "Hislop"
},
{
"first_name": "Leif Arild",
"email": "leif.arild.hahjem@npolar.no",
"last_name": "Håhjem"
},
{
"first_name": "Leif Helge",
"email": "leif.helge.jensen@npolar.no",
"last_name": "Jensen"
},
{
"first_name": "Lisa",
"email": "lisa.orme@npolar.no",
"last_name": "Orme"
},
{
"first_name": "Magali",
"email": "magali.lucia@npolar.no",
"last_name": "Lucia"
},
{
"first_name": "Magnus",
"email": "magnus.andersen@npolar.no",
"last_name": "Andersen"
},
{
"first_name": "Magnus Hovind",
"email": "magnus.hovind.rognhaug@npolar.no",
"last_name": "Rognhaug"
},
{
"first_name": "Magnus",
"email": "magnus.osterlund@npolar.no",
"last_name": "Österlund"
},
{
"first_name": "Malin",
"email": "malin.daase@npolar.no",
"last_name": "Daase"
},
{
"first_name": "Mar",
"email": "mar.fernandez.mendez@npolar.no",
"last_name": "Fernández-Méndez"
},
{
"first_name": "Mari Katrine",
"email": "mari.katrine.berg@npolar.no",
"last_name": "Berg"
},
{
"first_name": "Maria A.",
"email": "maria.granberg@npolar.no",
"last_name": "Granberg"
},
{
"first_name": "Marianne",
"email": "marianne.josefsen@npolar.no",
"last_name": "Josefsen"
},
{
"first_name": "Marie-Anne",
"email": "marie.anne.blanchet@npolar.no",
"last_name": "Blanchet"
},
{
"first_name": "Marit Raak",
"email": "marit.raak.pettersen@npolar.no",
"last_name": "Pettersen"
},
{
"first_name": "Marius",
"email": "marius.bratrein@npolar.no",
"last_name": "Bratrein"
},
{
"first_name": "Marta Karoline",
"email": "marta.karoline.jansen@npolar.no",
"last_name": "Jansen"
},
{
"first_name": "Marte",
"email": "marte.melnes@npolar.no",
"last_name": "Melnes"
},
{
"first_name": "Marzena",
"email": "marzena.kaczmarska@npolar.no",
"last_name": "Kaczmarska"
},
{
"first_name": "Wojtek",
"email": "material@npolar.no",
"last_name": "Moskal"
},
{
"first_name": "Christian",
"email": "material@npolar.no",
"last_name": "Zoelly"
},
{
"first_name": "Mats-Ola",
"email": "mats-ola.finn@npolar.no",
"last_name": "Finn"
},
{
"first_name": "Mats A.",
"email": "mats.granskog@npolar.no",
"last_name": "Granskog"
},
{
"first_name": "Max",
"email": "max.koenig@npolar.no",
"last_name": "König"
},
{
"first_name": "Michael",
"email": "michael.greenacre@npolar.no",
"last_name": "Greenacre"
},
{
"first_name": "Mikko",
"email": "mikko.vihtakari@npolar.no",
"last_name": "Vihtakari"
},
{
"first_name": "Monica",
"email": "monica.votvik@npolar.no",
"last_name": "Votvik"
},
{
"first_name": "Nalân",
"email": "nalan.koc@npolar.no",
"last_name": "Koç"
},
{
"first_name": "Nanette",
"email": "nanette.verboven@npolar.no",
"last_name": "Verboven"
},
{
"first_name": "Nikolas",
"email": "nikolas.villarroel.cajales@npolar.no",
"last_name": "Villarroel Cajales"
},
{
"first_name": "Nina Mari",
"email": "nina.mari.jorgensen@npolar.no",
"last_name": "Jørgensen"
},
{
"first_name": "Oddvar Syver",
"email": "oddvar.horn@npolar.no",
"last_name": "Horn"
},
{
"first_name": "Oddveig Øien",
"email": "oddveig.orvoll@npolar.no",
"last_name": "Ørvoll"
},
{
"first_name": "Ola",
"email": "ola.storro@npolar.no",
"last_name": "Storrø"
},
{
"first_name": "Olav",
"email": "olav.ljokjel@npolar.no",
"last_name": "Ljøkjel"
},
{
"first_name": "Olga",
"email": "olga.pavlova@npolar.no",
"last_name": "Pavlova"
},
{
"first_name": "Øystein",
"email": "oystein.mikelborg@npolar.no",
"last_name": "Mikelborg"
},
{
"first_name": "Øystein",
"email": "oystein.overrein@npolar.no",
"last_name": "Overrein"
},
{
"first_name": "Pål-Yngve",
"email": "pal.yngve.lind@npolar.no",
"last_name": "Lind"
},
{
"first_name": "Paul A.",
"email": "paul.dodd@npolar.no",
"last_name": "Dodd"
},
{
"first_name": "Paul-Inge",
"email": "paul.inge.flakstad@npolar.no",
"last_name": "Flakstad"
},
{
"first_name": "Pedro",
"email": "pedro.duarte@npolar.no",
"last_name": "Duarte"
},
{
"first_name": "Per Erik",
"email": "per.erik.hanevold@npolar.no",
"last_name": "Hanevold"
},
{
"first_name": "Per Inge",
"email": "per.inge.myhre@npolar.no",
"last_name": "Myhre"
},
{
"first_name": "Peter",
"email": "peter.thor@npolar.no",
"last_name": "Thor"
},
{
"first_name": "Petter",
"email": "petter.aberg@npolar.no",
"last_name": "Åberg"
},
{
"first_name": "Philipp",
"email": "philipp.assmy@npolar.no",
"last_name": "Assmy"
},
{
"first_name": "Polona",
"email": "polona.itkin@npolar.no",
"last_name": "Itkin"
},
{
"first_name": "Per Morten",
"email": "post@npolar.no",
"last_name": "Aarak"
},
{
"first_name": "Vegard",
"email": "post@npolar.no",
"last_name": "Tuven"
},
{
"first_name": "Joachim",
"email": "post@npolar.no",
"last_name": "Jacobs"
},
{
"first_name": "Alf Ingar",
"email": "post@npolar.no",
"last_name": "Midtskog"
},
{
"first_name": "Ida Elen",
"email": "post@npolar.no",
"last_name": "Asklund"
},
{
"first_name": "Joacim",
"email": "post@npolar.no",
"last_name": "Bugge"
},
{
"first_name": "Marit",
"email": "post@npolar.no",
"last_name": "Øvstedal"
},
{
"first_name": "Ragnhild",
"email": "ragnhild.lindberg@npolar.no",
"last_name": "Lindberg"
},
{
"first_name": "Reidun",
"email": "reidun.ingebrigtsen@npolar.no",
"last_name": "Yttergård Ingebrigtsen"
},
{
"first_name": "Remi Aleksander",
"email": "remi.aleksander.solas@npolar.no",
"last_name": "Solås"
},
{
"first_name": "Rita",
"email": "rita.brannfjell@npolar.no",
"last_name": "Brannfjell"
},
{
"first_name": "Robert",
"email": "robert.graham@npolar.no",
"last_name": "Graham"
},
{
"first_name": "Roger Willy",
"email": "roger.hagerup@npolar.no",
"last_name": "Hagerup"
},
{
"first_name": "Rolf",
"email": "rolf.kristiansen@npolar.no",
"last_name": "Kristiansen"
},
{
"first_name": "Roy B.",
"email": "roy.bruun@npolar.no",
"last_name": "Bruun"
},
{
"first_name": "Ruben",
"email": "ruben.dens@npolar.no",
"last_name": "Dens"
},
{
"first_name": "Rune",
"email": "rune.stebekk.simonstad@npolar.no",
"last_name": "Stebekk Simonstad"
},
{
"first_name": "Rune",
"email": "rune.svendsen@npolar.no",
"last_name": "Svendsen"
},
{
"first_name": "Rupert",
"email": "rupert.krapp@npolar.no",
"last_name": "Krapp"
},
{
"first_name": "Sabrina",
"email": "sabrina.tartu@npolar.no",
"last_name": "Tartu"
},
{
"first_name": "Sebastian",
"email": "sebastian.gerland@npolar.no",
"last_name": "Gerland"
},
{
"first_name": "Sébastien",
"email": "sebastien.descamps@npolar.no",
"last_name": "Descamps"
},
{
"first_name": "Sigurd",
"email": "sigurd.benjaminsen@npolar.no",
"last_name": "Benjaminsen"
},
{
"first_name": "Siri Birgitte",
"email": "siri.birgitte.uldal@npolar.no",
"last_name": "Uldal"
},
{
"first_name": "Sissel Norum",
"email": "sissel.norum.hofsoy@npolar.no",
"last_name": "Hofsøy"
},
{
"first_name": "Sissel",
"email": "sissel.olsen@npolar.no",
"last_name": "Olsen"
},
{
"first_name": "Sophie",
"email": "sophie.bourgeon@npolar.no",
"last_name": "Bourgeon"
},
{
"first_name": "Stein Ørjan",
"email": "stein.orjan.nilsen@npolar.no",
"last_name": "Nilsen"
},
{
"first_name": "Stein",
"email": "stein.tronstad@npolar.no",
"last_name": "Tronstad"
},
{
"first_name": "Steinar",
"email": "steinar.aksnes@npolar.no",
"last_name": "Aksnes"
},
{
"first_name": "Stephen R.",
"email": "stephen.hudson@npolar.no",
"last_name": "Hudson"
},
{
"first_name": "Stig",
"email": "stig.mathisen@npolar.no",
"last_name": "Mathisen"
},
{
"first_name": "Stine",
"email": "stine.punsvik.olsen@npolar.no",
"last_name": "Punsvik Olsen"
},
{
"first_name": "Svein",
"email": "svein.henriksen@npolar.no",
"last_name": "Henriksen"
},
{
"first_name": "Sven",
"email": "sven.lidstrom@npolar.no",
"last_name": "Lidström"
},
{
"first_name": "Svetlana",
"email": "svetlana.divina@npolar.no",
"last_name": "Divina"
},
{
"first_name": "Synnøve",
"email": "synnove.elvevold@npolar.no",
"last_name": "Elvevold"
},
{
"first_name": "Tamer S.",
"email": "tamer.abu.alam@npolar.no",
"last_name": "Abu-Alam"
},
{
"first_name": "Tomas",
"email": "tomas.danielsen@npolar.no",
"last_name": "Danielsen"
},
{
"first_name": "Tomas",
"email": "tomas.torsvik@npolar.no",
"last_name": "Torsvik"
},
{
"first_name": "Tor Ivan",
"email": "tor.ivan.karlsen@npolar.no",
"last_name": "Karlsen"
},
{
"first_name": "Tor Ytterstad",
"email": "tor.ytterstad.hindberg@npolar.no",
"last_name": "Hindberg"
},
{
"first_name": "Tori Flaatten",
"email": "tori.flaaten.halvorsen@npolar.no",
"last_name": "Halvorsen"
},
{
"first_name": "Trine",
"email": "trine.efraimsen@npolar.no",
"last_name": "Efraimsen"
},
{
"first_name": "Trond Erik",
"email": "trond.erik.dyb@npolar.no",
"last_name": "Dyb"
},
{
"first_name": "Ulf",
"email": "ulf.grotta@npolar.no",
"last_name": "Grøtta"
},
{
"first_name": "Vigdis",
"email": "vigdis.tverberg@npolar.no",
"last_name": "Tverberg"
},
{
"first_name": "Vikram",
"email": "vikram.goel@npolar.no",
"last_name": "Goel"
},
{
"first_name": "Virve",
"email": "virve.ravolainen@npolar.no",
"last_name": "Ravolainen"
},
{
"first_name": "Vladimir",
"email": "vladimir.pavlov@npolar.no",
"last_name": "Pavlov"
},
{
"first_name": "Ward",
"email": "ward.van.pelt@npolar.no",
"last_name": "van Pelt"
},
{
"first_name": "Winfried K.",
"email": "winfried.dallmann@npolar.no",
"last_name": "Dallmann"
},
{
"first_name": "Yngve",
"email": "yngve.melvar@npolar.no",
"last_name": "Melvær"
},
{
"first_name": "Yoshie",
"email": "yoshie.kasajima@npolar.no",
"last_name": "Kasajima"
},
{
"first_name": "Andreas",
"last_name": "Uglebakken"
},
{
"first_name": "Fridjof",
"last_name": "Mehlum"
},
{
"first_name": "Achim",
"last_name": "Randelhoff"
},
{
"first_name": "Einar",
"last_name": "Midtgard"
},
{
"first_name": "Peter",
"last_name": "Järverup"
},
{
"first_name": "Geir",
"last_name": "Nedgård"
},
{
"first_name": "Carmen",
"last_name": "Vega"
},
{
"first_name": "Kent-Jöran",
"last_name": "Johansson"
},
{
"first_name": "Willy Hagen",
"last_name": "Larsen"
},
{
"first_name": "Mats",
"last_name": "Björkman"
}
];

module.exports = people;