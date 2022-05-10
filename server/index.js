const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001


// informacje do wyświetlani w logach podczas włączenia kontenera
const logi_informacje = `Kontener zostawł aktywowany: ${podaj_date(new Date)}
Autor: Maciej Rak 93006  
Aplikacja nasłuchuje na porcie: ${PORT}`
//-------------
app.get('/', (req, res) => { // info wyswietlane na stronie
  res.send("Adres ip klienta: " + req.ip.substr(7) + " | Twoja data i godzina: " + new Date().toLocaleTimeString()); 
  //wyswitel ip, date i godzine
}) 

//wyswietl dane podczas uruchamiana kontenera
app.listen(PORT, () => {
	console.log(logi_informacje)
});


//fun do ładniejszego formatowania daty :)
function podaj_date(d){
  const dzien = dodaj_0(d.getDate());
  const miesiac = dodaj_0(d.getMonth()+1);
  const rok = d.getFullYear();

  const h = dodaj_0(d.getHours());
  const m = dodaj_0(d.getMinutes());
  const s = d.getSeconds();
  const ms = d.getMilliseconds();
// zwróć datę, godzinę
  return `${dzien}/${miesiac}/${rok} ${h}:${m}:${s}:${ms}`;
}
//fun pomocnicza dla fun podaj_date, dodaje 0 jezeli potrzeba :)
function dodaj_0(x){
  if(x < 10){
    return "0"+x;
  }
  return x;
}
