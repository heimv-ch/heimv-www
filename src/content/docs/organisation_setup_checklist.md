---
title: Einrichtungscheckliste
lead: Damit nach der Einrichtung nichts vergessen geht
---

1. ▢ [Organisationseinstellungen überprüfen](#organisationseinstellungen-überprüfen)
1. ▢ [Mietkategorien hinzufügen](#mietkategorien-hinzufügen)
1. ▢ [Tarife hinzufügen](#tarife-hinzufügen)
1. ▢ [Zusätzliche Angaben hinzufügen](#zusätzliche-angaben-hinzufügen)
1. ▢ [allenfalls Funktionäre und Verantwortlichkeiten hinzufügen](#funktionäre-und-verantwortlichkeiten-hinzufügen)
1. ▢ [Vertrags-, Rechnungs-, und Mailvorlagen anpassen](#vertrags--rechnungs--und-mailvorlagen-anpassen)
1. ▢ [Individuelle Gültigkeitsprüfungen einrichten](#individuelle-gültigkeitsprüfungen-einrichten)
1. ▢ [Bestehenden Buchungen importieren](#bestehenden-buchungen-importieren)
1. ▢ [Kalender auf der eigenen Webseite einbinden](#kalender-auf-der-eigenen-webseite-einbinden)

#### Organisationseinstellungen überprüfen

Zuerst sollten die Organisationseinstellungen unter _Einstellungen / Organisation_ überprüft und angepasst werden. Im einfachsten Fall müssen mindestens diese Felder ausgefüllt werden:

- Name
- Adresse
- Email
- Adresse des Rechnungskontos

> Siehe [Organisationeinstellungen](./organisation_settings)

#### Mietkategorien hinzufügen

Falls die Mietpreise auf unterschiedliche Kategorien verteilt sind, müssen **alle** Kategorien unter _Einstellungen / Mietkategorien_ erfasst werden.

Mieter haben bei einer Reservationsanfrage jeweils die Möglichkeit, die Mietkategorie selbst zu deklarieren. Die Verwaltung sollte die Plausibilität dieser Angabe bei jeder Buchung überprüfen und allenfalls ändern, da die geltenden Tarife für jede Buchung von der gewählten Kategorie abgeleitet werden.

#### Tarife hinzufügen

Die Grundlage für die Rechungsstellung in HeimV bilden die «Tarife». Jeder mögliche Tarif muss unter _Einstellungen / Tarife_ erfasst werden.

Die Tarife werden als flache Struktur abgebildet. Das bedeutet, das für jede einzelne Variante ein eigener Tarif erfasst werden muss. 

> Siehe [Tarife](./tarifs)

#### Zusätzliche Angaben hinzufügen

HeimV bietet die Möglichkeit «zusätzliche Angaben» vom oder zu dem Mietenden abzufragen oder speichern. Dazu können Felder unter _Einstellungen / Zusätzliche Angaben_ erstellt werden.

Typische zusätzliche Angaben sind z.B.: 

- IBAN für mögliche Rückzahlung
- Reinigung durch Vermietung gewünscht
- Anzahl Personen (z.B. Kinder)
- Fixleintücher gewünscht

> Siehe [zusätzliche Angaben](./booking_questions)

#### Funktionäre und Verantwortlichkeiten hinzufügen

Es sollten alle Personen, die im Prozess beteiligt sind, unter _Einstellungen / Funktionäre_ erfasst werden. Diese Personen werden dann je nach Zuteilung über die Buchungen per E-Mail informiert.

Typische Rollen Verantwortlichkeiten z.B.:

- Hausübergabe
- Hausrücknahme
- Verrechnung

> Siehe [Funktionäre und Verantwortlichkeiten](./operators)

#### Vertrags-, Rechnungs-, und Mailvorlagen anpassen

Alle E-Mails, Verträge und Rechnungen, die HeimV erstellt und verschickt sind unter _Einstellungen / Textvorlagen_ anpassbar. Unbenötigte Textvorlagen können ausgeschaltet werden. Alle verbleibenden Textvorlagen müssen durch die Verwaltung überprüft und ggf. angepasst werden

> Siehe [Textvorlagen](./rich_text_templates).

#### Individuelle Gültigkeitsprüfungen einrichten

Reservationsanfragen können vor der Erstellung durch die Mieter noch mit verschiedenen [Bedingungen](./booking_conditions) überprüft werden, um den Buchungsprozess den Anforderungen anzupassen. 

Häufige Gültigkeitsprüfungen sind z.B.:

- **Länge der Mietdauer**: _z.B. Mietdauer muss mindestens 2 Stunden betragen_
- **Reservationsfenster**: _z.B. Kategorie «Fest» kann frühestens 2 Monate im Voraus gebucht werden_

> Siehe dazu [Gültigkeitsprüfungen](./booking_validations).


#### Bestehenden Buchungen importieren

Bestehende Buchungen sollten importiert werden, damit der Kalender vollständig und korrekt mit dem alten System übereinstimmt. Die Buchungen müssen dafür als CSV-Datei bereitgestellt werden (z.B. mit Excel) und können anschliessend über _Buchungen / Neu / Import_ eingelesen werden.

Im Anschluss an den Import müssen alle Buchungen auf Richtigkeit und Vollständigkeit überprüft werden.

> Siehe [Import](./import).

#### Kalender auf der eigenen Webseite einbinden

Sind alle anderen Einstellungen gemacht und überprüft, kann der Kalender veröffentlicht und zugänglich gemacht werden, z.B. über das [Pfadiheim-Verzeichnis](https://pfadiheime.ch) oder die eigene Webseite.

> Siehe [Kalender einbinden](./embed_calendar).
