---
title: Kalenderintegration
lead: Belegungsplan einfach in Outlook, Google Calendar & Co. integrieren
featured: true
---

Der Belegungsplan von HeimV kann einfach in andere Kalender über **ICAL** eingebunden werden.

Der ICAL-Feed steht pro Mietobjekt in zwei Varianten zur Verfügung.

### Öffentlicher ICAL Feed 

Der Link kann unter dem jeweilingen Belegungsplan in der Verwaltungsansicht kopiert werden und setzt sich wie folgt zusammen: 

`https://app.heimv.ch/<ORGANISATION>/occupiables/<MIETOBJEKT_ID>/calendar.ics?locale=<SPRACHE>`. 

Enthaltene Angaben:

- Belegung von/bis
- Buchungsnummer oder Bemerkung
- Belegungsfarbe
- Belegungsstatus (provisorisch/definitiv)

Die Angaben sind unter Umständen gecached und werden in regelmässigen Abständen aktualisiert.

Einsatzmöglichkeiten:

- Einbindung in Google Kalender
- Einbindung in Outlook
- Einbindung auf der eigenen Webseite
- Einbindung in Vermittlungsplattformen


### Privater ICAL Feed 

Der Link kann unter dem jeweilingen Belegungsplan in der Verwaltungsansicht kopiert werden und setzt sich wie folgt zusammen: 

`https://app.heimv.ch/<ORGANISATION>/occupiables/<MIETOBJEKT_ID>/calendar/private_ical_feed.ics?locale=de&token=<TOKEN>`. 

Es ist ein Token erforderlich, welches über *Einstellungen => Organisation => Benutzer => Bearbeiten => Token neu generieren* erstellt werden kann.

Enthaltene Angaben:

- Belegung von/bis
- Buchungsnummer oder Bemerkung
- Belegungsfarbe
- Belegungsstatus (provisorisch/definitiv)
- Mietername, Organisation, E-Mail und Telefonnummer
- Mietkategorie und Mietzweck

Die Angaben sind unter Umständen gecached und werden in regelmässigen Abständen aktualisiert.

