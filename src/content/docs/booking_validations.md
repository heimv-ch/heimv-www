---
layout: ../../layouts/Article.astro
title: Individuelle Gültigkeitsprüfungen
lead: Buchungen mit einstellbaren Regeln überprüfen
featured: true
---

Mit «Gültigkeitsprüfungen» können Buchungen bei der Anfrage durch Mieter oder Vermittler überprüft werden. Die Prüfung erfolgt mittels [Bedingungen](./booking_conditions). 

### Funktionsweise 

Die *Ordnungsnummer* bestimmt, in welcher Reihenfolge die Gültigkeitsprüfungen durchgeführt werden. Sie kann auch leer gelassen werden.

*Prüfen bei* legt fest, zu welchem Zeitpunkt eine Gültigkeitsprüfung durchgeführt werden soll. In den meisten Fällen sind die Erstellung und Bearbeitung durch Mieter und Vermittler eine gute Wahl.

Die *Anzuzeigende Fehlermeldung* fehlermeldung wird angezeigt, wenn die Gültigkeitsprüfung fehlschlägt (die Bedinungen *falsch* ergeben). Dieses Feld kann übersetzt werden.

*Bedingungen zur Ausführung der Gültigkeitsprüfung* aktivieren die Gültigkeitsprüfung für die entsprechende Buchung und *Gültigkeitskriterium* prüft die Buchung anschliessend auf ihre Gültikkeit. Die Bedingungen müssen *wahr* sein, damit die Fehler nicht angezeigt wird.

### Einsatzbeispiele

- Maximale Personenanzahl beschränken: mit Buchungsattribut «Erwartete Anzahl Personen»
- Auf einzelnen Mietobjekten nur gewisse Mietkategorien zulassen: mit Mietobjejt und Mietkategorie
- Zu kurze oder zu lange Mieten verbieten: mit Mietdauer


