---
title: Integration auf Webseite
lead: HeimV in die eigene Webseite integrieren
featured: true
---

## Via `IFRAME`

Der Belegungskalender kann über den `<iframe>` HTML-Tag in die eigene Webseite eingebunden werden.

### Einzelnes Mietobjekt

```html
<iframe
  sandbox="allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-top-navigation"
  src="https://app.heimv.ch/<ORGANISATION>/occupiables/<MIETOBJEKT>/calendar/embed?display_months=9"
  style="width: 100%; overflow-x: hidden; overflow-y: scroll; height: 960px; border: none;">
  border="0"
</iframe>
```

### Alle Mietobjekte eines Hauptmietobjekts kombiniert

```html
<iframe
  sandbox="allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-top-navigation"
  src="https://app.heimv.ch/<ORGANISATION>/homes/<HAUPTMIETOBJEKT>/occupancies/embed?display_months=9"
  border="0"
  style="width: 100%; overflow-x: hidden; overflow-y: scroll; height: 960px; border: none;">
</iframe>
```

### Anpassungen

Es können leichte Anpassungen am Code vorgenommen werden: 

- **Anzahl angezeigte Monate anpassen**: Dafür einfach die Anzahl Monate im Query Parameter «display_monthts» des URLs eintragen.
- **Style anpassen**: Dafür kann das `style`-Attribut des Tags angepasst werden.

## Via Link

Natürlich kann HeimV aus der eingenen Webseite verlinkt werden:

- **Belegungsplan eines Hauptmietobjektes**: 
  
  ```html
  <a href="https://app.heimv.ch/<ORGANISATION>/homes/<HAUPTMIETOBJEKT>/">Belegungsplan</a>
  ```

- **Resevationsformular**: 

  ```html
  <a href="https://app.heimv.ch/<ORGANISATION>/bookings/new">Reservation</a>
  ```


## Via eigenes JavaScript 

HeimV kann auch einfach nur als Datenquelle benutzt werden, z.B. über [ICAL](./ical_feed). Der JavaScript Code muss dann selbst auf der Webseite eingebunden werden. Allenfalls muss die Webseite dann noch als sog. `CORS`-Origin auf HeimV eingetragen werden, damit der Browser den Abruf von Daten erlaubt.

Meldet euch in diesem Fall gerne direkt bei *Filou*.
