---
title: Einstellungen der Organisation
featured: false
---

Die Einstellungen der Organisation beinhaltet die wichtigsten Stellschrauben von HeimV.

### Allgemein

#### Name

Name der Organisation

#### Anschrift

Anschrift der Organisation inkl. Name, Strasse und Ort. Wird als Standard für Verträge und Rechnungen verwendet.

#### Hauptsprache

Hauptsprache der Organisation. Wird als Standard verwendet, wenn der Mieter keine andere Sprache auswählt.

#### Sprachen

Verfügbare Sprachen, aus denen der Mieter auswählen kann. 

> Die Sprachen sollten erst aktiviert werden, wenn alle Textvorlagen in der enstprechenden Sprache erfasst wurden.

### Benachrichtigungen

#### Nachrichten aktiviert

Legt fest, ob die automatischen Benachrichtigungen aus HeimV grundsätzlich per E-Mail versendet werden sollen.

> Für Tests und Datenmigrationen sollten die Nachrichten deaktiviert werden

#### Email

Haupt E-Mail Adresse der Organisation. Wird als Standard für Benachrichtigungen der Verwaltung verwendet.

#### BCC

*optional*

Adresse, an welche jeweils eine Kopie jeder Benachrichtigung geschickt werden soll. Insbesondere hilfreich um den gesamten Mailverkehr nachvollziehen zu können. 

### Verträge

#### Adresse der Vertretung für Verträge

*optional*

Wird nur auf Verträgen anstatt der Anschrift der Organisation abgedruckt.

#### Vertragsunterschrift Ort

*optional*

Ort der unterhalb der Unterschrift des Vermieters im Vertrag abgedruckt wird.

#### Vertragsunterschrift Bild

Bild der Unterschrift des Vermieters im Vertrag abgedruckt wird.

> Das Bild wird in den zur Verfügung stehenden Platz im Vertrag eingepasst. Allenfalls müssen verschiedene Grössen und Randabstände im Bild ausprobiert werden, bis es gut aussieht. 

#### Vertrag «per Klick» durch Mieter unterschreiben

*optional*

Erlaubt es den Mietern, den unterschriebenen Vertrag direkt über HeimV wieder hochzuladen. Der unterschriebene Vertrag muss allerdings zwingend durch die Verwaltung nochmals geprüft werden.

### Rechnungen

#### Standardzahlungsteil

Legt fest, welcher Zahlungsteil standardmässig bei Rechnungen ausgewählt wird. 

#### IBAN

IBAN der Organisation, die auf die QR-Rechnung aufgedruckt wird.

#### Referenznummer Präfix

*optional*

Die Referenznummer für QR-Rechnungen wird von HeimV selbst erstellt. Mit dem Präfix kann festgelegt werden, mit welcher Nummer die Referenznummer beginnen soll.

#### Adresse des Rechnungskontos

Die Adresse die auf dem Zahlungsteil der QR-Rechnung abgedruckt werden soll.

### Mieter

#### Geburtsdatum Pflichteingabe

Legt fest, ob das Geburtsdatum des Mieters zwingend angegeben werden muss.

#### Bezeichnung des Übernamens

*optional*

Legt fest, wie das Feld «Übername» dargestellt werden soll, z.B. «Pfadiname».

### Belegungen

#### Farbe für provisorischen Belegungen

Legt die Farbe für provisorischen Belegungen im Kalender fest.

#### Farbe für definitive Belegungen

Legt die Farbe definitive Belegungen im Kalender fest.

#### Farbe für Schliessungen

Legt die Farbe für Schliessungen im Kalender fest.

#### Standardzeit für den Beginn der Belegung

Legt die Standardzeit für den Beginn der Belegung im Anfrageformular fest. Die Zeit kann durch den Mieter geändert werden.

#### Standardzeit für das Ende der Belegung

Legt die  Standardzeit für das Ende der Belegung im Anfrageformular fest. Die Zeit kann durch den Mieter geändert werden.

#### Beginn der Belegung auswählbare Zeiten

Legt fest, welche Zeiten der Mieter für den Beginn der Belegung auswählen kann. Die Verwaltung kann auch Zeiten ausserhalb dieser Menge auswählen.

#### Ende der Belegung auswählbare Zeiten

Legt fest, welche Zeiten der Mieter für das Ende der Belegung auswählen kann. Die Verwaltung kann auch Zeiten ausserhalb dieser Menge auswählen.

#### Frist für Kurzfristige Reservationsanfragen

Legt fest, welche Belegungen als kurzfristig gelten. 

#### Reservationsfenster

Legt fest, bis wie weit in der Zukunft der Belegungsplan angezeigt wird und bis wie weit in der Zukunft eine Anfrage über HeimV eingereicht werden kann.

Format: [ISO 8601 Zeitspannen](https://de.wikipedia.org/wiki/ISO_8601#Zeitspannen) (siehe [Fristeinstellungen](#fristeinstellungen))

#### Frist für baldige Belegung

Legt fest, wie kurz vor dem Beginn der Belegung eine Buchung als «baldige Belegung» gelten soll.

Format: [ISO 8601 Zeitspannen](https://de.wikipedia.org/wiki/ISO_8601#Zeitspannen) (siehe [Fristeinstellungen](#fristeinstellungen))

### Fristeinstellungen

Die Fristen sind im Format [ISO 8601 Zeitspannen](https://de.wikipedia.org/wiki/ISO_8601#Zeitspannen) anzugeben. 

Beispiele:

- `P2Y`: 2 Jahre
- `P1Y6M`: 1 Jahr und 6 Monate
- `P14D`: 14 Tage 
- `PT12H30M`: 12 Stunden und 30 Minuten
- `P3Y6M4DT12H30M17S`: 3 Jahre, 6 Monate, 4 Tage, 12 Stunden, 30 Minuten und 17 Sekunden

#### Frist für die Bestätigung der Email-Adresse

Gibt die Frist an, innert welcher der Mieter seine E-Mail Adresse bestätigen muss, bevor die Buchung verfällt.

> Die Frist sollte lange genug sein, damit das E-Mail Zeit hat vom Mieter gelesen und angeklickt zu werden, aber kurz genug, dass fehlgeleitete E-Mails nicht für allzu lange den Kalender blockieren.

#### Frist für provisorische Reservationsanfragen

Gibt die Frist an, innert welcher der Mieter seine provisorische Anfrage definitiv stellen oder zurückziehen muss. 

Sollte der Mieter nicht innerhalb der Frist reagieren, wird die Anfrage «überfällig» und verfällt noch nicht direkt.

#### Frist für fehlende Mieterangaben

Gibt die Frist an, innert welcher der Mieter seine Angaben vervollständigen muss, wenn die Anfrage über einen Vermittler hereingekommen ist. 

Sollte der Mieter nicht innerhalb der Frist reagieren, wird die Anfrage «überfällig» und verfällt noch nicht direkt.

#### Frist für überfällige Reservationsanfragen

Gibt die Frist an, innert welcher der Mieter reagieren muss, damit die Anfrage nicht verfällt.

Kann leer gelassen werden, damit die Anfrage gar nie verfällt.

#### Frist für Vertragseingänge

Gibt die Frist an, innert welcher der Mieter den unterschriebenen Vertrag zurückschicken muss. 

Sollte der Mieter nicht innerhalb der Frist reagieren, wird die Buchung «überfällig».

#### Fristverlängerung

Gibt an, um wie viel Zeit der Mieter gewisse Fristen verlängern kann.

#### Standardmässige Zahlungsfrist (Akontorechnung)

Gibt die Frist an, innert welcher der Mieter den Akonto begleichen muss. 

#### Standardmässige Zahlungsfrist

Gibt die Frist an, innert welcher der Mieter die Rechnungen begleichen muss. 

#### Frist für Zahlung überfällig

Gibt die Frist an, die nach der Zahlungsfälligkeit von Rechnungen verstreichen muss, bis die Buchung «überfällig» wird.

### Buchungsprozessseinstellungen

#### Standard Status für Buchungen durch Verwaltung

Legt den standardmässig ausgewählten Status für neue Buchungen durch die Verwaltung fest.

#### Status, bei welchen die Buchung als «definitiv» gilt

Legt fest, in welchem Status eine [Buchung und deren Belegungen](/docs/occupancies) als «definitiv» angezeigt werden.

#### Status, bei welchen die Buchung durch den Mieter bearbeitbar ist

Legt fest, bei welchen Status die Buchung noch durch den Mieter bearbeitbar ist

#### Warteliste aktiv

Legt fest, ob die [Warteliste](/docs/waitlist) aktiv ist.

#### Provisorische Reservationsanfragen erlauben

Legt fest, ob provisorische Anfragen durch die Mieter erlaubt sind oder ob jede Anfrage direkt als «definitiv» behandelt werden soll.
