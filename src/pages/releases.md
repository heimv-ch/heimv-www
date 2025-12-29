---
layout: ../layouts/MainMarkdown.astro
title: Versionsübersicht
---

## Version 25.12

*23.12.2025* 🎄

- Feature: Neue Zusätzliche Angabe für Länderauswahl hinzugefügt
- Feature: Bedingung für erforderliche Zusätzliche Angaben hinzugefügt
- Feature: Standardwert für Zusätzliche Angaben hinzugefügt
- Feature: Knopf um Rechnungen als versendet zu markieren hinzugefügt
- Fix: Bedingung für Zusätzliche Angaben korrigiert
- Fix: Buchungssätze für Saldo-Rechnungspositionen korrigiert
- Fix: Tarifgruppen-Minimum auf null setzen erlauben, um negative Beträge zu vermeiden
- Fix: E-Mail-Validierung verbessert

## Version 25.11

*11.11.2025* 

- Feature: Strukturierte Adresse für QR-Rechnungen verwenden
- Fix: Auswahl nicht versendeter Rechnungen in Zahlungen erlauben

## Version 25.10

*16.10.2025* 

- Feature: Versendete aber nicht zugestellte Benachrichtigungen erneut versuchen
- Fix: Verarbeitung von Buchungssätzen gefixt

## Version 25.9

*18.09.2025*

- Feature: Rechnungen und Rechnungspositionen mit neuem UI
- Feature: Neue Belegungsart «intern reseviert», der für Reservationsanfragen gesperrt ist
- Fix: Verbesserungen am der Performance
- Fix: Verbesserungen an der Prüfung von Überschneidungen

## Version 25.7

*28.07.2025*


- Feature: Noch nicht versendete Offerten werden neu mit dem Vertrag mitgeschickt
- Bugfix: Längere Adressen in Rechnungen und Verträgen werden besser dargestellt
- Bugfix: Doppelte Referenznummern bei Buchungen sind neu nicht mehr möglich. 
- Bugfix: Abgeschlossene Buchungen werden auch wieder im Belegungskalender angezeigt 
- Bugfix: Auszüge verwenden nun das Ende des ausgewählten Tages statt den Anfang
- Bugfix: Terminkonflikte werden strenger überprüft. Verwaltungen können neu keine Buchung mit Terminkonflikten mehr erstellen, ohne dass der Haken «Terminkonflikte ignorieren» gesetzt ist. 


## Version 25.6

*02.06.2025*

- Fix: Keine Fristen mehr für überfällige Anfragen erforderlich (manuell)
- Feature: Auswahl von Zeiten für Buchungen, die ausgewählt werden können
- Feature: Neues UI für Bedingungen eingeführt


## Versionen 2024


<!-- - Feature: Customize nickname field per organisation
- Feature: Introduce BookingValidations to conditionally validate bookings
- Feature: Send invoice notifications to billing operators
- Feature: Add new tarif for GroupMinimum
- Feature: Add CorsOrigin configuration on organisation
- Feature: Extend private ical export with responsibilities
- Feature: Extend booking_questions to booking agents
- Feature: Allow booking agents to add more info for an agent booking
- Feature: Use {{ TARIFS }} placeholder in contract and invoice templates
- Feature: Attach DesignatedDocuments to any MailTemplates
- Feature: Allow booking categories to be discarded
- Feature: Improve private ICAL feed
- Feature: Add new data digest template for meter reading periods
- Feature: Improve conflict resolve options for bookings
- Feature: Allow enabling languages for organisations
- Feature: Send confirmation for payments when importing CAMT-Files
- Feature: Display tax with totals
- Feature: Set default state for new bookings in manager
- Feature: Add column_config for data digests
- Feature: Add global searchbar and improve filters
- Feature: Add occupancies to booking form
- Feature: Set default times for bookings
- Improvement: Add MailTemplate to RichTextTemplates
- Feature: Edit contract and invoice emails before send -->

#### Individuelle zusätzliche Angaben in Buchungen

Neben den Angaben, welche fix in HeimV verankert sind, gibt es die Möglichkeit **zusätzliche Angaben** zu erfassen, welche von Mietenden ausgefüllt werden können/müssen. So kann HeimV ganz einfach mit zusätzlichen Angaben erweitert und auf die individuellen Bedürfnisse angepasst werden.

Erfasst werden können die Angaben als:

- Checkbox
- Datum
- Ganzzahl
- Kurz- oder Langtext
- Pflicht oder Optionale Angabe
- Änderbar bis definitiv oder immer änderbar
- Sichtbar oder unsichtbar für Mieter und Vermittler

#### Pfadi- oder Spitznamen

Neben Vor- und Nachnamen von Mietenden kann neu euch der Pfadi- oder Spitzname erfasst werden. Die Angabe ist optional und kann pro Organisation angepasst oder ausgeblendet werden.

#### Gültigkeitsprüfung von Buchungen

Neue Buchungen können nach individuellen Regeln überprüft und zurückgewiesen werden. Die Möglichkeiten sind vielfältig und können zur Plausibilierung der Anfragen beitragen. Beispiele für solche Gültigkeitsprüfung sind:

- Die Buchung ist nicht gültig wenn: _die Mietdauer weniger als 1h beträgt_
- Die Buchung ist nicht gültig wenn: _die Mietkategorie «Schule» ist und die Mietdauer 14 Tage beträgt_
- Die Buchung ist nicht gültig wenn: _die Buchung an einem Freitag beginnt und die Mietkategorie «Fest» ist_
- Die Buchung ist nicht gültig wenn: _die geschätzte Anzahl Personen über 100 ist_
- ... und viele Mehr

#### Kopien von Rechnungen an zuständigen Funktionär

Wenn eine Buchung einen Funktionär mit der Verantwortung **Verrechnung** zugewiesen hat, erhält dieser Funktionär automatisch ein Mail mit der Rechnungskopie, sofern die Textvorlagen dafür eingerichtet wurden.

#### Minimum bei Tarifen

Bei allen Tarifen gibt es die Möglichkeit mehrere Minima einzustellen:

- Minimaler Verbrauch (pro Nacht)
- Minimaler Verbrauch (Total)
- Minimaler Preis (pro Nacht)
- Minimaler Preis (Total)

Es wird immer der grösste daraus resultierende Betrag angewendet. Zusätzlich gibt es auch einen neuen Tariftyp **Tarifgruppe Minimum**, bei dem das jeweilige Minimum auf die gesamte Tarifgruppe angewendet, zu welchem dieser Tarif gehört. In der Rechnung wird dann die Differenz zum Minimum ausgewiesen.


#### Kalender auf der eigenen Webseite einbinden

Es können CORS-Origins pro Organisation festgelegt werden, sodass diese dann auf die API von HeimV zugreifen und öffentliche Daten wie den Belegungsplan abrufen und anzeigen können.

#### Privater ICAL-Export

Neben dem Standard ICAL-Feed können Verwalter auch einen «privaten ICAL Feed» erstellen, in welchem auch sensible Informationen ausgeliefert werden. Dieser ist mit einem individuellen Token geschützt. Enthaltene Informationen sind:

- Buchungsreferenz
- Informationen zum Mietenden
- Erweiterte Informationen zur Buchung wie Kategorie, Zweck und Bemerkungen
- Zuegewiesene Funktionäre


#### Verbesserte E-Mail-Vorlagen

E-Mail-Vorlagen können wie Text-Vorlagen angepasst werden. Zusätzlich bieten sie die Möglichkeit, hochgeladene Dokumente bedingt anzuhängen, wenn das E-Mail verschickt wird. Es ist möglich, E-Mails vor dem Versand in den «Postausgang» zu legen, damit es noch durch die Verwaltung geprüft und angepasst werden kann. Ebenfalls ist es möglich, optionale E-Mails ganz auszuschalten, wenn die E-Mail-Vorlage als _nicht aktiv_ markiert wird. 

#### Sprachen pro Organisation festlegen

HeimV ist grundsätzlich auf Deutsch, Französisch, Italienisch und Englisch nutzbar. Viele Teile hängen aber von den individuellen Textvorlagen der Organisationen ab und müssen explizit übersetzt werden, damit die Mehrsprachigkeit korrekt funktioniert. Organisationen haben neu die Möglichkeit, die in HeimV verfügbaren Sprachen einzuschränkgen.

#### Bestätigung für Zahlungen beim Import von CAMT-Dateien

Beim Import von CAMT-Dateien kann neu eine Zahlungsbestätigung versendet werden, wenn die entsprechende Checkbox angeklickt wird.

#### MwSt in Tarifen 

Für Mehrwertssteuerpflichtige Organisationen kann pro Tarif ein MwSt. Prozentsatz hinterlegt werden.
Steuerbeträge werden auf der Rechnung mit der Gesamtsumme angezeigt.

#### Spaltenkonfiguration für Auszüge

Auszüge können nun komfortabel über die Einstellungen angepasst werden.

#### Standardzeiten für Buchungen festlegen

Es können Standardzeiten für Buchungen in den Einstellungen definiert werden.
