---
title: Bedingungen
lead: Verhalten von HeimV mit dynamischen Bedingunen den eigenen Bedürfnissen anpassen
---

Bedingungen werden an verschiedenen Orten eingesetzt, um den Buchungsprozess zu beeinflussen:

- Tarife auswählbar machen
- Tarife automatisch auswählen 
- Gültigkeitsprüfung für Buchungen
- Dokumente an Mailvorlagen anhängen
- Verantwortlichkeiten automatisch zuweisen
- Zusätzliche Angaben einer Buchung anhängen
- Zusätzliche Angaben einer Buchung zu einer Pflichteingabe machen

### Logische Bedingungen

#### Alle Bedingungen

Alle untergeordneten Bedingungen müssen erfüllt sein, damit die Bedingung *wahr* ist.

#### Eine der Bedingungen

Eine der untergeordneten Bedingungen muss erfüllt sein, damit die Bedingung *wahr* ist.

#### Immer

Die Bedingung ist immer *wahr*

#### Nie

Die Bedingung ist nie *wahr*

### Buchungsbezogene Bedingungen

#### Buchungsattribut

Prüft, ob das ausgewählte Attribut einer Buchung mit dem angegeben Wert übereinstimmt.

- Erwartete Anzahl Personen
- Buchung durch Mieter bearbeitbar
- Anzahl Tage
- Anzahl Nächte
- Erwartete Anzahl Übernachtungen
- Gruppenname / Organisation

#### Mietkategorie

Prüft, ob die Buchung einer bestimmten Mietkategorie zugeordnet ist.

#### Belegungsdatum

Prüft, ob die Buchung dem angegebenen Zeitrahmen entspricht. 

- Beginn der Belegung
- Ende der Belegung
- Erstellung der Belegung
- Aktualisierung der Belegung
- Frist der Belegung
- Jetzt

##### Format

Der Zeitrahmen kann wie folgt angegeben werden: `YYYY-MM-DD WW THH:mm`. Beispiel: *2025-11-22 W6 T22:00*. Die einzelnen Teile können miteinander kombiniert werden.

###### Datum

Es kann ein Datum im Format YYYY-MM-DD angegeben werden, wobei jeder Teil auch duch einen \* ersetzt werden kann, um alle Werte zuzulassen. Beispiele: 

- *2025-04-01* trifft auf den 1. April 2025 zu.
- *2025-04-\** trifft auf alle Tage im April 2025 zu.
- *2025-\*-\** trifft auf jeden Tag im Jahr 2025 zu.
- *\*-04-01* trifft auf den 1. April jedes Jahres zu.

###### Wochentag

Es kann ein Wochentag mit W und einer Zahl zwischen 1 und 7 angegeben werden, wobei 1 Montag und 7 Sonntag bedeutet. Das «W» muss vorangestellt werden. Beispiele:

- *W1* trifft auf jeden Montag zu
- *W3* trifft auf jeden Mittwoch zu
- *W7* trifft auf jeden Sonntag zu

###### Uhrzeit 

Es kann ein Datum im Format THH:mm angegeben werden, wobei jeder Teil auch duch einen \* ersetzt werden kann, um alle Werte zuzulassen. Das «T» muss vorangestellt werden. Beispiele: 

- *T22:41* trifft auf die genaue Uhrzeit 22:41 zu 

#### Zusätzliche Angabe

Prüft, ob eine zusätzliche Angabe einen bestimmten Wert hat.

- **=** : Stimmt überein
- **!=** : Stimmt nicht überein

#### Status

Prüft, ob die Buchung einen bestimmten Status hat. 

- **=** : Die Buchung muss aktuell in genau diesem Status sein
- **!=** : Die Buchung darf aktuell nicht in diesem Status sein
- **>** : Die Buchung muss den Status irgendwann gehabt haben
- **<** : Die Buchung darf den Status nie gehabt haben

#### Zeitspanne

Prüft, ob die Dauer der Buchung bestimmte Kriterien erfüllt.

- Beginn der Belegung bis zum Ende der Belegung
- Erstellung der Belegung bis jetzt
- Jetzt bis zum Beginn der Belegung
- Jetzt bis zum Ende der Belegung

Der Vergleichswert muss im [ISO8601 Zeitspannen Format](https://de.wikipedia.org/wiki/ISO_8601#Zeitspannen) angegeben werden

#### Mietobjekt

Prüft, ob ein bestimmtes Mietobjekt ausgewählt wurde.

#### Ausgewählter Tarif

Prüft, ob ein bestimmter Tarif für die Buchung gewählt wurde.

#### Mieterattribut

Prüft, ob ein Attribut des Mieters einen bestimmten Wert hat.

- Ländercode (z.B. CH, DE, FR, ..) 
- Sprache (z.B. CH, DE, FR, IT oder EN)
