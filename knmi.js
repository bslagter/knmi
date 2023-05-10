var images = [
	{
		name: 'radar',
		url: 'http://cdn.knmi.nl/knmi/map/page/weer/actueel-weer/neerslagradar/WWWRADAR_loop.gif'
	},
	{
		name: 'radar-bliksem',
		url: 'http://cdn.knmi.nl/knmi/map/page/weer/actueel-weer/neerslagradar/WWWRADARLGT_loop.gif'
	},
	{
		name: 'radar-temperatuur',
		url: 'http://cdn.knmi.nl/knmi/map/page/weer/actueel-weer/neerslagradar/WWWRADARTMP_loop.gif'
	},
	{
		name: 'radar-windsnelheid',
		url: 'http://cdn.knmi.nl/knmi/map/page/weer/actueel-weer/neerslagradar/WWWRADARWIND_loop.gif'
	},
	{
		name: 'radar-windkracht',
		url: 'http://cdn.knmi.nl/knmi/map/page/weer/actueel-weer/neerslagradar/WWWRADARBFT_loop.gif'
	},
	{
		name: 'waarschuwingen-0',
		url: 'http://cdn.knmi.nl/knmi/map/current/weather/warning/waarschuwing_land_0_new.gif'
	},
	{
		name: 'waarschuwingen-1',
		url: 'http://cdn.knmi.nl/knmi/map/current/weather/warning/waarschuwing_land_1_new.gif'
	},
	{
		name: 'waarschuwingen-2',
		url: 'http://cdn.knmi.nl/knmi/map/current/weather/warning/waarschuwing_land_2_new.gif'
	},
	{
		name: 'actueel-temperatuur',
		url: 'http://cdn.knmi.nl/knmi/map/page/weer/actueel-weer/temperatuur.png'
	},
	{
		name: 'actueel-gevoelstemperatuur',
		url: 'http://cdn.knmi.nl/knmi/map/page/weer/actueel-weer/gevoelstemperatuur.png'
	},
	{
		name: 'actueel-windsnelheid',
		url: 'http://cdn.knmi.nl/knmi/map/page/weer/actueel-weer/windsnelheid.png'
	},
	{
		name: 'actueel-windkracht',
		url: 'http://cdn.knmi.nl/knmi/map/page/weer/actueel-weer/windkracht.png'
	},
	{
		name: 'actueel-zicht',
		url: 'http://cdn.knmi.nl/knmi/map/page/weer/actueel-weer/zicht.png'
	},
	{
		name: 'voorspelling-vandaag-nacht',
		url: 'http://cdn.knmi.nl/knmi/map/current/weather/forecast/kaart_verwachtingen_Vandaag_nacht.gif'
	},
	{
		name: 'voorspelling-vandaag-dag',
		url: 'http://cdn.knmi.nl/knmi/map/current/weather/forecast/kaart_verwachtingen_Vandaag_dag.gif'
	},
	{
		name: 'voorspelling-morgen-nacht',
		url: 'http://cdn.knmi.nl/knmi/map/current/weather/forecast/kaart_verwachtingen_Morgen_nacht.gif'
	},
	{
		name: 'voorspelling-morgen-dag',
		url: 'http://cdn.knmi.nl/knmi/map/current/weather/forecast/kaart_verwachtingen_Morgen_dag.gif'
	},
	{
		name: 'temperatuursverloop',
		url: 'http://cdn.knmi.nl/knmi/map/page/klimatologie/grafieken/maand/txgn260.png'
	},
	{
		name: 'waarneming-neerslag24u',
		url: 'http://cdn.knmi.nl/knmi/map/page/klimatologie/geografische-overzichten/prec/prec.png'
	},
	{
		name: 'waarneming-neerslag_maand',
		url: 'http://cdn.knmi.nl/knmi/map/page/klimatologie/geografische-overzichten/prec/rdsom.png'
	},
	{
		name: 'waarneming-neerslag_tekort',
		url: 'https://cdn.knmi.nl/knmi/map/page/klimatologie/grafieken/neerslagtekort/neerslagtekort_kaart.png'
	},
	{
		name: 'waarneming-neerslag_overschot',
		url: 'https://cdn.knmi.nl/knmi/map/page/klimatologie/geografische-overzichten/rdev/rdev_geografisch.png'
	},
	{
		name: 'waarneming-neerslag_tekort_grafiek',
		url: 'https://cdn.knmi.nl/knmi/map/page/klimatologie/grafieken/neerslagtekort/neerslagtekort.png'
	},
	{
		name: 'waarneming-sneeuwdek',
		url: 'http://cdn.knmi.nl/knmi/map/page/klimatologie/geografische-overzichten/sx/sx.png'
	},
	{
		name: 'waarneming-max-windstoot',
		url: 'http://cdn.knmi.nl/knmi/map/page/klimatologie/geografische-overzichten/fxx/fxx.png'
	},
	{
		name: 'waarneming-zonneschijn',
		url: 'http://cdn.knmi.nl/knmi/map/page/klimatologie/geografische-overzichten/sq/sq.png'
	},
	{
		name: 'waarneming-temperatuur-gemiddeld',
		url: 'http://cdn.knmi.nl/knmi/map/page/klimatologie/geografische-overzichten/tg/tg.png'
	},
	{
		name: 'waarneming-temperatuur-minimum',
		url: 'http://cdn.knmi.nl/knmi/map/page/klimatologie/geografische-overzichten/tn/tn.png'
	},
	{
		name: 'waarneming-temperatuur-maximum',
		url: 'http://cdn.knmi.nl/knmi/map/page/klimatologie/geografische-overzichten/tx/tx.png'
	},
];




var container = document.getElementById('container');
var i, image;
var hash = Date.now();

for (i = 0; i  < images.length; i++) {

	image = document.createElement('img');
	image.setAttribute('src', images[i].url + '?' + hash);

	container.appendChild(image);
	container.appendChild(document.createElement('br'));
}

//<img src="http://cdn.knmi.nl/knmi/map/general/weather-map.gif" /><br />
